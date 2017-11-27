const mongoose = require('mongoose');
const ManufacturerSchema = require('../schemas/manufacturer');
const Manufacturer = mongoose.model('Manufacturer', ManufacturerSchema);

module.exports = Manufacturer;