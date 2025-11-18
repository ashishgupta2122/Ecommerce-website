const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();  // ⚠️ Load env BEFORE using it

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();

// Middleware
app.use(express.json());

// DB Connect
connectDB();

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/products', productRoutes);

// Server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
