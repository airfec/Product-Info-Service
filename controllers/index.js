// Contain DB methods

const { pool } = require("../models");
const { adapter } = require("./queryAdapter");


// Method retereives document
const getRoom = (roomId, callback) => {
  const query = {
    name: 'fetch-room',
    text: `SELECT page_info.*, ARRAY_TO_STRING((SELECT ARRAY_AGG('[\"' ||  amenity_type ||'\",\"'|| name ||'\",\"'|| COALESCE(icon, '0')  ||'\",\"'|| COALESCE(explanation, '0') || '\"]') FROM amenities WHERE page_info.room_id = amenities.room_id), ',') AS amenities FROM page_info WHERE page_info.room_id = $1;`,
    values: [roomId]
  }

  pool.query(query, (err, room) => {
    if (err) {
      console.log("error in getting room: ", err);
      callback(err);
    }
    // console.log(room);
    // console.log(adapter(room))
    // callback(null, adapter(room));
    // callback(null, room);
  });
};





// Method adds document
const postRoom = (dataItem, callback) => {
  db.Room.create(dataItem, (err, room) => {
    if (err) {
      console.log("error in posting room: ", err);
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
