using Microsoft.AspNetCore.Authorization;
using ToDoList.DTOs;
using ToDoList.Repositories;

namespace ToDoList.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _repository;

        public TaskService(ITaskRepository repository)
        {
            _repository = repository;
        }
        //Futura implementación de roles
        [Authorize(Roles = "Admin")]
        public Task<IEnumerable<TaskDto>> Get()
        {
            return _repository.GetAll();
        }

        public Task<TaskDto?> GetById(int id)
        {
            return _repository.GetById(id);
        }

        public Task<IEnumerable<TaskDto>> GetByUserId(int userId)
        {
            return _repository.GetByUserId(userId);
        }

        public Task<TaskDto> Create(TaskCreateDto taskCreateDto, int userId)
        {
            return _repository.Create(taskCreateDto, userId);
        }

        public Task<TaskDto?> Update(int id, TaskUpdateDto taskUpdateDto, int userId)
        {
            return _repository.Update(id, taskUpdateDto, userId);
        }

        public Task<TaskDto?> Delete(int id, int userId)
        {
            return _repository.Delete(id, userId);
        }
    }
}
