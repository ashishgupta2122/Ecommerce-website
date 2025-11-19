const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
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
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'customer'
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    }],
    paymentInformation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'paymentInformation'
    }],
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ratings'
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', userSchema);
