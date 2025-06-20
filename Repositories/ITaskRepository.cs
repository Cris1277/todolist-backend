using ToDoList.DTOs;
using ToDoList.Models;

namespace ToDoList.Repositories
{
    public interface ITaskRepository
    {
        Task<IEnumerable<TaskDto>> GetAll();
        Task<TaskDto?> GetById(int id);
        Task<IEnumerable<TaskDto>> GetByUserId(int userId);
        Task<TaskDto> Create(TaskCreateDto taskCreateDto, int userId);
        Task<TaskDto?> Update(int id, TaskUpdateDto taskUpdateDto, int userId);
        Task<TaskDto?> Delete(int id, int userId);
    }
}
