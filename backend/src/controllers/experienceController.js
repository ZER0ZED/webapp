import Experience from '../models/Experience.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// @desc    Get all experiences
// @route   GET /api/experiences
// @access  Public
export const getAllExperiences = asyncHandler(async (req, res) => {
  const experiences = await Experience.find()
    .sort({ startDate: -1, order: 1 })
    .select('-__v');

  res.status(200).json(
    new ApiResponse(200, 'Experiences retrieved successfully', experiences)
  );
});

// @desc    Get single experience
// @route   GET /api/experiences/:id
// @access  Public
export const getExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.findById(req.params.id).select('-__v');

  if (!experience) {
    throw new ApiError(404, 'Experience not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Experience retrieved successfully', experience)
  );
});

// @desc    Create new experience
// @route   POST /api/experiences
// @access  Private
export const createExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.create(req.body);

  res.status(201).json(
    new ApiResponse(201, 'Experience created successfully', experience)
  );
});

// @desc    Update experience
// @route   PUT /api/experiences/:id
// @access  Private
export const updateExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  ).select('-__v');

  if (!experience) {
    throw new ApiError(404, 'Experience not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Experience updated successfully', experience)
  );
});

// @desc    Delete experience
// @route   DELETE /api/experiences/:id
// @access  Private
export const deleteExperience = asyncHandler(async (req, res) => {
  const experience = await Experience.findByIdAndDelete(req.params.id);

  if (!experience) {
    throw new ApiError(404, 'Experience not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Experience deleted successfully')
  );
});
