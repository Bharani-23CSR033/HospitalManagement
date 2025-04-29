const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9000;
const MONGO_URI = process.env.MONGO_URI;

const doctorRouter = require('./Router/doctorRouter');
const userRouter = require('./Router/userRouter');
const adminRouter = require('./Router/adminRouter');
const appointmentRouter=require('./Router/appointmantRouter');

// Middleware
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB 🚀'))
    .catch((err) => console.error('MongoDB connection error:', err.message));

// Routes
app.use(doctorRouter);
app.use(userRouter);
app.use(adminRouter);
app.use(appointmentRouter);
app.use('/doctorImages',express.static('doctorImages'));
// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🌐`));
