import express from 'express';
import {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects
} from '../controllers/projectController.js';
import { validateProject } from '../middleware/validators.js';

const router = express.Router();

router.get('/featured', getFeaturedProjects);
router.get('/', getAllProjects);
router.get('/:id', getProject);
router.post('/', validateProject, createProject);
router.put('/:id', validateProject, updateProject);
router.delete('/:id', deleteProject);

export default router;
