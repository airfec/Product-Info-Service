/* 
func (req, res) {

}
*/
const db = require("../models");

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

const createRoom = (roomInfo, callback) => { 
  const room = new db.Room(roomInfo);
  room.save(callback);
}

const updateRoom = (newRoom, id, callback) => {
  db.Room.findByIdAndUpdate(
    id, 
    newRoom, 
    {new: true},
    callback
  );
};


module.exports = { 
  getRoom,
  createRoom,
  updateRoom,
};
