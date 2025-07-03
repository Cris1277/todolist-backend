
# ✅ ToDoList App — Fullstack Project with .NET and React

Aplicación web completa (fullstack) para la gestión de tareas personales. Incluye una **API REST robusta desarrollada con ASP.NET Core** en el backend y una **interfaz moderna construida con React** en el frontend.

Web-based fullstack application for personal task management. It includes a **robust REST API developed with ASP.NET Core** on the backend and a **modern React-based frontend interface**.

Este proyecto demuestra habilidades completas en desarrollo fullstack, incluyendo diseño de APIs, manejo de autenticación segura con JWT, persistencia de datos con EF Core y desarrollo de interfaces responsivas en React.

This project showcases fullstack development skills, including API design, secure JWT-based authentication, data persistence with EF Core, and responsive UI development in React.

---

## 🔗 Demo en vivo / Live Demo

👉 [https://cozy-cocada-5d1fe4.netlify.app/](https://cozy-cocada-5d1fe4.netlify.app/)

> El frontend está desplegado en Netlify, y su código se encuentra en este repositorio (todolist-frontend).  
> This repo contains the backend code (ASP.NET Core Web API) also you can see todolist-frontend folder.

---

## 🛠️ Stack Tecnológico / Tech Stack

### 🔧 Backend
- ASP.NET Core Web API (C#)
- Entity Framework Core (Code First)
- PostgreSQL (Railway deployment)
- JSON Web Tokens (JWT)
- Hashing de contraseñas con HMACSHA512
- Arquitectura en capas (Controllers, Services, Repositories)

### 🎨 Frontend
- React (Hooks)
- Fetch API
- Tailwind CSS (opcional)
- Autenticación con token y estado local
- Validaciones de formularios

---

## 🎯 ¿Qué demuestra este proyecto? / What does it demonstrate?

- ✅ Desarrollo y despliegue de una **API RESTful segura y profesional**
- ✅ Dominio de la **arquitectura por capas**
- ✅ Autenticación con JWT y control de acceso por usuario
- ✅ Conexión real entre frontend React y backend .NET
- ✅ Buenas prácticas de validación, UX y manejo de errores
- ✅ Uso de PostgreSQL y migraciones EF Core (Code First)

---

## ✨ Características principales / Key Features

- Registro y login con hash seguro
- JWT Authentication
- CRUD de tareas por usuario autenticado
- Validación de correo único
- Manejo de expiración de tokens y errores de sesión
- Interfaz clara con feedback visual

---

## ⚙️ Cómo usar / How to Use

### Backend
1. Clona el repositorio / Clone the repo
2. Configura `appsettings.json` con tu conexión PostgreSQL y JWT
3. Ejecuta las migraciones de EF Core
4. Lanza el servidor con:
   ```bash
   dotnet run
   ```

---

## 🛡️ Seguridad y Validaciones / Security and Validations

- Hash + salt para contraseñas (HMACSHA512)
- JWT con claims y expiración
- Validación de propiedad antes de operar tareas
- Manejo de errores y expiración desde el frontend

---

## 🚀 Mejoras futuras / Future Improvements

- Confirmación por correo electrónico
- Recuperación de contraseña
- Filtros y búsqueda de tareas
- UI/UX más amigable
- Tests automatizados

---

## 👨‍💻 Autor / Author

**Cristian Serrano**  
🔗 [GitHub - Cris1277](https://github.com/Cris1277)

---

## 📝 Licencia / License

MIT License © 2025 Cristian Serrano
