const Tutor = require('../models/Tutor');

// Get all tutors (public)
const getAllTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find().populate('user', 'name email photoURL');
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single tutor by ID
const getTutorById = async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id).populate('user', 'name email photoURL');
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new tutor (private - only logged in user)
const createTutor = async (req, res) => {
  try {
    const tutor = await Tutor.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json({
      message: 'Tutor added successfully',
      tutor
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get my tutors (only tutors created by logged in user)
const getMyTutors = async (req, res) => {
  try {
    const tutors = await Tutor.find({ user: req.user.id });
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update tutor (only owner can update)
const updateTutor = async (req, res) => {
  try {
    const tutor = await Tutor.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found or you are not authorized' });
    }
    res.json({ message: 'Tutor updated successfully', tutor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete tutor (only owner can delete)
const deleteTutor = async (req, res) => {
  try {
    const tutor = await Tutor.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found or you are not authorized' });
    }
    res.json({ message: 'Tutor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
  getMyTutors,
  updateTutor,
  deleteTutor
};