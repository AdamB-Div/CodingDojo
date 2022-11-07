const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: [3, "Title must be at least 3 characters long"],
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
            minlength: [5, "Description must be at least 5 characters long"],
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
