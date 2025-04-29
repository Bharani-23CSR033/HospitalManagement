const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    special: {
        type: String,
        required: true
    },
    doctorID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { collection: 'Doctor', timestamps: true });

const Doctor = mongoose.model('Doctors', doctorSchema);

module.exports = Doctor;
