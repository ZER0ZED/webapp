import express from 'express';
import {
  getAllExperiences,
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience
} from '../controllers/experienceController.js';
import { validateExperience } from '../middleware/validators.js';

const router = express.Router();

router.get('/', getAllExperiences);
router.get('/:id', getExperience);
router.post('/', validateExperience, createExperience);
router.put('/:id', validateExperience, updateExperience);
router.delete('/:id', deleteExperience);

export default router;
