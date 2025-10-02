import { body, validationResult } from 'express-validator';
import { ApiError } from '../utils/ApiError.js';

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ApiError(400, 'Validation failed', errors.array());
  }
  next();
};

export const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email'),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be between 10 and 2000 characters'),
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 }).withMessage('Subject cannot exceed 200 characters'),
  validate
];

export const validateProject = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ max: 100 }).withMessage('Title cannot exceed 100 characters'),
  body('description')
    .trim()
    .notEmpty().withMessage('Description is required')
    .isLength({ max: 1000 }).withMessage('Description cannot exceed 1000 characters'),
  body('technologies')
    .optional()
    .isArray().withMessage('Technologies must be an array'),
  body('category')
    .optional()
    .isIn(['web', 'mobile', 'desktop', 'embedded', 'simulation', 'ai', 'other'])
    .withMessage('Invalid category'),
  validate
];

export const validateSkill = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required'),
  body('category')
    .notEmpty().withMessage('Category is required')
    .isIn(['languages', 'frameworks', 'tools', 'databases', 'platforms', 'other'])
    .withMessage('Invalid category'),
  body('proficiency')
    .optional()
    .isInt({ min: 0, max: 100 }).withMessage('Proficiency must be between 0 and 100'),
  validate
];

export const validateExperience = [
  body('company')
    .trim()
    .notEmpty().withMessage('Company name is required'),
  body('position')
    .trim()
    .notEmpty().withMessage('Position is required'),
  body('startDate')
    .notEmpty().withMessage('Start date is required')
    .isISO8601().withMessage('Invalid start date format'),
  body('endDate')
    .optional()
    .isISO8601().withMessage('Invalid end date format'),
  validate
];
