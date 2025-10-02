import express from 'express';
import {
  submitContact,
  getAllContacts,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';
import { validateContact } from '../middleware/validators.js';

const router = express.Router();

router.post('/', validateContact, submitContact);
router.get('/', getAllContacts);
router.patch('/:id', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
