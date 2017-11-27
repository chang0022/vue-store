const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String,
});

module.exports = manufacturerSchema;
