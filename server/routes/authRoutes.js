const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUserProfile,
    getAllUsers
} = require('../controllers/authController');

const authMiddleware = require('../middlewares/authMiddleware');

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Get logged-in user profile
router.get('/profile', authMiddleware, getUserProfile);

// Get all users (Admin only)
router.get('/users', authMiddleware, getAllUsers);

module.exports = router;
