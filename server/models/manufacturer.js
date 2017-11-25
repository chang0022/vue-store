const mongoose = require('mongoose');
const ManufacturerSchema = require('../schemas/manufacturer');
const Manufacturer = mongoose.model('Movie', ManufacturerSchema);

module.exports = Manufacturer;