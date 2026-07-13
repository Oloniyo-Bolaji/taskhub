# Local Setup Guide

Follow these instructions to run the application locally for development.

## Prerequisites
- **Node.js**: v18 or later (v20+ recommended)
- **MongoDB**: A running MongoDB instance (local or Atlas). The default connection string expects `mongodb://localhost:27017/kybern-taskhub`.

## 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the seed script to populate the database with sample data:
   ```bash
   npm run seed
   ```
4. Start the backend development server:
   ```bash
   npm run start:dev
   ```
The backend will run on `http://localhost:3001`. Swagger API documentation is available at `http://localhost:3001/api/docs`.

## 2. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file (optional, defaults are provided in code):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
The frontend will run on `http://localhost:3000`. You can log in using the admin account seeded earlier:
- **Email**: `admin@kybern.local`
- **Password**: `admin123`
