import Skill from '../models/Skill.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
export const getAllSkills = asyncHandler(async (req, res) => {
  const { category, featured } = req.query;

  const query = {};
  if (category) query.category = category;
  if (featured) query.featured = featured === 'true';

  const skills = await Skill.find(query)
    .sort({ category: 1, order: 1 })
    .select('-__v');

  // Group by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  res.status(200).json(
    new ApiResponse(200, 'Skills retrieved successfully', {
      skills,
      grouped: groupedSkills
    })
  );
});

// @desc    Create new skill
// @route   POST /api/skills
// @access  Private
export const createSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.create(req.body);

  res.status(201).json(
    new ApiResponse(201, 'Skill created successfully', skill)
  );
});

// @desc    Update skill
// @route   PUT /api/skills/:id
// @access  Private
export const updateSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  ).select('-__v');

  if (!skill) {
    throw new ApiError(404, 'Skill not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Skill updated successfully', skill)
  );
});

// @desc    Delete skill
// @route   DELETE /api/skills/:id
// @access  Private
export const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findByIdAndDelete(req.params.id);

  if (!skill) {
    throw new ApiError(404, 'Skill not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Skill deleted successfully')
  );
});
