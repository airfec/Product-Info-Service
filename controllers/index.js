// Contain DB methods

const db = require("../models");

// Method retereives document
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

// Method adds document
const postRoom = (dataItem, callback) => {
  db.Room.create(dataItem, (err, room) => {
    if (err) {
      console.log(hh"error in posting room: ", err);
      callback(err);
    }
    callback(null, room);
  });
};

// Method updates document
const updateRoom = (roomId, dataItem, callback) => {
  let query = db.Room.updateOne(
    { room_id: roomId },
    { $set: dataItem }
  );
  query.exec((err, room) => {
    if (err) {
      console.log("error in getting room: ", err);
      callback(err);
    }
    callback(null, room);
  });
};

// Method deletes document
const deleteRoom = (roomId, callback) => {
  let query = db.Room.deleteOne({ room_id: roomId });
  query.exec((err, room) => {
    if (err) {
      console.log("error in getting room: ", err);
      callback(err);
    }
    callback(null, room);
  });
};

module.exports = { getRoom, postRoom, updateRoom, deleteRoom};
