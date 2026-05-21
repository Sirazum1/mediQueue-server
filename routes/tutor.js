const express = require('express');
const router = express.Router();
const { 
  getAllTutors, 
  getTutorById, 
  createTutor, 
  getMyTutors, 
  updateTutor, 
  deleteTutor 
} = require('../controllers/tutorController');
const protect = require('../middleware/auth');

// Public routes
router.get('/', getAllTutors);
router.get('/:id', getTutorById);

// Protected routes
router.post('/', protect, createTutor);
router.get('/my-tutors', protect, getMyTutors);
router.put('/:id', protect, updateTutor);
router.delete('/:id', protect, deleteTutor);

module.exports = router;