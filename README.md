# Ammar Ahmed - Portfolio Website

Professional portfolio website showcasing my work as a Software Engineer. Built with modern web technologies including React, Node.js, Express, and MongoDB.

## 🚀 Project Overview

This is a full-stack portfolio website featuring:
- **Frontend**: React + TypeScript + TailwindCSS + Framer Motion
- **Backend**: Node.js + Express + MongoDB
- **Features**: Project showcase, skills display, work experience, contact form

## 📁 Project Structure

```
webapp/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── lib/          # Utilities
│   │   └── types/        # TypeScript definitions
│   └── package.json
│
├── backend/              # Express backend API
│   ├── src/
│   │   ├── config/      # Configuration files
│   │   ├── controllers/ # Route controllers
│   │   ├── models/      # MongoDB models
│   │   ├── routes/      # API routes
│   │   ├── middleware/  # Custom middleware
│   │   ├── services/    # Business logic
│   │   └── utils/       # Utility functions
│   └── package.json
│
└── README.md            # This file
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **Axios** - HTTP client
- **React Hook Form** - Form handling

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **express-validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin support

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd webapp
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
cp .env.example .env
# Edit .env with your configuration
```

### Configuration

#### Backend (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
ALLOWED_ORIGINS=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=ammarsamy285@gmail.com
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

### Running the Application

#### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:3000`

#### Production Build

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

## 📝 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Projects
- `GET /projects` - Get all projects
- `GET /projects/featured` - Get featured projects
- `GET /projects/:id` - Get project by ID
- `POST /projects` - Create project
- `PUT /projects/:id` - Update project
- `DELETE /projects/:id` - Delete project

#### Skills
- `GET /skills` - Get all skills
- `POST /skills` - Create skill
- `PUT /skills/:id` - Update skill
- `DELETE /skills/:id` - Delete skill

#### Experience
- `GET /experiences` - Get all experiences
- `GET /experiences/:id` - Get experience by ID
- `POST /experiences` - Create experience
- `PUT /experiences/:id` - Update experience
- `DELETE /experiences/:id` - Delete experience

#### Contact
- `POST /contact` - Submit contact form
- `GET /contact` - Get all messages (admin)
- `PATCH /contact/:id` - Update message status
- `DELETE /contact/:id` - Delete message

## 📊 Database Schema

### Projects
- Title, description, short description
- Technologies array
- Category (web, mobile, desktop, simulation, ai, other)
- GitHub URL, live URL
- Images, thumbnail
- Featured flag
- Status (completed, in-progress, planned)

### Skills
- Name, category
- Proficiency level (0-100)
- Years of experience
- Featured flag

### Experience
- Company, position, location
- Start/end dates
- Responsibilities, achievements
- Technologies used

### Contact
- Name, email, subject, message
- Status (new, read, replied, archived)
- IP address, user agent

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting
- Input validation and sanitization
- MongoDB injection protection
- Environment variable management

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)

1. Set environment variables
2. Deploy the backend folder
3. Ensure MongoDB connection string is set

### Frontend Deployment (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set `VITE_API_URL` to your production API URL

### MongoDB Atlas

1. Create a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get connection string
3. Update `MONGODB_URI` in backend `.env`

## 📧 Email Configuration

For the contact form to work, configure SMTP settings:

**Gmail:**
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the app password in `SMTP_PASS`

## 🎨 Customization

### Adding Projects
Use the API or add directly to MongoDB:
```javascript
{
  title: "Project Name",
  description: "Full description",
  shortDescription: "Brief description",
  technologies: ["React", "Node.js"],
  category: "web",
  featured: true,
  status: "completed",
  githubUrl: "https://github.com/...",
  liveUrl: "https://..."
}
```

### Adding Skills
```javascript
{
  name: "React",
  category: "frameworks",
  proficiency: 90,
  yearsOfExperience: 3,
  featured: true
}
```

## 📜 Scripts

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio project, but suggestions are welcome!

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 👨‍💻 Author

**Ammar Ahmed**
- GitHub: [@ZERO2ED](https://github.com/ZERO2ED)
- LinkedIn: [Ammar Ahmed](https://www.linkedin.com/in/ammar-ahmed-632423239/)
- Email: ammarsamy285@gmail.com

## 🙏 Acknowledgments

- React and the React team
- TailwindCSS for the amazing utility-first CSS framework
- shadcn/ui for beautiful component designs
- Framer Motion for smooth animations
- MongoDB for the flexible database
- All open-source contributors

---

Made with ❤️ by Ammar Ahmed
