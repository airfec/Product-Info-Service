const adapter = (room) => {
  room = room.rows[0];
  console.log(room);
  newRoom = {
    room_id: room.room_id,
    room_name: room.room_name,
    city: room.city,
    type: room.type,
    title: room.title,
    max_guests: room.max_guests,
    subtype: room.subtype,
    beds: room.beds,
    baths: room.baths,
    host_username: room.host_username,
    avatar: room.avatar,
    short_description: room.short_description,
    main_description: room.main_description,
    house_rules: JSON.parse("[\"" + room.house_rules.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]"),
    house_rules_description: room.house_rules_description,
    cancellations: JSON.parse("[\"" + room.cancellations.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]"),
    sleeping_arrangements: JSON.parse("[\"" + room.sleeping_arrangements.replace(/\*/g ,"\",\"").slice(1,-1) + "\"]"),
    amenities: JSON.parse("[" + room.amenities + "]"),
  }
  return (newRoom);
}

module.exports = {
  adapter: adapter,
}
