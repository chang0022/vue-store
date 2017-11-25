const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manufacturerSchema = Schema({
  name: String,
});

module.exports = manufacturerSchema;
