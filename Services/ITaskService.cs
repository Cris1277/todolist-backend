using ToDoList.DTOs;

namespace ToDoList.Services
{
    public interface ITaskService
    {
        // Usar solo para admins, porque devuelve TODO
        Task<IEnumerable<TaskDto>> GetByUserId(int userId);

        Task<TaskDto?> GetById(int id);

        Task<TaskDto> Create(TaskCreateDto taskCreateDto, int userId);

        Task<TaskDto?> Update(int id, TaskUpdateDto taskUpdateDto, int userId);
        Task<TaskDto?> Delete(int id, int userId);

    }
}
