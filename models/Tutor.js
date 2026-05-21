const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  availableDays: {
    type: String,
    required: true
  },
  availableTime: {
    type: String,
    required: true
  },
  hourlyFee: {
    type: Number,
    required: true
  },
  totalSlot: {
    type: Number,
    default: 10
  },
  sessionStartDate: {
    type: Date,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  teachingMode: {
    type: String,
    enum: ['Online', 'Offline', 'Both'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Tutor', tutorSchema);