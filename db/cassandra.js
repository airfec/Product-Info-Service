// CREATE KEYSPACE sdc_db
//   WITH REPLICATION = {
//    'class' : 'SimpleStrategy',
//    'replication_factor' : 1
// };

// CREATE KEYSPACE IF NOT EXISTS sdc WITH REPLICATION = {‘class’ : ‘SimpleStrategy’, ‘replication_factor’ : 1};

//final table

CREATE TABLE ri (
    id int,
    name text,
    city text,
    type text,
    title text,
    max_guest int,
    subtype int,
    beds int,
    baths int,
    host_username text,
    avatar text,
    short_description text,
    main_description text,
    house_rules_description text,
    highlights text,
    house_rules list<text>,
    cancellations text,
    sleeping_arrangements list<text>,
    amenities list<frozen <map<text,text>>>,
    PRIMARY KEY (id)
);

//GOOD ONE
/*
INSERT INTO sdc.ri (id,name,city,type,title,max_guest, subtype, beds, baths, host_username, avatar, short_description, main_description,house_rules_description, highlights,house_rules, cancellations,sleeping_arrangements, amenities)  VALUES(1,'roomname1','san francisco','type type','nice room',5,3,2,1,'Fernando','my avatar','this is a short description','this is the main desc','this will be the house rules',['high1', 'high2'],['rule 1', 'rule 2', 'rule 3'],['cancellation 1', 'cancellation 2'], ['sleep 1', 'sleep2', 'sleep3'], [{'aminitytype':'basic','name':'wifi','icon':'fafa','explanation':'my explanatiin'}]);
*/

// CREATE TABLE amenities (
//     id INTEGER,
//     room_id  VARCHAR (255),
//     amenitytype VARCHAR (255),
//     name VARCHAR (255),
//     icon VARCHAR (800),
//     explanation VARCHAR(255)
//   );

// INSERT INTO sdc.roominfo (id,city,amenities)
//   VALUES(1,'San francisco', [{aminitytype:'basic',name:'wifi',icon:'fafa',explanation:'my explanatiin'}]);
// CREATE TABLE roominfo (
//     race_name text,
//     race_position int,
//     cyclist_name FROZEN<fullname>,
//     ////
//     id int,
//     name text,
//     city text,
//     type text,
//     title text,
//     max_guest int,
//     subtype int,
//     beds int,
//     baths int,
//     host_username text,
//     avatar text,
//     short_description text,
//     main_description text,
//     house_rules_description text,
//     highlights text,
//     house_rules text,
//     cancellations text,
//     sleeping_arrangements text,
//     amenities map<list <frozen<map<text,text,text,text >>>,
//     PRIMARY KEY (race_name, race_position)
// );

var cassandra = require("cassandra-driver");
var client = new cassandra.Client({ contactPoints: ["127.0.0.1:9042"] });

// client.connect(function(err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Connected to cassandra db!");
//   client.execute("USE sdc", function(err, result) {
//     if (err) {
//       console.log(err);
//     }
//     console.log("USING SDC");
//     client.execute(query, params, { prepare: true }, function(err) {
//       if (err) {
//         console.log(err);
//       }
//       console.log("Insert done!");
//     });
//   });
// });
const query =
  "INSERT INTO sdc.ri (id,name,city,type,title,max_guest, subtype, beds, baths, host_username, avatar, short_description, main_description,house_rules_description, highlights,house_rules, cancellations,sleeping_arrangements, amenities) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

module.exports = {
  client,
  query
};
const params = [
  2,
  "roomname1",
  "san francisco",
  "type type",
  "nice room",
  5,
  3,
  2,
  1,
  "Fernando",
  "my avatar",
  "this is a short description",
  "this is the main desc",
  "this will be the house rules",
  ["high1", "high2"],
  ["rule 1", "rule 2", "rule 3"],
  ["cancellation 1", "cancellation 2"],
  ["sleep 1", "sleep2", "sleep3"],
  [
    {
      aminitytype: "basic",
      name: "wifi",
      icon: "fafa",
      explanation: "my explanatiin"
    }
  ]
];

// const query2 = "USE sdc;";
// client.execute(query2, function(err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Using SDC");
// });

// client.execute(query, params, { prepare: true }, function(err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Insert done!");
// });

// const query3 = "SELECT * from ri;";
// client.execute(query3, function(err, result) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Results:", result);
// });

// CREATE TYPE amens (
//   amenityType text,
//   name text,
//   icon text,
//   explanation text
// )
