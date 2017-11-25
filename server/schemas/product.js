const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    manufacturer: {type: ObjectId, ref: 'Manufacturer'}
});

module.exports = productSchema;
