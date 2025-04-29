const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorID: {
    type: String,
    required: true,
    ref: 'Doctor'
  },
  patientID: {
    type: String,
    required: true,
    ref: 'User'
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  reason: {
    type: String
  },
  status: {
    type: String,
    required:false,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
