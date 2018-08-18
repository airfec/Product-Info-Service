const { Pool, Client } = require("pg");

// const pool = new Pool({
//   user: "javier",
//   host: "localhost",
//   database: "db_test",
//   password: null,
//   port: 5432
// });

// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

const client = new Client({
  user: "javier",
  host: "localhost",
  database: "db_test",
  password: null,
  port: 5432
});
module.exports = client;

client.connect();

function processQuery(array) {
  const amens = [];
  for (let i = 0; i < array.length; i++) {
    const obj = {};
    obj.amenitytype = arr[i]["amenitytype"];
    obj.icon = arr[i]["icon"];
    obj.explanation = arr[i]["explanation"];
    obj.name = arr[i]["name"];
  }
}

// client.query(
//   "SELECT * FROM roominfo INNER JOIN amenities ON roominfo.id = amenities.room_id WHERE roominfo.id = 10;",
//   (err, res) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(res.rows);
//     client.end();
//   }
// );
