# ToDoList App — Fullstack Project with .NET and React

Aplicación web completa (fullstack) para la gestión de tareas personales. Incluye una **API REST robusta desarrollada con ASP.NET Core** en el backend y una **interfaz moderna construida con React** en el frontend.

Web-based fullstack application for personal task management. It includes a **robust REST API developed with ASP.NET Core** on the backend and a **modern React-based frontend interface**.

Este proyecto demuestra habilidades completas en desarrollo fullstack, incluyendo diseño de APIs, manejo de autenticación segura con JWT, persistencia de datos con EF Core y desarrollo de interfaces responsivas en React.

This project showcases fullstack development skills, including API design, secure JWT-based authentication, data persistence with EF Core, and responsive UI development in React.

---

##  Stack Tecnológico / Tech Stack

### Backend
- ASP.NET Core Web API (C#)
- Entity Framework Core (Code First)
- PostgreSQL (desplegado en Railway / hosted on Railway)
- Autenticación con JSON Web Tokens (JWT) / JWT-based Authentication
- Validaciones, hashing seguro y arquitectura en capas (Controllers, Services, Repositories)
- **La API está correctamente estructurada por capas**, separando responsabilidades para escalabilidad y mantenimiento.
- **The API is properly structured in layers**, separating responsibilities across controllers, services, and repositories for scalability and maintainability.

### Frontend
- React con Hooks / React with Hooks
- Fetch API para consumo de la API / For calling the backend
- Tailwind CSS (opcional / optional)
- Manejo de estado local y autenticación por token / Local state and token-based authentication
- Validaciones de formularios y UX clara / Form validation and clean user experience

---

##  ¿Qué demuestra este proyecto? / What does this project demonstrate?

- Capacidad para diseñar, desarrollar y desplegar una **API RESTful segura y profesional** usando .NET y C#.
- Ability to design, build, and deploy a **secure and professional RESTful API** with .NET and C#.

- Dominio de la **arquitectura en capas**, separando controladores, servicios y repositorios.
- Proficiency in **layered architecture**, separating controllers, services, and repositories.

- Habilidad para implementar **autenticación con JWT** y proteger rutas sensibles.
- Ability to implement **JWT authentication** and secure protected routes.

- Experiencia real en desarrollo **fullstack**, conectando React con ASP.NET.
- Real-world **fullstack development** experience connecting React and ASP.NET.

- Buenas prácticas de frontend: manejo de estado, validaciones y errores.
- Good frontend practices: state handling, validation, and error feedback.

- Trabajo con bases de datos PostgreSQL y migraciones con EF Core.
- PostgreSQL experience and EF Core code-first migrations.

---

## Características principales / Key Features

- Registro y login con hash seguro de contraseñas / Secure password hashing for signup & login
- Validación de email único / Unique email validation
- Autenticación JWT / JWT Authentication
- CRUD de tareas personales / Personal task CRUD operations
- Acceso a tareas restringido por usuario / Tasks linked to authenticated user only
- Feedback visual en el frontend / Clear UI feedback

---

##  Demo en vivo

Puedes probar la aplicación completa aquí:  
 [https://cozy-cocada-5d1fe4.netlify.app/](https://cozy-cocada-5d1fe4.netlify.app/)

> El frontend está desplegado en Netlify, pero su código no se encuentra en este repositorio.
> Este repositorio contiene únicamente el código del backend (.NET Web API).


## Cómo usar / How to Use

### Backend
1. Clonar el repositorio / Clone the repo
2. Configurar `appsettings.json` con tu cadena de conexión y claves JWT / Configure DB & JWT settings
3. Ejecutar migraciones EF Core / Run EF Core migrations
4. Lanzar la API: `dotnet run` / Run the API

---

## Seguridad y validaciones / Security and Validations

- Contraseñas con hash + salt (HMACSHA512)
- Password hashing with salt (HMACSHA512)

- JWT con expiración y claims de usuario
- JWT with expiration and user claims

- El backend valida propiedad de tareas antes de cada operación
- Backend checks task ownership before any operation

- Frontend maneja errores de login, validaciones y tokens expirados
- Frontend handles login errors, validation, and expired tokens

---

## Mejoras futuras / Future Improvements

- Confirmación por email / Email confirmation
- Recuperación de contraseña / Password recovery
- Mejoras UI/UX / UI/UX improvements
- Filtros y paginación / Filtering & pagination
- Tests automatizados / Automated testing

---

## Autor / Author

Cristian Serrano-[GitHub](https://github.com/Cris1277)

---

## Licencia / License

MIT License © 2025 Cristian Serrano
