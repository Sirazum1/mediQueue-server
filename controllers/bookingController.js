const Booking = require('../models/Booking');
const Tutor = require('../models/Tutor');

// Create new booking
const createBooking = async (req, res) => {
  try {
    const { tutorId, studentName, phone } = req.body;
    const student = req.user.id;

    const tutor = await Tutor.findById(tutorId);
    if (!tutor) {
      return res.status(404).json({ message: 'Tutor not found' });
    }

    // Check slot availability
    if (tutor.totalSlot <= 0) {
      return res.status(400).json({ message: 'No available slots left for this tutor' });
    }

    // Check session start date
    if (new Date(tutor.sessionStartDate) > new Date()) {
      return res.status(400).json({ message: 'Booking is not available yet for this tutor' });
    }

    // Create booking
    const booking = await Booking.create({
      student,
      tutor: tutorId,
      studentName,
      studentEmail: req.user.email,
      phone
    });

    // Decrease total slot
    tutor.totalSlot -= 1;
    await tutor.save();

    res.status(201).json({
      message: 'Session booked successfully!',
      booking
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get my booked sessions
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ student: req.user.id })
      .populate('tutor', 'name subject hourlyFee photo');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancel booking
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, student: req.user.id },
      { status: 'cancelled' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found or you are not authorized' });
    }

    // Optional: Increase slot back (you can remove this if not needed)
    // const tutor = await Tutor.findById(booking.tutor);
    // if (tutor) {
    //   tutor.totalSlot += 1;
    //   await tutor.save();
    // }

    res.json({ message: 'Booking cancelled successfully', booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createBooking, getMyBookings, cancelBooking };