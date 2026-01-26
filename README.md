# 📝 Todo API with JWT Authentication

A full-stack Todo application built with Spring Boot backend and vanilla JavaScript frontend, featuring secure JWT-based authentication and complete CRUD operations for managing todo items.

## ✨ Features

- 🔐 **JWT Authentication** - Secure user registration and login with JSON Web Tokens
- 📋 **CRUD Operations** - Create, Read, Update, and Delete todo items
- 🔒 **Protected Routes** - All todo endpoints are secured with JWT authentication
- 📄 **Pagination Support** - Get todos with pagination for better performance
- 🎨 **Modern UI** - Clean and responsive frontend interface
- 🔄 **Real-time Updates** - Instant feedback for all operations
- ✅ **Todo Status Management** - Mark todos as completed or pending
- 📊 **Statistics Dashboard** - View total and completed todo counts

## 🛠️ Tech Stack

### Backend
- **Spring Boot 3.5.3** - Java framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database abstraction layer
- **PostgreSQL** - Primary database
- **H2 Database** - Development/testing database
- **JWT (jjwt)** - JSON Web Token implementation
- **Lombok** - Reduces boilerplate code
- **SpringDoc OpenAPI** - API documentation (Swagger)
- **Java 24** - Programming language

### Frontend
- **Vanilla JavaScript** - No framework dependencies
- **HTML5 & CSS3** - Modern web standards
- **Fetch API** - HTTP requests
- **LocalStorage** - Token persistence

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java 24** or higher
- **Maven 3.6+**
- **PostgreSQL 12+** (or use H2 for development)
- **Node.js** (optional, for serving frontend)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd SpringBoot-main
```

### 2. Database Setup

#### Option A: PostgreSQL (Recommended for Production)

1. Create a PostgreSQL database:
```sql
CREATE DATABASE tododb;
```

2. Update `application.properties` with your database credentials:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/tododb
spring.datasource.username=your_username
spring.datasource.password=your_password
```

#### Option B: H2 Database (Development)

The project includes H2 database support. No additional setup required for development.

### 3. Backend Configuration

Navigate to the backend directory:
```bash
cd TodoBackend
```

Update `src/main/resources/application.properties`:

```properties
# Server Configuration
spring.application.name=Todo
server.port=8080

# Database Configuration (PostgreSQL)
spring.datasource.url=jdbc:postgresql://localhost:5432/tododb
spring.datasource.username=postgres
spring.datasource.password=your_password
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA Configuration
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

> ⚠️ **Security Note**: Update the JWT secret key in `JwtUtil.java` for production use. The current secret is for development only.

### 4. Build and Run Backend

Using Maven Wrapper (recommended):
```bash
# Windows
mvnw.cmd clean install
mvnw.cmd spring-boot:run

# Linux/Mac
./mvnw clean install
./mvnw spring-boot:run
```

Or using Maven directly:
```bash
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### 5. Frontend Setup

Navigate to the frontend directory:
```bash
cd TodoFrontend
```

#### Option A: Using a Simple HTTP Server

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js (http-server):
```bash
npx http-server -p 8000
```

#### Option B: Open Directly

Simply open `login.html` in your web browser.

> **Note**: Update `SERVER_URL` in `script.js` if your backend runs on a different port.

### 6. Access the Application

- **Frontend**: `http://localhost:8000` (or the port you chose)
- **Backend API**: `http://localhost:8080`
- **API Documentation**: `http://localhost:8080/swagger-ui.html` (if SpringDoc is configured)

## 📚 API Endpoints

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
- `200 OK`: User registered successfully
- `409 Conflict`: Email already exists

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Todo Endpoints (Protected - Requires JWT Token)

All todo endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

#### Get All Todos
```http
GET /api/v1/todo
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Complete Spring Boot project",
    "isCompleted": false
  }
]
```

#### Get Todo by ID
```http
GET /api/v1/todo/{id}
Authorization: Bearer <token>
```

**Response:**
```json
{
  "id": 1,
  "title": "Complete Spring Boot project",
  "isCompleted": false
}
```

#### Get Todos with Pagination
```http
GET /api/v1/todo/page?page=0&size=10
Authorization: Bearer <token>
```

**Response:**
```json
{
  "content": [...],
  "totalElements": 50,
  "totalPages": 5,
  "size": 10,
  "number": 0
}
```

