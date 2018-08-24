// // Establish Schema

// const mongoose = require('mongoose');

// const roomSchema = mongoose.Schema({
//   room_id: Number,
//   city: String,
//   type: String,
//   title: String,
//   max_guest: Number,
//   subtype: String,
//   beds: Number,
//   baths: Number,
//   host_username: String,
//   avatar: String,
//   highlights: [String],
//   short_description: String,
//   main_description: String,
//   // amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenity'}],
//   amenities: [
//     { amenityType: String, name: String, icon: String, explanation: String }
//   ],
//   house_rules: [String],
//   house_rules_description: String,
//   cancellations: [String],
//   sleeping_arrangements: [String]
// });

// const Room = mongoose.model('Room', roomSchema);

// module.exports = Room;
