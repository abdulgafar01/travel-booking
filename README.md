# Assessment Project

This project is a full-stack travel booking app that lets users browse available travel packages and book them through a simple interface. The frontend is built with Next.js and the backend is an Express API backed by MongoDB.

## What the app does

- Displays a list of travel packages on the home page
- Allows users to book a package if slots are still available
- Reduces the available slot count in the database after a successful booking
- Uses a modern React + Redux Toolkit Query setup for API state and cache handling

## Tech stack

### Frontend
- Next.js
- React
- Redux Toolkit Query
- Tailwind CSS

### Backend
- Express.js
- TypeScript
- MongoDB with Mongoose
- CORS enabled for local frontend development

## Project structure

- frontend/: Next.js app, UI components, API integration, Redux store
- backend/: Express API, controllers, models, database connection setup

## Local development

### 1. Backend
```bash
cd backend
npm install
```

Create a `.env` file with:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:3000
```

Then run:
```bash
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
```

Create a `.env.local` file with:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Then run:
```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Notes

- The backend health check route is available at `/api/health`
- Travel package endpoints are served under `/api/packages`
- Booking a package updates the available slot count in MongoDB
