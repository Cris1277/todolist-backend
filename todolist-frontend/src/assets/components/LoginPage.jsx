import React, { useState } from 'react';

// Componente de login/registro con validación y gestión de errores
const LoginPage = ({ onLoginSuccess }) => {
  // Estado para cambiar entre login y registro
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Expresión regular básica para validar el formato del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validaciones básicas antes de enviar al servidor
  const validateInputs = () => {
    if (isRegistering && username.length < 3) {
      setError('❌ El nombre de usuario debe tener al menos 3 caracteres.');
      return false;
    }

    if (!emailRegex.test(email)) {
      setError('❌ Ingresa un correo electrónico válido.');
      return false;
    }

    if (password.length < 6) {
      setError('❌ La contraseña debe tener al menos 6 caracteres.');
      return false;
    }

    return true;
  };

  // Lógica de login o registro
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateInputs()) return;

    // Selecciona endpoint según modo login/registro
    const endpoint = isRegistering
      ? 'https://todolist-backend-production-003d.up.railway.app/api/auth/register'
      : 'https://todolist-backend-production-003d.up.railway.app/api/auth/login';

    const payload = isRegistering
      ? { username, email, password }
      : { email, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Error');
        return;
      }

      // Si es registro, cambiamos a login tras confirmación
      if (isRegistering) {
        alert('✅ Registro exitoso. Ahora puedes iniciar sesión.');
        setIsRegistering(false);
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        // En login, guardamos token y notificamos al componente padre
        localStorage.setItem('token', data.token);
        onLoginSuccess(data.token);
      }
    } catch {
      setError('❌ Error de conexión con el servidor');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Formulario de login o registro */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegistering ? 'Registro' : 'Iniciar sesión'}
        </h2>

        {/* Campo username solo en registro */}
        {isRegistering && (
          <>
            <label className="block mb-2 font-semibold">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full border rounded p-2 mb-4"
              required
            />
          </>
        )}

        {/* Campo email */}
        <label className="block mb-2 font-semibold">Correo electrónico</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
        />

        {/* Campo contraseña */}
        <label className="block mb-2 font-semibold">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
        />

        {/* Mensaje de error */}
        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        {/* Botón de envío */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded mb-2"
        >
          {isRegistering ? 'Registrarse' : 'Entrar'}
        </button>

        {/* Toggle entre login/registro */}
        <div className="text-center text-sm mt-4">
          {isRegistering ? (
            <>
              ¿Ya tienes una cuenta?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsRegistering(false);
                  setError('');
                  setUsername('');
                  setEmail('');
                  setPassword('');
                }}
                className="text-blue-600 hover:underline"
              >
                Inicia sesión
              </button>
            </>
          ) : (
            <>
              ¿No tienes cuenta?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsRegistering(true);
                  setError('');
                  setUsername('');
                  setEmail('');
                  setPassword('');
                }}
                className="text-blue-600 hover:underline"
              >
                Regístrate
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
