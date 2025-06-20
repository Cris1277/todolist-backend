using Microsoft.EntityFrameworkCore;
using ToDoList.DTOs;
using ToDoList.Models;

namespace ToDoList.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly ToDoListContext _context;

        public TaskRepository(ToDoListContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TaskDto>> GetAll()
        {
            return await _context.Tasks.Select(task => new TaskDto
            {
                TaskID = task.TaskID,
                TaskName = task.TaskName,
                TaskContent = task.TaskContent,
                UserID = task.UserID
            }).ToListAsync();
        }

        public async Task<TaskDto?> GetById(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null) return null;

            return new TaskDto
            {
                TaskID = task.TaskID,
                TaskName = task.TaskName,
                TaskContent = task.TaskContent,
                UserID = task.UserID
            };
        }

        public async Task<IEnumerable<TaskDto>> GetByUserId(int userId)
        {
            return await _context.Tasks
                .Where(t => t.UserID == userId)
                .Select(t => new TaskDto
                {
                    TaskID = t.TaskID,
                    TaskName = t.TaskName,
                    TaskContent = t.TaskContent,
                    UserID = t.UserID
                }).ToListAsync();
        }

        public async Task<TaskDto> Create(TaskCreateDto taskCreateDto, int userId)
        {
            var task = new Models.Task
            {
                TaskName = taskCreateDto.TaskName,
                TaskContent = taskCreateDto.TaskContent,
                UserID = userId
            };

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return new TaskDto
            {
                TaskID = task.TaskID,
                TaskName = task.TaskName,
                TaskContent = task.TaskContent,
                UserID = task.UserID
            };
        }

        public async Task<TaskDto?> Update(int id, TaskUpdateDto taskUpdateDto, int userId)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null || task.UserID != userId) return null;

            task.TaskName = taskUpdateDto.TaskName;
            task.TaskContent = taskUpdateDto.TaskContent;
            await _context.SaveChangesAsync();

            return new TaskDto
            {
                TaskID = task.TaskID,
                TaskName = task.TaskName,
                TaskContent = task.TaskContent,
                UserID = task.UserID
            };
        }

        public async Task<TaskDto?> Delete(int id, int userId)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null || task.UserID != userId) return null;

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return new TaskDto
            {
                TaskID = task.TaskID,
                TaskName = task.TaskName,
                TaskContent = task.TaskContent,
                UserID = task.UserID
            };
        }
    }
}
