import express from 'express';
import {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill
} from '../controllers/skillController.js';
import { validateSkill } from '../middleware/validators.js';

const router = express.Router();

router.get('/', getAllSkills);
router.post('/', validateSkill, createSkill);
router.put('/:id', validateSkill, updateSkill);
router.delete('/:id', deleteSkill);

export default router;
