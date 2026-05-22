# MediQueue – Backend (Tutor Booking System)

**Live Backend:** [https://mediqueue-server-txy3.onrender.com](https://mediqueue-server-txy3.onrender.com)

RESTful API for the MediQueue Tutor Booking System.

## Features

- User authentication (Register & Login with JWT)
- CRUD operations for Tutors
- Booking system with slot management
- Protected routes for private features
- MongoDB database with Mongoose

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Tutors
- `GET /api/tutors` → Get all tutors
- `GET /api/tutors/:id` → Get single tutor
- `POST /api/tutors` → Add new tutor (protected)
- `GET /api/tutors/my-tutors` → Get user's tutors (protected)
- `PUT /api/tutors/:id` → Update tutor (protected)
- `DELETE /api/tutors/:id` → Delete tutor (protected)

### Bookings
- `POST /api/bookings` → Book a session (protected)
- `GET /api/bookings/my-bookings` → Get user's bookings (protected)
- `PATCH /api/bookings/:id/cancel` → Cancel booking (protected)
