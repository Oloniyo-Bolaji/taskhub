# Build a Full-Stack Project Management Application for DevOps Training

## Objective

Build a modern, production-quality Project Management application that will be used as a DevOps deployment assignment for students.

**IMPORTANT**

This application is **NOT** intended to teach application development.

It is intended to simulate a real software project that has been handed over by a development team to a DevOps engineer.

Therefore:

- The application must work correctly.
- The codebase should follow modern best practices.
- The application should NOT include any Docker-related files.
- The application should NOT include Kubernetes manifests.
- The application should NOT include CI/CD pipelines.
- The application should NOT include deployment scripts.
- The application should NOT include Docker Compose.
- The application should NOT include a .dockerignore.
- The application should NOT include Dockerfiles.

The students will build all deployment artifacts themselves.

---

# Tech Stack

## Frontend

- Next.js 15+
- React 19
- TypeScript
- App Router
- Ant Design
- React Query (TanStack Query)
- Axios

---

## Backend

- NestJS
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- Class Validator
- Swagger

---

## Database

MongoDB

---

# Architecture

Repository structure:

```
kybern-taskhub/

    backend/

    frontend/

    docs/

    README.md

    .gitignore
```

This is a monorepo containing two separate applications.

Backend and frontend should each have their own package.json.

---

# Application Name

Kybern TaskHub

---

# Theme

Modern

Clean

Professional

Similar to Jira / Linear / Trello

Use Ant Design components throughout.

---

# Authentication

Implement JWT Authentication.

Features:

- Register
- Login
- Logout
- Refresh Token
- Protected Routes

Users should have:

- id
- firstName
- lastName
- email
- password
- avatar
- role
- createdAt

Roles:

- Admin
- Member

---

# Dashboard

After login users should see:

Cards

- Total Projects
- Active Tasks
- Completed Tasks
- Overdue Tasks

Recent Activity

Upcoming Deadlines

My Assigned Tasks

---

# Projects Module

Users can:

Create project

Edit project

Delete project

Archive project

Project contains:

- title
- description
- color
- owner
- members
- createdAt

---

# Task Module

Users can

Create task

Assign task

Edit task

Delete task

Move task between statuses

Task properties:

- title
- description
- priority
- status
- dueDate
- assignedTo
- labels

Priority

- Low
- Medium
- High
- Critical

Status

- Todo

- In Progress

- Review

- Done

---

# Kanban Board

Create a Trello-style board.

Drag and Drop

Columns

Todo

In Progress

Review

Done

---

# Team Module

Display project members.

Invite members.

Show profile cards.

---

# Profile Page

Users can:

Update profile

Change password

Upload avatar

---

# Notifications

Simple notification system.

When:

Task assigned

Task updated

Task completed

Store notifications in MongoDB.

---

# Search

Global search.

Search:

Projects

Tasks

Users

---

# Pagination

Every table should support:

Pagination

Sorting

Filtering

---

# Backend Modules

Authentication Module

Users Module

Projects Module

Tasks Module

Notifications Module

Search Module

Health Module

---

# MongoDB Collections

users

projects

tasks

notifications

---

# API

REST API only.

Document every endpoint using Swagger.

Return consistent API responses.

Example:

```
{
    "success": true,
    "message": "Task created successfully",
    "data": {}
}
```

---

# Validation

Validate every request.

Return meaningful error messages.

---

# Error Handling

Implement global exception filters.

---

# Logging

Implement NestJS Logger.

---

# Seed Script

Provide a seed script that creates:

Admin User

5 Projects

25 Tasks

10 Notifications

Demo Users

---

# Frontend Requirements

Responsive

Modern Dashboard

Sidebar Navigation

Top Navigation

Dark/Light Theme Toggle

Loading States

Empty States

Error Pages

404 Page

---

# UI Pages

Login

Register

Dashboard

Projects

Project Details

Kanban Board

Tasks

Notifications

Profile

Settings

404

---

# Forms

Use Ant Design Forms.

Proper validation.

Toast notifications.

---

# Documentation

Create a docs folder.

Include:

Architecture.md

API.md

Setup.md

FolderStructure.md

---

# Root README

Create a professional README.

Include:

Project Overview

Features

Tech Stack

Installation

Running Frontend

Running Backend

Folder Structure

Screenshots

Contributing

License

---

# IMPORTANT

Do NOT generate any of the following:

Dockerfile

Docker Compose

.dockerignore

Kubernetes manifests

Helm charts

GitHub Actions

GitLab CI

Jenkinsfile

Terraform

Ansible

Deployment documentation

Nginx configuration

Caddy configuration

PM2 configuration

Reverse Proxy configuration

Container Registry configuration

Any deployment artifacts

This repository should represent a project handed over by a development team.

---

# Code Quality

Use clean architecture where appropriate.

Use reusable components.

Use DTOs.

Use Services.

Use Repository pattern where appropriate.

Follow NestJS best practices.

Use environment variables.

No hardcoded secrets.

No placeholder code.

No TODO comments.

The application should be fully functional.

---

# Sample Data

Populate the database with realistic demo data.

Projects

Marketing Website

Student Portal

Inventory System

Payment Gateway

HR Portal

Create approximately:

5 Projects

10 Users

25 Tasks

20 Notifications

---

# Final Deliverable

Produce a complete, polished, production-quality application suitable for handing off to a DevOps team.

The repository should look exactly like something a real development team would deliver before requesting deployment.

Again:

**DO NOT INCLUDE ANY DOCKER, CI/CD, OR DEPLOYMENT FILES.**
