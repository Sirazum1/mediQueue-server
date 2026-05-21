const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://your-vercel-frontend-url.vercel.app'],
  credentials: true
}));
app.use(express.json());

// Routes (we will create these next)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tutors', require('./routes/tutor'));
app.use('/api/bookings', require('./routes/booking'));

// Test route
app.get('/', (req, res) => {
  res.send('🚀 MediQueue Server is Running Successfully!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});