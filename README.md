# 📝 Todo API with JWT Authentication

![Java](https://img.shields.io/badge/Java-21-orange.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.3-brightgreen.svg)
![Spring Security](https://img.shields.io/badge/Spring%20Security-JWT-green.svg)
![JWT](https://img.shields.io/badge/Auth-JWT-blue.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-12+-blue.svg)
![H2](https://img.shields.io/badge/H2-Dev%20DB-lightgrey.svg)
![Maven](https://img.shields.io/badge/Maven-Build-red.svg)
![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-green.svg)
![License](https://img.shields.io/badge/License-MIT-black.svg)

A full-stack **Todo application** built with a **Spring Boot backend** and **vanilla JavaScript frontend**, featuring secure **JWT-based authentication** and complete CRUD operations for managing todo items.

---

## 🎯 Why This Project?

This project was built to move beyond a simple CRUD application and focus on **real-world backend fundamentals** such as authentication, authorization, and secure user-scoped data access. While a Todo app looks simple, it naturally introduces challenges like stateless authentication, protected routes, pagination, and API security.

The goal was to design a backend system where users authenticate using JWTs and can only access their own resources. A minimal vanilla JavaScript frontend was intentionally used to keep the focus on backend architecture and API behavior rather than frontend frameworks.

---

## ✨ Features

- 🔐 **JWT Authentication** – Secure user registration and login
- 📋 **CRUD Operations** – Create, Read, Update, and Delete todos
- 🔒 **Protected Routes** – All todo endpoints secured with JWT
- 📄 **Pagination Support** – Efficient data fetching
- 🎨 **Clean UI** – Responsive vanilla JS frontend
- 🔄 **Instant Feedback** – Real-time UI updates
- ✅ **Todo Status Management** – Completed / Pending
- 📊 **Statistics Dashboard** – Total and completed todos
- 👤 **User Isolation** – Each user accesses only their own todos

---

## 🛠️ Tech Stack

### Backend
- Java 21
- Spring Boot 3.5.3
- Spring Security
- Spring Data JPA
- PostgreSQL
- H2 (dev/testing)
- JWT (jjwt)
- Lombok
- SpringDoc OpenAPI (Swagger)
- Maven

### Frontend
- Vanilla JavaScript
- HTML5 / CSS3
- Fetch API
- LocalStorage (JWT storage)

---

## 📋 Prerequisites

- Java 21+
- Maven 3.6+
- PostgreSQL 12+ (or H2)
- Git

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd SpringBoot-main
2️⃣ Database Setup
PostgreSQL (Recommended)
sql
Copy code
CREATE DATABASE tododb;
Update application.properties:

properties
Copy code
spring.datasource.url=jdbc:postgresql://localhost:5432/tododb
spring.datasource.username=your_username
spring.datasource.password=your_password
H2 (Development)
No setup required.

3️⃣ Backend Configuration
properties
Copy code
server.port=8080

spring.datasource.url=jdbc:postgresql://localhost:5432/tododb
spring.datasource.username=postgres
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
⚠️ Update the JWT secret key in JwtUtil.java before production use.

4️⃣ Run Backend
bash
Copy code
./mvnw clean install
./mvnw spring-boot:run
Backend runs at: http://localhost:8080

5️⃣ Frontend Setup
bash
Copy code
cd TodoFrontend
python -m http.server 8000
Frontend runs at: http://localhost:8000

Update SERVER_URL in script.js if backend port changes.

📡 API Endpoints
Authentication
Register
http
Copy code
POST /auth/register
Login
http
Copy code
POST /auth/login
Returns JWT token.

Todo (Protected)
All requests require:

makefile
Copy code
Authorization: Bearer <JWT_TOKEN>
Get Todos
http
Copy code
GET /api/v1/todo
Get with Pagination
h
Copy code
GET /api/v1/todo/page?page=0&size=10
Create Todo
http
Copy code
POST /api/v1/todo/create
Update Todo
http
Copy code
PUT /api/v1/todo
Delete Todo
h
Copy code
DELETE /api/v1/todo/{id}
🏗️ Project Structure
cpp
Copy code
SpringBoot-main/
├── TodoBackend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── models/
│   ├── utils/
│   ├── SecurityConfig.java
│   └── JwtFilter.java
└── TodoFrontend/
    ├── login.html
    ├── register.html
    ├── todos.html
    ├── script.js
    └── style.css
🔒 Security
JWT-based stateless authentication

BCrypt password hashing

Protected routes via Spring Security

CORS configured

User-level data isolation

Tokens are stored in LocalStorage for simplicity.
In production, HttpOnly cookies are recommended.

🧪 Testing
Swagger UI:

bash
Copy code
http://localhost:8080/swagger-ui.html
🐛 Troubleshooting
401 Unauthorized → Token missing/expired

DB connection error → Check PostgreSQL status

Port in use → Change server.port

📝 License
MIT License

👨‍💻 Author
Anbu
Backend-focused Java Developer
GitHub: @anbu-max

⭐ If this project helped you learn backend security and API design, consider starring the repo!
