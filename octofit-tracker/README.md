# OctoFit Tracker

A modern multi-tier fitness tracking application built with GitHub Copilot Agent Mode.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite frontend (Port 5173)
└── backend/           # Node.js + Express + TypeScript backend (Port 8000)
```

## Technology Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Next-generation frontend build tool
- **JavaScript/JSX** - Client-side development

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

### Database
- **MongoDB** - NoSQL database (Port 27017)

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally or accessible)
- npm or yarn

### Installation

1. **Frontend Setup**
```bash
cd octofit-tracker/frontend
npm install
npm run dev
```
Frontend will run on: `http://localhost:5173`

2. **Backend Setup**
```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```
Backend will run on: `http://localhost:8000`

3. **Database**
Ensure MongoDB is running on `localhost:27017` (default)

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/status` - API status and configuration information

## Development Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run compiled application
- `npm run lint` - Run ESLint

## Ports Configuration

- **Frontend**: 5173
- **Backend**: 8000
- **MongoDB**: 27017

## Features

- Full-stack application with React frontend and Express backend
- TypeScript support for type safety
- MongoDB integration with Mongoose for data persistence
- CORS enabled for frontend-backend communication
- Development and production build configurations
