const mongoose = require('mongoose');

const amenitiesSchema = mongoose.Schema({
  type: String,
  name: String,
});

const Amenity = mongoose.model('Amenity', amenitiesSchema);

module.exports = Amenity;
