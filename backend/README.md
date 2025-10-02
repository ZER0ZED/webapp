# Portfolio Backend API

RESTful API backend for Ammar Ahmed's portfolio website built with Node.js, Express, and MongoDB.

## Features

- 🚀 RESTful API architecture
- 🗄️ MongoDB database with Mongoose ODM
- 📧 Contact form with email notifications
- 🛡️ Security best practices (Helmet, CORS, Rate Limiting)
- ✅ Input validation
- 📝 Comprehensive error handling
- 🔄 CRUD operations for Projects, Skills, and Experiences

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Validation**: express-validator
- **Email**: Nodemailer
- **Security**: Helmet, CORS, express-rate-limit

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
   - MongoDB URI
   - Email credentials (for contact form)
   - CORS allowed origins

### Running the Server

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Projects
- `GET /api/projects` - Get all projects (with pagination)
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills (grouped by category)
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experience
- `GET /api/experiences` - Get all work experiences
- `GET /api/experiences/:id` - Get single experience
- `POST /api/experiences` - Create experience
- `PUT /api/experiences/:id` - Update experience
- `DELETE /api/experiences/:id` - Delete experience

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages
- `PATCH /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact message

## Database Models

### Project
- Title, description, technologies
- Category, status, featured
- GitHub and live URLs
- Images and thumbnails
- View count

### Skill
- Name, category, proficiency
- Icon, years of experience
- Featured flag

### Experience
- Company, position, location
- Start/end dates
- Responsibilities, achievements
- Technologies used

### Contact
- Name, email, subject, message
- Status tracking
- IP address and user agent logging

## Environment Variables

See `.env.example` for all required environment variables.

## Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting on all API endpoints
- Input validation and sanitization
- MongoDB injection protection

## Error Handling

Centralized error handling with custom ApiError class:
- Validation errors
- MongoDB errors
- Custom API errors
- Production/development error responses

## Project Structure

```
backend/
├── src/
│   ├── config/         # Database and app configuration
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── services/       # Business logic (email, etc.)
│   ├── utils/          # Utility functions
│   └── server.js       # App entry point
├── .env.example        # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## License

MIT

## Author

Ammar Ahmed - [GitHub](https://github.com/ZERO2ED)
