
using ToDoList.DTOs.Auth;
using ToDoList.Models;

namespace ToDoList.Services
{
    public interface IAuthService
    {
        Task<User> Register(RegisterDto registerDto);
        Task<string> Login(LoginDto loginDto);
    }
}
