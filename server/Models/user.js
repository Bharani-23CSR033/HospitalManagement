const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true // Fixed the typo "reuired" -> "required"
    },
    userID: {
        type: String,
        required: true,
        unique: true
    }
}, { versionKey: false, collection: 'User' });

const User = mongoose.model('User', userSchema);
module.exports = User;
