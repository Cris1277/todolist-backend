// components/Task.jsx
import React from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  return (
    // Contenedor principal de la tarea con fondo claro, borde azul a la izquierda,
    // padding, y estilo flex para distribuir contenido y botones
    <div className="bg-gray-50 p-4 border-l-4 border-blue-500 rounded flex justify-between items-start">
      
      {/* Sección con el nombre y contenido de la tarea */}
      <div>
        {/* Nombre de la tarea en negrita y azul */}
        <h3 className="font-bold text-blue-600">{task.taskName}</h3>
        {/* Descripción o contenido de la tarea */}
        <p>{task.taskContent}</p>
      </div>

      {/* Contenedor de botones para eliminar y editar con espacio horizontal */}
      <div className="space-x-2">
        {/* Botón eliminar con icono y cambio de color al pasar el mouse */}
        <button
          onClick={() => onDelete(task.taskID)}  // Llama a la función onDelete pasando el ID de la tarea
          title="Eliminar"
          className="text-gray-600 hover:text-red-600"
        >
          🗑️
        </button>

        {/* Botón editar con icono y cambio de color al pasar el mouse */}
        <button
          onClick={() => onEdit(task)}  // Llama a la función onEdit pasando toda la tarea
          title="Editar"
          className="text-gray-600 hover:text-blue-600"
        >
          ✏️
        </button>
      </div>
    </div>
  );
};

export default Task;
