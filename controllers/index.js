// Contain DB methods

const { pool } = require("../models");
const { adapter } = require("./queryAdapter");

const redis = require('redis');
const client = redis.createClient({ socket_keepalive: true });
client.on("error", function (err) {
    console.log("Error " + err);
});

// Method retereives document
const getRoom = (roomId, callback) => {
  const query = {
    name: 'fetch-room',
    text: `SELECT page_info.*, ARRAY_TO_STRING((SELECT ARRAY_AGG('{\"amenityType\":\"' || amenity_type ||'\",\"name\":\"'|| name ||'\",\"icon\":\"'|| COALESCE(icon, '0')  ||'\",\"explanation\":\"'|| COALESCE(explanation, '0') || '\"}') FROM amenities WHERE page_info.room_id = amenities.room_id), ',') AS amenities FROM page_info WHERE page_info.room_id = $1;`,
    values: [roomId]
  }

  client.get(roomId, (err, reply) => {
    if (err) {
      callback(err);
    } else if (reply !== null) {
      callback(null, JSON.parse(reply));
    } else {
      pool.query(query, (err, room) => {
        if (err) {
          callback(err);
        } else {
          callback(null, room);
          client.set(roomId, JSON.stringify(room), (err, reply) => {
            if (err) {
              console.log(err);
            }
          });//client
        }
      });//pool query
    }//else
  });//client get
};//getRoom



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
