const mongoose = require('mongoose');
const dotenv = require('dotenv');     // ← Added
const connectDB = require('./config/db');
const Tutor = require('./models/Tutor');

dotenv.config();   // ← This line is added here (right after requires)

const seedTutors = async () => {
  try {
    await connectDB();

    await Tutor.deleteMany();
    console.log('🗑️  Old tutors cleared');

    const tutorsData = [
      {
        user: "67a1b2c3d4e5f67890123456",
        name: "Dr. Ayesha Khan",
        photo: "https://picsum.photos/id/1005/800/600",
        subject: "Mathematics",
        availableDays: "Sun - Thu",
        availableTime: "5:00 PM - 8:00 PM",
        hourlyFee: 800,
        totalSlot: 8,
        sessionStartDate: "2026-05-25",
        institution: "BUET",
        experience: "7 years",
        location: "Dhaka",
        teachingMode: "Both"
      },
      {
        user: "67a1b2c3d4e5f67890123456",
        name: "Prof. Rakib Hassan",
        photo: "https://picsum.photos/id/1011/800/600",
        subject: "Physics",
        availableDays: "Sat - Wed",
        availableTime: "4:00 PM - 7:00 PM",
        hourlyFee: 900,
        totalSlot: 6,
        sessionStartDate: "2026-05-26",
        institution: "DU",
        experience: "12 years",
        location: "Chittagong",
        teachingMode: "Online"
      },
      {
        user: "67a1b2c3d4e5f67890123456",
        name: "Ms. Nusrat Jahan",
        photo: "https://picsum.photos/id/1009/800/600",
        subject: "English",
        availableDays: "Mon - Fri",
        availableTime: "6:00 PM - 9:00 PM",
        hourlyFee: 600,
        totalSlot: 10,
        sessionStartDate: "2026-05-24",
        institution: "NSU",
        experience: "5 years",
        location: "Dhaka",
        teachingMode: "Offline"
      },
      {
        user: "67a1b2c3d4e5f67890123456",
        name: "Mr. Fahim Ahmed",
        photo: "https://picsum.photos/id/1015/800/600",
        subject: "Chemistry",
        availableDays: "Sun - Thu",
        availableTime: "3:00 PM - 6:00 PM",
        hourlyFee: 750,
        totalSlot: 7,
        sessionStartDate: "2026-05-27",
        institution: "RU",
        experience: "9 years",
        location: "Rajshahi",
        teachingMode: "Both"
      },
      {
        user: "67a1b2c3d4e5f67890123456",
        name: "Sabrina Islam",
        photo: "https://picsum.photos/id/1027/800/600",
        subject: "Biology",
        availableDays: "Sat - Wed",
        availableTime: "5:30 PM - 8:30 PM",
        hourlyFee: 650,
        totalSlot: 9,
        sessionStartDate: "2026-05-28",
        institution: "JU",
        experience: "4 years",
        location: "Dhaka",
        teachingMode: "Online"
      },
      {
        user: "67a1b2c3d4e5f67890123456",
        name: "Dr. Imran Khan",
        photo: "https://picsum.photos/id/1049/800/600",
        subject: "Computer Science",
        availableDays: "Mon - Fri",
        availableTime: "7:00 PM - 10:00 PM",
        hourlyFee: 1200,
        totalSlot: 5,
        sessionStartDate: "2026-05-29",
        institution: "IUT",
        experience: "11 years",
        location: "Gazipur",
        teachingMode: "Both"
      },
      {
    user: "67a1b2c3d4e5f67890123456",
    name: "Prof. Farhana Begum",
    photo: "https://picsum.photos/id/1009/800/600",
    subject: "Economics",
    availableDays: "Sun - Thu",
    availableTime: "4:30 PM - 7:30 PM",
    hourlyFee: 850,
    totalSlot: 7,
    sessionStartDate: "2026-05-30",
    institution: "DU",
    experience: "8 years",
    location: "Dhaka",
    teachingMode: "Online"
  },
  {
    user: "67a1b2c3d4e5f67890123456",
    name: "Mr. Sohail Rana",
    photo: "https://picsum.photos/id/1016/800/600",
    subject: "Accounting",
    availableDays: "Sat - Wed",
    availableTime: "5:00 PM - 8:00 PM",
    hourlyFee: 700,
    totalSlot: 12,
    sessionStartDate: "2026-05-31",
    institution: "NSU",
    experience: "6 years",
    location: "Chittagong",
    teachingMode: "Both"
  },
  {
    user: "67a1b2c3d4e5f67890123456",
    name: "Ms. Priya Das",
    photo: "https://picsum.photos/id/1033/800/600",
    subject: "Bangla Literature",
    availableDays: "Mon - Fri",
    availableTime: "6:30 PM - 9:30 PM",
    hourlyFee: 550,
    totalSlot: 15,
    sessionStartDate: "2026-06-01",
    institution: "JU",
    experience: "10 years",
    location: "Dhaka",
    teachingMode: "Offline"
  },
  {
    user: "67a1b2c3d4e5f67890123456",
    name: "Dr. Hasan Mahmud",
    photo: "https://picsum.photos/id/106/800/600",
    subject: "History",
    availableDays: "Sun - Thu",
    availableTime: "3:00 PM - 6:00 PM",
    hourlyFee: 650,
    totalSlot: 8,
    sessionStartDate: "2026-06-02",
    institution: "RU",
    experience: "14 years",
    location: "Rajshahi",
    teachingMode: "Online"
  },
  {
    user: "67a1b2c3d4e5f67890123456",
    name: "Ms. Lamia Akter",
    photo: "https://picsum.photos/id/1003/800/600",
    subject: "Programming (Python)",
    availableDays: "Sat - Wed",
    availableTime: "7:30 PM - 10:30 PM",
    hourlyFee: 1100,
    totalSlot: 6,
    sessionStartDate: "2026-06-03",
    institution: "BUET",
    experience: "5 years",
    location: "Dhaka",
    teachingMode: "Both"
  }
    ];

    await Tutor.insertMany(tutorsData);
    console.log('✅ 6 Demo Tutors Seeded with Real Images Successfully!');

    process.exit();
  } catch (error) {
    console.error('❌ Seeding Error:', error.message);
    process.exit(1);
  }
};

seedTutors();