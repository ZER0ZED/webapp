# Quick Setup Guide

Follow these steps to get your portfolio website up and running.

## Prerequisites

- Node.js v18+ installed
- MongoDB installed locally OR MongoDB Atlas account
- Git (for version control)

## Step 1: Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `backend/.env`:
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

### Email Setup (Gmail)

1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password for "Mail"
4. Use that password in `SMTP_PASS`

## Step 2: Setup Frontend

```bash
# Navigate to frontend
cd ../frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

## Step 3: Setup Database

### Option A: Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service:
   - Windows: MongoDB should start automatically
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

### Option B: MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `MONGODB_URI` in `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

## Step 4: Seed Database (Optional)

```bash
cd backend
node src/scripts/seedData.js
```

This adds sample projects, skills, and experience from your CV.

## Step 5: Run the Application

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
✅ Backend running at http://localhost:5000

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
✅ Frontend running at http://localhost:3000

## Step 6: Access Your Portfolio

Open your browser and go to: **http://localhost:3000**

## Troubleshooting

### Backend won't start
- Check MongoDB is running
- Verify `.env` file exists and has correct values
- Check port 5000 is not in use

### Frontend won't connect to backend
- Ensure backend is running first
- Check `VITE_API_URL` in frontend `.env`
- Clear browser cache

### Contact form not sending emails
- Verify SMTP credentials in backend `.env`
- Check Gmail App Password is correct
- Review backend console for email errors

## Adding Your Own Content

### Projects
POST to `http://localhost:5000/api/projects`:
```json
{
  "title": "My Project",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "category": "web",
  "featured": true,
  "status": "completed"
}
```

### Skills
POST to `http://localhost:5000/api/skills`:
```json
{
  "name": "React",
  "category": "frameworks",
  "proficiency": 90,
  "yearsOfExperience": 3,
  "featured": true
}
```

### Experience
POST to `http://localhost:5000/api/experiences`:
```json
{
  "company": "Company Name",
  "position": "Position",
  "startDate": "2025-06-01",
  "current": true,
  "responsibilities": ["Task 1", "Task 2"],
  "technologies": ["Tech1", "Tech2"]
}
```

## Next Steps

1. Customize colors in `frontend/src/index.css`
2. Add your own projects via the API
3. Update personal info in components
4. Add your profile image
5. Deploy to production!

## Production Deployment

See `README.md` for detailed deployment instructions for:
- Vercel (Frontend)
- Railway/Render (Backend)
- MongoDB Atlas (Database)

## Need Help?

Check the main `README.md` for detailed documentation or create an issue on GitHub.
