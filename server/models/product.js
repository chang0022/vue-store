const mongoose = require('mongoose');
const ProductSchema = require('../schemas/product');
const Product = mongoose.model('Movie', ProductSchema);

module.exports = Product;