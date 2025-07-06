# ✅ ToDoList App — Fullstack Project with .NET and React

Web-based fullstack application for personal task management. It includes a **robust REST API developed with ASP.NET Core** on the backend and a **modern React-based frontend interface**.

This project showcases fullstack development skills, including API design, secure JWT-based authentication, data persistence with EF Core, and responsive UI development in React.

---

## 🔗 Live Demo

👉 [https://cozy-cocada-5d1fe4.netlify.app/](https://cozy-cocada-5d1fe4.netlify.app/)

> The frontend is deployed on Netlify, and its code is included in this repository (`todolist-frontend`).  
> Originally, this repository was intended to showcase only the backend, but I’ve decided to include the frontend as well in case it’s useful to others.

---

## ⚠️ Note on the Backend URL

The backend URL (`https://todolist-backend-production-003d.up.railway.app/api/`) is exposed in the frontend **for demonstration purposes only**.  
All sensitive logic and validations are handled server-side. **No secrets or sensitive variables are exposed.**

> In a production environment, it is recommended to use environment variables to securely manage URLs and tokens.

---

## 🛠️ Tech Stack

### 🔧 Backend
- ASP.NET Core Web API (C#)
- Entity Framework Core (Code First)
- PostgreSQL (deployed on Railway)
- JSON Web Tokens (JWT)
- Password hashing with HMACSHA512
- Layered architecture (Controllers, Services, Repositories)

### 🎨 Frontend
- React (Hooks)
- Fetch API
- Tailwind CSS (optional)
- Token-based authentication and local state
- Form validations

---

## 🎯 What Does This Project Demonstrate?

- ✅ Development and deployment of a **secure, professional RESTful API**
- ✅ Mastery of **layered architecture**
- ✅ JWT authentication and user-based access control
- ✅ Real integration between a React frontend and a .NET backend
- ✅ Best practices in validation, UX, and error handling
- ✅ PostgreSQL usage and EF Core Code First migrations

---

## ✨ Key Features

- Secure user registration and login
- JWT authentication
- Task CRUD operations per authenticated user
- Unique email validation
- Token expiration handling and session management
- Clean interface with visual feedback

---

## ⚙️ How to Use

### Backend
1. Clone the repository
2. Configure `appsettings.json` with your PostgreSQL connection string and JWT settings
3. Run EF Core migrations
4. Start the server:
   ```bash
   dotnet run
   ```

---

## 🛡️ Security and Validations

- Passwords hashed with salt (HMACSHA512)
- JWT with claims and expiration
- Ownership validation for all task operations
- Error and expiration handling from the frontend

---

## 🚀 Future Improvements

- Email confirmation
- Password recovery
- Task filtering and search
- Enhanced UI/UX
- Automated testing

---

## 👨‍💻 Author

**Cristian Serrano**  
🔗 [GitHub - Cris1277](https://github.com/Cris1277)

---

## 📝 License

MIT License © 2025 Cristian Serrano