#### Create Todo
```http
POST /api/v1/todo/create
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "New todo item",
  "isCompleted": false
}
```

**Response:**
```json
{
  "id": 1,
  "title": "New todo item",
  "isCompleted": false
}
```

#### Update Todo
```http
PUT /api/v1/todo
Authorization: Bearer <token>
Content-Type: application/json

{
  "id": 1,
  "title": "Updated todo item",
  "isCompleted": true
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Updated todo item",
  "isCompleted": true
}
```

#### Delete Todo
```http
DELETE /api/v1/todo/{id}
Authorization: Bearer <token>
```

**Response:**
- `200 OK`: Todo deleted successfully

## 🏗️ Project Structure

```
SpringBoot-main/
├── TodoBackend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── dev/
│   │   │   │       └── backend/
│   │   │   │           └── Todo/
│   │   │   │               ├── controller/
│   │   │   │               │   ├── AuthController.java      # Authentication endpoints
│   │   │   │               │   └── TodoController.java      # Todo CRUD endpoints
│   │   │   │               ├── models/
│   │   │   │               │   ├── Todo.java                # Todo entity
│   │   │   │               │   └── User.java                 # User entity
│   │   │   │               ├── repository/
│   │   │   │               │   ├── TodoRepository.java      # Todo data access
│   │   │   │               │   └── UserRepository.java       # User data access
│   │   │   │               ├── service/
│   │   │   │               │   ├── TodoService.java          # Todo business logic
│   │   │   │               │   └── UserService.java         # User business logic
│   │   │   │               ├── utils/
│   │   │   │               │   └── JwtUtil.java              # JWT token utilities
│   │   │   │               ├── SecurityConfig.java           # Spring Security config
│   │   │   │               ├── JwtFilter.java                # JWT authentication filter
│   │   │   │               └── TodoApplication.java          # Main application class
│   │   │   └── resources/
│   │   │       └── application.properties                    # Application configuration
│   │   └── test/
│   ├── pom.xml                                              # Maven dependencies
│   └── mvnw                                                  # Maven wrapper
│
└── TodoFrontend/
    ├── login.html                                           # Login page
    ├── register.html                                        # Registration page
    ├── todos.html                                           # Todo management page
    ├── script.js                                            # Frontend JavaScript
    └── style.css                                            # Styling
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: BCrypt password hashing
- **Protected Endpoints**: All todo endpoints require valid JWT token
- **CORS Configuration**: Configured for cross-origin requests
- **CSRF Protection**: Disabled for API usage (can be enabled for web forms)

## 🧪 Testing

### Using Swagger UI

Once the application is running, access the API documentation at:
```
http://localhost:8080/swagger-ui.html
```

### Using cURL

Example: Create a todo item
```bash
curl -X POST http://localhost:8080/api/v1/todo/create \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Test todo", "isCompleted": false}'
```

### Using Postman

1. Import the API endpoints
2. Set up environment variables for the base URL and token
3. Use the Authorization tab to add Bearer token authentication

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check database credentials in `application.properties`
   - Ensure database `tododb` exists

2. **Port Already in Use**
   - Change `server.port` in `application.properties`
   - Update frontend `SERVER_URL` accordingly

3. **JWT Token Expired**
   - Tokens expire after 1 hour (configurable in `JwtUtil.java`)
   - Re-login to get a new token

4. **CORS Errors**
   - Verify CORS configuration in `SecurityConfig.java`
   - Ensure frontend URL is allowed

5. **401 Unauthorized**
   - Check if JWT token is included in Authorization header
   - Verify token is valid and not expired
   - Ensure token format: `Bearer <token>`

## 🔧 Configuration

### JWT Token Expiration

Modify in `JwtUtil.java`:
```java
private final long EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour in milliseconds
```

### CORS Configuration

Update in `SecurityConfig.java`:
```java
configuration.setAllowedOrigins(List.of("http://localhost:8000")); // Add your frontend URL
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Your Name**
- GitHub: [@anbu-max](https://github.com/yourusername)

## 🙏 Acknowledgments

- Spring Boot team for the amazing framework
- JWT.io for JWT documentation
- All contributors and users of this project

---

⭐ If you found this project helpful, please give it a star!
