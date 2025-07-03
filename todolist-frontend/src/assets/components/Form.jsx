// components/Form.jsx
import React from 'react';

const Form = ({
  taskName,            // Valor actual del título de la tarea
  taskContent,         // Valor actual del contenido de la tarea
  onTaskNameChange,    // Función para actualizar el título de la tarea
  onTaskContentChange, // Función para actualizar el contenido de la tarea
  onSubmit,            // Función que maneja el envío del formulario
  isEditing            // Booleano para saber si se está editando o creando una tarea
}) => {
  return (
    <section className="mt-8">
      {/* Título del formulario cambia si estamos editando o creando */}
      <h2 className="text-xl font-semibold text-center mb-4">
        {isEditing ? 'Editar tarea' : 'Crear nueva tarea'}
      </h2>

      {/* Formulario con espacio entre campos */}
      <form onSubmit={onSubmit} className="space-y-4">

        {/* Campo para el título de la tarea */}
        <div>
          <label htmlFor="taskName" className="block font-medium">Título</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => onTaskNameChange(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Título de la tarea"
            required
          />
        </div>

        {/* Campo para el contenido o descripción de la tarea */}
        <div>
          <label htmlFor="taskContent" className="block font-medium">Contenido</label>
          <input
            type="text"
            id="taskContent"
            value={taskContent}
            onChange={(e) => onTaskContentChange(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Describe la tarea"
            required
          />
        </div>

        {/* Botón centrado */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            {isEditing ? 'Actualizar' : 'Enviar'}
          </button>
        </div>

      </form>
    </section>
  );
};

export default Form;
