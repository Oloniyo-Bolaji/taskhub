# Kybern TaskHub - Architecture

## Overview
Kybern TaskHub is a project management application designed as a monolithic full-stack application. It uses a modern tech stack to provide an intuitive user interface for managing projects and tasks.

## Tech Stack
- **Frontend**: Next.js 15+ (App Router), React 19, Ant Design, TanStack React Query.
- **Backend**: NestJS, Mongoose, Passport (JWT).
- **Database**: MongoDB (NoSQL).

## High-Level Design
The application is separated into a `frontend` and `backend` directory within a monorepo structure. 
1. **Frontend**: Communicates with the backend REST APIs. Uses React Context for authentication state and React Query for server state management (caching, deduplication, synchronization).
2. **Backend**: Implements modular REST APIs with robust validation (`class-validator`), unified response formats, and global error handling using NestJS Interceptors and Exception Filters.
3. **Database**: MongoDB stores Users, Projects, Tasks, and Notifications.

## Security
- Passwords are hashed using bcrypt before being stored.
- Stateless authentication using JSON Web Tokens (JWT).
- Protected API routes using `@UseGuards(JwtAuthGuard)`.

## Known Limitations
- Designed primarily for DevOps training scenarios; lacks built-in deployment pipelines or containerization artifacts.
