# Kybern TaskHub

Kybern TaskHub is a modern, production-quality Project Management application designed as a training environment for DevOps engineers. This repository contains the raw application code, and is intended to simulate a project that has been handed over by a development team.

**Note:** This repository deliberately omits all deployment configuration, containerization artifacts (Dockerfiles, compose files), and CI/CD pipelines.

## Features

- **Project & Task Management**: Create, assign, edit, and organize tasks within projects.
- **Kanban Board**: Drag-and-drop Trello-style board for visual task tracking.
- **User Authentication**: Secure JWT-based authentication.
- **Dashboards**: At-a-glance metrics, upcoming deadlines, and recent activity.
- **Global Search**: Search across projects, tasks, and users.
- **Responsive UI**: Modern interface with light/dark theme toggle, built with Ant Design.

## Tech Stack

### Frontend
- Next.js 15+ (App Router)
- React 19
- TypeScript
- Ant Design
- React Query (TanStack Query)
- Axios

### Backend
- NestJS
- TypeScript
- MongoDB (Mongoose)
- JWT Authentication
- Class Validator
- Swagger (OpenAPI)

## Folder Structure

```
kybern-taskhub/
├── backend/          # NestJS REST API source code
├── frontend/         # Next.js App Router source code
├── docs/             # Project documentation (Architecture, API, Setup)
├── README.md         # This file
└── project.md        # Original project requirements
```

## Installation & Setup

For detailed instructions on running this project locally, please refer to the documentation:

1. [Setup Guide](./docs/Setup.md)
2. [Architecture Overview](./docs/Architecture.md)
3. [API Documentation](./docs/API.md)
4. [Detailed Folder Structure](./docs/FolderStructure.md)

## Contributing
When contributing to the codebase, please ensure you follow the existing linting rules and run formatting before submitting PRs. Make sure not to introduce any deployment files as part of application feature work.

## License
MIT License
