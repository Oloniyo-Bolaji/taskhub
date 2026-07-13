# API Documentation

The backend exposes a RESTful API. Below are the key endpoints. For interactive testing, run the backend and navigate to `http://localhost:3001/api/docs` (Swagger UI).

## Authentication (`/api/auth`)
- `POST /auth/register`: Register a new user. Returns user details and JWT.
- `POST /auth/login`: Authenticate and receive a JWT.
- `GET /auth/profile`: Get current user profile (requires Bearer Token).

## Projects (`/api/projects`)
- `POST /projects`: Create a new project.
- `GET /projects`: Retrieve all projects the current user is a member of.
- `GET /projects/:id`: Get project details.
- `PATCH /projects/:id`: Update a project.
- `DELETE /projects/:id`: Delete a project.

## Tasks (`/api/tasks`)
- `POST /tasks`: Create a new task.
- `GET /tasks`: Retrieve tasks associated with the user's projects.
- `GET /tasks/:id`: Get task details.
- `PATCH /tasks/:id/status`: Update task status (for Kanban transitions).
- `PATCH /tasks/:id`: Update task details.
- `DELETE /tasks/:id`: Delete a task.

## Notifications (`/api/notifications`)
- `GET /notifications`: Get notifications for the current user.
- `PATCH /notifications/:id/read`: Mark a specific notification as read.
- `PATCH /notifications/read-all`: Mark all notifications as read.

## Search (`/api/search`)
- `GET /search?q={query}`: Global search across projects, tasks, and users.
