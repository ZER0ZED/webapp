import Contact from '../models/Contact.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { sendEmail } from '../services/emailService.js';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Create contact record
  const contact = await Contact.create({
    name,
    email,
    subject: subject || 'No Subject',
    message,
    ipAddress: req.ip,
    userAgent: req.get('user-agent')
  });

  // Send email notification
  try {
    await sendEmail({
      to: process.env.RECIPIENT_EMAIL,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `
    });
  } catch (emailError) {
    console.error('Email sending failed:', emailError);
    // Don't fail the request if email fails
  }

  res.status(201).json(
    new ApiResponse(201, 'Message sent successfully! I will get back to you soon.', {
      id: contact._id
    })
  );
});

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private
export const getAllContacts = asyncHandler(async (req, res) => {
  const { status, limit = 50, page = 1 } = req.query;

  const query = {};
  if (status) query.status = status;

  const skip = (parseInt(page) - 1) * parseInt(limit);

  const contacts = await Contact.find(query)
    .sort({ createdAt: -1 })
    .limit(parseInt(limit))
    .skip(skip)
    .select('-__v');

  const total = await Contact.countDocuments(query);

  res.status(200).json(
    new ApiResponse(200, 'Contacts retrieved successfully', {
      contacts,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    })
  );
});

// @desc    Update contact status
// @route   PATCH /api/contact/:id
// @access  Private
export const updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { 
      status,
      ...(status === 'read' && !contact.readAt ? { readAt: new Date() } : {})
    },
    { new: true, runValidators: true }
  ).select('-__v');

  if (!contact) {
    throw new ApiError(404, 'Contact message not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Contact status updated successfully', contact)
  );
});

// @desc    Delete contact message
// @route   DELETE /api/contact/:id
// @access  Private
export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    throw new ApiError(404, 'Contact message not found');
  }

  res.status(200).json(
    new ApiResponse(200, 'Contact message deleted successfully')
  );
});
