# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Full-stack portfolio website with React/TypeScript frontend and Node.js/Express backend, using MongoDB for data persistence.

**Architecture**: Monorepo with separate frontend and backend applications
- Frontend: React 18 + TypeScript + Vite + TailwindCSS (runs on port 3000)
- Backend: Node.js + Express + MongoDB (runs on port 5000)
- API communication via Axios with base URL configured in frontend `.env`

## Development Commands

### Backend (from `backend/` directory)
```bash
npm run dev          # Development server with nodemon auto-reload
npm start            # Production server
npm test             # Run Jest tests with coverage
node src/scripts/seedData.js  # Seed database with sample data from CV
```

### Frontend (from `frontend/` directory)
```bash
npm run dev          # Vite dev server (http://localhost:3000)
npm run build        # TypeScript compile + production build
npm run preview      # Preview production build
npm run lint         # ESLint with TypeScript support
```

### Running the Full Application
Two terminals required:
1. Terminal 1: `cd backend && npm run dev`
2. Terminal 2: `cd frontend && npm run dev`

Backend must be running before frontend for API calls to work.

## Architecture & Key Patterns

### Backend Architecture (Express MVC Pattern)

**Request Flow**: Route → Controller → Model → Response
- **Routes** (`src/routes/*.js`): Define endpoints, mounted at `/api` prefix
- **Controllers** (`src/controllers/*.js`): Handle request logic, use `asyncHandler` wrapper for error handling
- **Models** (`src/models/*.js`): Mongoose schemas with validation
- **Middleware**: Applied globally in `server.js` (helmet, CORS, rate limiting)
- **Error Handling**: Centralized via `errorHandler.js`, uses custom `ApiError` class

**Module System**: ES Modules (type: "module" in package.json)
- All imports use `.js` extension explicitly
- Use `import/export` syntax, not `require/module.exports`

### Frontend Architecture (React Component Pattern)

**Component Structure**:
- `pages/`: Route-level components (HomePage, ProjectsPage, ProjectDetailPage, ContactPage)
- `components/ui/`: Base components (Button, Card, Input, Textarea, Badge)
- `components/layout/`: Layout components (Layout, Navbar, Footer)
- `lib/`: Utilities (axios.ts for API client, utils.ts)
- `types/`: TypeScript definitions (index.ts)

**Routing**: React Router v6 with Layout wrapper
- All routes wrapped in `<Layout>` component for consistent Navbar/Footer
- Route pattern: `<Route path="/" element={<Layout />}>` with nested routes

**Styling**: TailwindCSS + shadcn/ui patterns
- Theme configured in `src/index.css` with CSS variables
- Components use `cn()` utility from `lib/utils.ts` for className merging

**State & Data Fetching**:
- API calls via axios instance in `lib/axios.ts` (configured with base URL from `VITE_API_URL`)
- React Hook Form for form handling and validation
- react-hot-toast for notifications

## API Structure

**Base URL**: `/api` (all routes prefixed)

**Resource Endpoints**:
- `/api/projects` - Project CRUD (GET, POST, PUT, DELETE)
- `/api/projects/featured` - Featured projects only
- `/api/skills` - Skills CRUD, grouped by category on GET
- `/api/experiences` - Experience CRUD
- `/api/contact` - Contact form submission (POST) and admin management

**Common Patterns**:
- All endpoints return JSON with `status` and `data`/`message` fields
- Error responses use `ApiError` class for consistency
- Rate limiting applied globally to all `/api/*` routes via `limiter` middleware
- Input validation using `express-validator` in `validators.js`

## Database Models & Schemas

**Project**: title, description, shortDescription, technologies[], category (enum), featured (boolean), status (enum: completed/in-progress/planned), githubUrl, liveUrl, images[], thumbnail, viewCount, dates

**Skill**: name, category (enum: languages/frameworks/tools/platforms/databases/other), proficiency (0-100), yearsOfExperience, featured (boolean), icon

**Experience**: company, position, location, startDate, endDate, current (boolean), description, responsibilities[], achievements[], technologies[], order

**Contact**: name, email, subject, message, status (enum: new/read/replied/archived), ipAddress, userAgent, timestamps

## Environment Configuration

**Backend** (`.env` in `backend/`):
- `MONGODB_URI`: Database connection (local or Atlas)
- `ALLOWED_ORIGINS`: CORS whitelist (comma-separated)
- `SMTP_*`: Email service config for contact form (Nodemailer)
- `PORT`: Server port (default: 5000)

**Frontend** (`.env` in `frontend/`):
- `VITE_API_URL`: Backend API base URL (e.g., `http://localhost:5000/api`)

Copy `.env.example` files and configure before running.

## Testing

**Backend Tests**: Jest + Supertest
- Run via `npm test` in backend directory
- Coverage reports generated automatically

**Frontend**: ESLint configured for React Hooks and TypeScript
- Run `npm run lint` to check for issues

## Security & Middleware

**Backend Security Stack** (applied in `server.js`):
- Helmet.js: Security headers
- CORS: Configured with allowed origins from environment
- Rate Limiting: Applied to all `/api/*` routes (configurable in `.env`)
- Input Validation: express-validator in routes
- Morgan: Request logging (combined format)

**Frontend Security**:
- No sensitive data in client code
- API base URL from environment variable only
- Form validation before submission

## Seeding & Sample Data

Run `node src/scripts/seedData.js` from backend directory to populate database with:
- Sample projects from CV (defense simulation, Qt/C++ projects)
- Skills (C++, Qt, Python, React, etc. with proficiency levels)
- Work experience (ACME - IES position)

This clears existing data first, then inserts fresh sample data.

## Deployment Notes

**Frontend**: Build produces static files in `dist/`
- Run `npm run build` then deploy `dist/` folder
- Set `VITE_API_URL` to production API URL

**Backend**: Standard Node.js deployment
- Ensure MongoDB connection string is set
- Configure SMTP for contact form emails
- Set `NODE_ENV=production`

**Typical Stack**: Vercel/Netlify (frontend) + Railway/Render (backend) + MongoDB Atlas (database)
