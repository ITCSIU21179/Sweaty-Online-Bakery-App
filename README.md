# Sweaty Online Bakery App

A full-stack online bakery application with React frontend and Node.js/Express backend.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either:
  - MongoDB Community Server installed locally, or
  - MongoDB Atlas account (cloud database)
- **npm** (comes with Node.js)

## Project Structure

```
Sweaty-Online-Bakery-App/
├── backend/          # Node.js/Express API server
└── frontend/         # React + Vite frontend application
```

## Setup Instructions

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/sweaty-bakery
   # Or use MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sweaty-bakery

   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # JWT Secret (use a strong random string)
   SECRET=your-secret-key-here

   # Client URL (frontend URL)
   CLIENT_URL=http://localhost:5173

   # Admin Account (will be created automatically on first run)
   ADMIN_EMAIL=admin@bakery.com
   ADMIN_PASSWORD=admin123
   ADMIN_PHONE_NUMBER=1234567890

   # Email Configuration (for email verification and password reset)
   GOOGLE_EMAIL=your-email@gmail.com
   GOOGLE_APP_PASSWORD=your-app-password
   ```

   **Note:** For Gmail App Password:
   - Enable 2-Step Verification on your Google Account
   - Generate an App Password: [Google Account Settings](https://myaccount.google.com/apppasswords)

4. Make sure MongoDB is running:
   - If using local MongoDB: Start MongoDB service
   - If using MongoDB Atlas: Your connection string is ready

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Option 1: Run Backend and Frontend Separately (Recommended for Development)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
The backend server will start on `http://localhost:3000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:5173` (Vite default port)

### Option 2: Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## Access Points

- **Frontend Application:** http://localhost:5173
- **Backend API:** http://localhost:3000
- **API Documentation (Swagger):** http://localhost:3000/api-docs

## Features

- User authentication (signup, login, email verification)
- Product browsing and management
- Shopping cart functionality
- Order placement and tracking
- User profile management
- Admin panel for product management
- Password reset functionality

## Default Admin Account

On first run, an admin account will be automatically created using the credentials from your `.env` file:
- Email: `ADMIN_EMAIL` from .env
- Password: `ADMIN_PASSWORD` from .env

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running (if using local instance)
- Check your `MONGODB_URI` in the `.env` file
- Verify network connectivity (if using MongoDB Atlas)

### Port Already in Use
- Backend: Change `PORT` in `.env` file
- Frontend: Vite will automatically use the next available port, or specify in `vite.config.js`

### Email Not Working
- Verify `GOOGLE_EMAIL` and `GOOGLE_APP_PASSWORD` are correct
- Ensure 2-Step Verification is enabled and App Password is generated
- Check that less secure app access is not required (App Passwords should work)

## Development Notes

- Backend uses `nodemon` for auto-reload during development
- Frontend uses Vite for fast HMR (Hot Module Replacement)
- API routes are prefixed with `/api/v1/`
- CORS is configured to allow requests from the frontend URL

