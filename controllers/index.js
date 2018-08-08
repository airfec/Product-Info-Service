const db = require("../models");
const Room = require("../models/Room.js");

// Create:
const postRoomInfo = (data, callback) => {
  Room.create(data, (err, result) => {
    if(err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

// Read:
const getRoom = (roomId, callback) => {
  let query = db.Room.findOne({ room_id: roomId });
  query.exec((err, room) => {
    if (err) {
      console.log("error in getting room: ", err);
      callback(err);
    }
    callback(null, room);
  });
};

// Update:
const updateRoomInfo = (roomId, updatedBody, callback) => {
  Room.update({ room_id: roomId }, { $set: updatedBody}, callback);
};

//Delete:
const deleteRoomInfo = (roomId, callback) => {
  Room.deleteOne({ room_id: roomId }, function (err) {
    if (err) {
      callback(err);
    }
    callback(null)
  });
};

module.exports = {
  getRoom,
  postRoomInfo,
  updateRoomInfo,
  deleteRoomInfo,
};
