using ToDoList.DTOs;
using ToDoList.Models;
using System.Threading.Tasks;

namespace ToDoList.Services
{
    public interface IUserService
    {
        Task<User> Register(UserRegisterDto userRegisterDto);
        Task<User> GetByEmail(string email);

        // Método para validar login: recibir email y password, y devolver usuario si es válido
        Task<User> ValidateUserCredentials(string email, string password);
    }
}
