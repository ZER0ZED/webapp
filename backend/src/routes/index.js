import express from 'express';
import projectRoutes from './projectRoutes.js';
import contactRoutes from './contactRoutes.js';
import skillRoutes from './skillRoutes.js';
import experienceRoutes from './experienceRoutes.js';

const router = express.Router();

// API Routes
router.use('/projects', projectRoutes);
router.use('/contact', contactRoutes);
router.use('/skills', skillRoutes);
router.use('/experiences', experienceRoutes);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'Portfolio API',
    version: '1.0.0',
    endpoints: {
      projects: '/api/projects',
      contact: '/api/contact',
      skills: '/api/skills',
      experiences: '/api/experiences'
    }
  });
});

export default router;
