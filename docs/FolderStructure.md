# Folder Structure

This repository follows a basic monorepo approach with separate `backend` and `frontend` folders.

```text
kybern-taskhub/
├── README.md               # Main project introduction
├── docs/                   # Documentation (Architecture, API, Setup)
├── backend/                # NestJS API application
│   ├── src/
│   │   ├── app.module.ts   # Root module
│   │   ├── main.ts         # Application entry point
│   │   ├── seed.ts         # Database seeding script
│   │   ├── auth/           # Authentication module (JWT, Passport)
│   │   ├── users/          # User management module
│   │   ├── projects/       # Projects module
│   │   ├── tasks/          # Tasks module
│   │   ├── notifications/  # Notifications module
│   │   └── search/         # Global search module
│   ├── package.json        
│   └── tsconfig.json       
└── frontend/               # Next.js App Router frontend
    ├── src/
    │   ├── app/            # Next.js App Router pages
    │   │   ├── (auth)/     # Login and Register pages
    │   │   ├── (dashboard)/# Protected dashboard routes
    │   │   ├── globals.css # Global styles
    │   │   └── layout.tsx  # Root layout
    │   ├── components/     # Reusable React components (Layout, Tasks)
    │   ├── context/        # React Context (Auth)
    │   └── lib/            # Utilities (Axios instance, React Query configs)
    ├── package.json
    └── tsconfig.json
```
