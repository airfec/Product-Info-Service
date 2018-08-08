const db = require("../models");
const Room = require("../models/Room.js");
// const db = require("../models");

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

module.exports = { getRoom };

// Update:
const updateRoomInfo = (roomId, callback) => {
  // let query = db.Room.findOne({ room_id: roomId });
  // query.exec((err, room) => {
  //   if (err) {
  //     console.log("error in getting room: ", err);
  //     callback(err);
  //   }
  //   callback(null, room);
  // });
};

//Delete:
const deleteRoomInfo = (roomId, callback) => {
  // let query = db.Room.findOne({ room_id: roomId });
  // query.exec((err, room) => {
  //   if (err) {
  //     console.log("error in getting room: ", err);
  //     callback(err);
  //   }
  //   callback(null, room);
  // });
};

module.exports = {
  getRoom,
  postRoomInfo,
  updateRoomInfo,
  deleteRoomInfo,
};
