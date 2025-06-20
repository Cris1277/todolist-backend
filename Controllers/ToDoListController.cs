using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using ToDoList.DTOs;
using ToDoList.Services;

namespace ToDoList.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoListController : ControllerBase
    {
        private readonly ITaskService _service;

        public ToDoListController(ITaskService service)
        {
            _service = service;
        }

        // Obtener todas las tareas del usuario autenticado
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskDto>>> Get()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var result = await _service.GetByUserId(userId);
            return Ok(result);
        }

        // Obtener tarea por Id solo si es del usuario autenticado
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskDto>> GetById(int id)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var taskDto = await _service.GetById(id);

            if (taskDto == null || taskDto.UserID != userId)
            {
                return Forbid();
            }

            return Ok(taskDto);
        }

        // Obtener tareas del usuario autenticado (ruta explícita)
        [HttpGet("user")]
        public async Task<ActionResult<IEnumerable<TaskDto>>> GetByUserId()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var taskDtos = await _service.GetByUserId(userId);

            if (taskDtos == null || !taskDtos.Any())
            {
                return NotFound($"No se encontraron tareas para el usuario con ID {userId}.");
            }

            return Ok(taskDtos);
        }

        // Crear tarea para el usuario autenticado
        [HttpPost]
        public async Task<ActionResult<TaskDto>> Create(TaskCreateDto taskCreateDto)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var createdTask = await _service.Create(taskCreateDto, userId);
            return CreatedAtAction(nameof(GetById), new { id = createdTask.TaskID }, createdTask);
        }

        // Actualizar tarea solo si es del usuario autenticado
        [HttpPut("{id}")]
        public async Task<ActionResult<TaskDto>> Update(int id, TaskUpdateDto taskUpdateDto)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var updatedTask = await _service.Update(id, taskUpdateDto, userId);

            if (updatedTask == null)
                return Forbid();

            return Ok(updatedTask);
        }

        // Eliminar tarea solo si es del usuario autenticado
        [HttpDelete("{id}")]
        public async Task<ActionResult<TaskDto>> Delete(int id)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
            var deletedTask = await _service.Delete(id, userId);

            if (deletedTask == null)
                return Forbid();

            return Ok(deletedTask);
        }
    }
}
