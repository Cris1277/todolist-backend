using ToDoList.DTOs;
using ToDoList.Models;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using ToDoList.Repositories;

namespace ToDoList.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // Permite que retorne null si el email ya existe
        public async Task<User?> Register(UserRegisterDto userRegisterDto)
        {
            if (await _userRepository.EmailExistsAsync(userRegisterDto.Email))
                return null; // Ya existe usuario con ese email

            // Generar salt y hash de la contraseña
            var salt = GenerateSalt();
            var passwordHash = ComputeHash(userRegisterDto.Password, salt);

            var user = new User
            {
                UserName = userRegisterDto.UserName,
                Email = userRegisterDto.Email,
                PasswordHash = passwordHash,
                PasswordSalt = salt
            };

            // Usamos repo para agregar
            return await _userRepository.AddAsync(user);
        }

        // Puede retornar null si no encuentra usuario
        public async Task<User?> GetByEmail(string email)
        {
            return await _userRepository.GetByEmailAsync(email);
        }

        // Puede retornar null si las credenciales no coinciden
        public async Task<User?> ValidateUserCredentials(string email, string password)
        {
            var user = await GetByEmail(email);
            if (user == null) return null;

            var computedHash = ComputeHash(password, user.PasswordSalt);

            // Comparamos hash guardado con el computado
            if (computedHash.Length != user.PasswordHash.Length)
                return null;

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                    return null;
            }

            return user;
        }

        // --- Helpers para hash y salt ---

        private byte[] GenerateSalt()
        {
            byte[] salt = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }
            return salt;
        }

        private byte[] ComputeHash(string password, byte[] salt)
        {
            using (var sha256 = SHA256.Create())
            {
                byte[] passwordBytes = Encoding.UTF8.GetBytes(password);
                byte[] passwordWithSalt = new byte[passwordBytes.Length + salt.Length];
                Buffer.BlockCopy(passwordBytes, 0, passwordWithSalt, 0, passwordBytes.Length);
                Buffer.BlockCopy(salt, 0, passwordWithSalt, passwordBytes.Length, salt.Length);

                return sha256.ComputeHash(passwordWithSalt);
            }
        }
    }
}
