// Shared script for login, register, and todos pages
const SERVER_URL = "http://localhost:8080";
const token = localStorage.getItem("token");

// Login page logic
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${SERVER_URL}/auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
    })
    .then(response => {
        if(!response.ok) {
            throw new Error("Login failed");
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("token", data.token);
        window.location.href = "todos.html";
    })
    .catch(error => {
        alert(error.message);
    });
}

// Register page logic
function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch(`${SERVER_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
        .then(response => {
            if (response.ok) {
                alert("Registration successful! Please log in.");
                window.location.href = "login.html";
            } else {
                return response.json().then(data => {
                    throw new Error(data.message || "Registration failed");
                });
            }
        })
        .catch(error => {
            alert(error.message);
        });
}
// Todos page logic
function createTodoCard(todo) {
    const card = document.createElement("div");
    card.className = "todo-card";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.isCompleted;
    checkbox.addEventListener("change", function() {
        const updatedTodo = {...todo, isCompleted: checkbox.checked};
        updateTodoStatus(updatedTodo);
    });

    const span = document.createElement("span");
    span.textContent = todo.title;

    if (todo.isCompleted) {
        span.style.textDecoration = "line-through";
        span.style.color = "gray";
    }
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "x";
    deletebtn.onclick = function() {
        deleteTodo(todo.id);
    }

    card.appendChild(checkbox);
    card.appendChild(span);
    card.appendChild(deletebtn);

    return card;

}

function loadTodos() {

}

function addTodo() {

}

function updateTodoStatus(todo) {

}

function deleteTodo(id) {
     fetch(`${SERVER_URL}/api/todo/${id}`, {
        method: "DELETE",
        headers: {"Authorization": `Bearer ${token}`},


    })
    .then(response => {
        if(!response.ok) {
            throw new Error(" failed to delete todo");
        }
        return response.text();
    })
    .then(() => loadTodos())
    .catch(error => {
        alert(error.message);
    });
}

// Page-specific initializations
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("todo-list")) {
        loadTodos();
    }
});
