import Project from '../models/Project.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getAllProjects = asyncHandler(async (req, res) => {
  const { category, featured, status, limit = 50, page = 1 } = req.query;

  const query = {};
  if (category) query.category = category;
  if (featured) query.featured = featured === 'true';
  if (status) query.status = status;

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const projects = await Project.find(query)
    .sort({ featured: -1, order: 1, createdAt: -1 })
    .limit(parseInt(limit))
    .skip(skip)
    .select('-__v');

  const total = await Project.countDocuments(query);

  res.status(200).json(
    new ApiResponse(200, 'Projects retrieved successfully', {
      projects,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    })
  );
});

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
export const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id).select('-__v');

  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  // Increment views
  project.views += 1;
  await project.save();

  res.status(200).json(
    new ApiResponse(200, 'Project retrieved successfully', project)
  );
});

// @desc    Create new project
// @route   POST /api/projects
// @access  Private (You would add auth middleware)
export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);

  res.status(201).json(
    new ApiResponse(201, 'Project created successfully', project)
  );
});

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  ).select('-__v');

  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Project updated successfully', project)
  );
});

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Private
export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Project deleted successfully')
  );
});

// @desc    Get featured projects
// @route   GET /api/projects/featured
// @access  Public
export const getFeaturedProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ featured: true })
    .sort({ order: 1, createdAt: -1 })
    .limit(6)
    .select('-__v');

  res.status(200).json(
    new ApiResponse(200, 'Featured projects retrieved successfully', projects)
  );
});
