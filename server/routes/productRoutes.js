const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const { updateProduct } = require('../controllers/productController');
const { deleteProduct } = require('../controllers/productController');
const { getAllProduct } = require('../controllers/productController');


// Create Product
router.post('/create/:userId', authMiddleware, createProduct);
router.post('/create', authMiddleware, createProduct);
router.put('/:id', authMiddleware, updateProduct);
router.delete('/:id', authMiddleware, deleteProduct);
router.get("/user/:userId", authMiddleware, getAllProduct);

module.exports = router;
