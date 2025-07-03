// App.jsx
import React, { useState, useEffect } from 'react';
import Task from './assets/components/Task';       // Componente para mostrar cada tarea individual
import Form from './assets/components/Form';       // Componente para el formulario de crear/editar tareas
import LoginPage from './assets/components/LoginPage'; // Componente para la página de login

const App = () => {
  // Estados para manejar inputs y datos
  const [userId, setUserId] = useState('');           // ID de usuario para buscar tareas y asignar en formulario
  const [taskName, setTaskName] = useState('');       // Nombre de la tarea
  const [taskContent, setTaskContent] = useState(''); // Contenido o descripción de la tarea
  const [tasks, setTasks] = useState([]);             // Lista de tareas del usuario actual
  const [editingTaskId, setEditingTaskId] = useState(null); // ID de la tarea en edición (si hay)
  const [token, setToken] = useState(localStorage.getItem('token') || ''); // Token JWT para autenticación

  // URL base de la API del backend
  const API_BASE = 'https://todolist-backend-production-003d.up.railway.app/api/todolist';
// Usa http:// si no tienes certificado SSL válido

  // Función para obtener las tareas por ID de usuario
  const getTasksByUserId = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/user/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,  // Enviar token en headers
        }
      });

      if (res.status === 401) {
        // Usuario no autorizado, token inválido o expirado
        alert('⚠️ Sesión expirada. Por favor, inicia sesión nuevamente.');
        handleLogout();
        return;
      }

      if (res.status === 404) {
        // 🔴 El usuario no existe en la base de datos
        alert("❌ El usuario no tiene aún tareas registradas.");
        setTasks([]);
        return;
      }

      if (!res.ok) {
        // ⚠️ Otro tipo de error inesperado
        alert("❌ No se pudo obtener las tareas. Intenta nuevamente.");
        return;
      }

      const data = await res.json();

      if (Array.isArray(data) && data.length === 0) {
        // 🟡 Usuario existe, pero no tiene tareas
        alert("ℹ️ El usuario no tiene tareas registradas.");
      }

      setTasks(data);
    } catch (error) {
      // 🔌 Error de red (API caída, URL incorrecta, CORS, etc.)
      console.error("Error al obtener tareas:", error);
      alert("❌ Error al conectarse al servidor. Verifica que la API esté corriendo.");
    }
  };

  // Función para eliminar una tarea
  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar esta tarea?")) return;
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,  // Enviar token
        }
      });
      if (!res.ok) throw new Error(); // Error si la respuesta no es exitosa
      alert("✅ Tarea eliminada correctamente");
      getTasksByUserId(userId); // Recargar tareas
    } catch {
      alert("❌ No se pudo eliminar la tarea");
    }
  };

  // Cargar datos de la tarea al formulario cuando se quiere editar
  const handleEdit = (task) => {
    setEditingTaskId(task.taskID);
    setTaskName(task.taskName);
    setTaskContent(task.taskContent);
    // Nota: Ya no se usa formUserId, siempre será userId actual
  };

  // Manejador de envío del formulario para crear o actualizar tarea
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita recarga de página

    // Usamos el userId actual, no uno separado del formulario
    const tarea = {
      taskName,
      taskContent,
      userId: parseInt(userId) // Usar el userId que está activo y mostrando tareas
    };

    try {
      // Si se está editando, usar PUT, si no, usar POST
      const res = await fetch(`${API_BASE}${editingTaskId ? `/${editingTaskId}` : ''}`, {
        method: editingTaskId ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Enviar token
        },
        body: JSON.stringify(tarea),
      });

      if (!res.ok) throw new Error(); // Error en la respuesta

      alert(editingTaskId ? '✅ Tarea actualizada' : '✅ Tarea creada');

      // Limpiar el formulario
      setEditingTaskId(null);
      setTaskName('');
      setTaskContent('');

      // Recargar tareas del usuario actual
      getTasksByUserId(userId);
    } catch {
      alert("❌ Ocurrió un error");
    }
  };

  // Función para cerrar sesión (logout)
  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar token de localStorage
    setToken('');                     // Limpiar estado token
    setTasks([]);                     // Limpiar tareas
    setUserId('');
    setTaskName('');
    setTaskContent('');
    setEditingTaskId(null);
  };

  // Al cargar el token, asumimos que el userId puede extraerse del token o debe ser seteado aquí.
  // Si tienes el userId en el JWT, puedes decodificarlo, aquí te dejo un ejemplo básico para JWT:
  useEffect(() => {
    if (token) {
      try {
        // Decodificar JWT para obtener userId (esto solo si el token tiene userId en payload)
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUserId(payload.userId.toString());
        getTasksByUserId(payload.userId);
      } catch (error) {
        console.error('Error al decodificar token:', error);
        // En caso de error, limpiar userId
        setUserId('');
        setTasks([]);
      }
    }
  }, [token]);

  // Si no hay token, mostrar el login
  if (!token) {
    return <LoginPage onLoginSuccess={(token) => setToken(token)} />;
  }

  return (
   <div className="min-h-screen flex flex-col">

  {/* Contenedor principal centrado */}
  <div className="flex-grow p-6 flex justify-center">
    <div className="w-full max-w-2xl bg-gray-200 p-8 rounded-xl shadow-md">

      {/* Botón Cerrar sesión en la esquina superior derecha */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>

      {/* Título centrado */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-center my-5">Bienvenidos a OH MY TASK!!</h1>
      </div>

      {/* Subtítulo */}
      <p className='text-xl font-bold text-center mb-4'>A simple Todo list</p>

      {/* Botón Mostrar tareas debajo del subtítulo, centrado */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => getTasksByUserId(userId)}
          className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 my-4 rounded"
        >
          Mostrar tareas
        </button>
      </div>

      {/* Lista de tareas */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <Task key={task.taskID} task={task} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>

      {/* Formulario para crear/editar tareas */}
      <Form
        taskName={taskName}
        taskContent={taskContent}
        onTaskNameChange={setTaskName}
        onTaskContentChange={setTaskContent}
        onSubmit={handleSubmit}
        isEditing={!!editingTaskId}
      />
    </div>
  </div>

  {/* Footer debajo del contenido */}
  <footer className="bg-gray-800 text-white text-center py-4">
    Desarrollado por <a href="https://www.bitnazari.com" className="underline hover:text-blue-400 transition-colors">Bitnazari &copy;</a>
  </footer>
</div>


  );
};

export default App;
