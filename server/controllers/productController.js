const Product = require('../models/Product');

const createProduct = async (req, res) => {
    try {
        const { title, desc, image_url } = req.body;
        if (!title || !desc || !image_url) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new Product({
            title,
            desc,
            image_url,
            userId: req.user.id
        });

        await newProduct.save();

        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { title, desc, image_url } = req.body;
        const productId = req.params.id;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (product.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized" });
        }
        product.title = title || product.title;
        product.desc = desc || product.desc;
        product.image_url = image_url || product.image_url;
        await product.save();
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id; // use 'id' in route
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        if (product.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        await Product.findByIdAndDelete(productId);

        res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const productId = req.params.userId;   // <-- correct param

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports = { createProduct, updateProduct, deleteProduct, getAllProduct };