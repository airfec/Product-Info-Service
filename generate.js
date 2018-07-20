const db = require('./models/');
const faker = require('faker');
const mongoose = require('mongoose');

const PROPERTY_TYPE = ['Apartment', 'Castle', 'Cabin', 'Apartment', 'Entire Home', 
  'Private Room', 'Shared Space', 'Mill', 'Dome House'];
const BED_TYPE = ['single', 'queen', 'double', 'king'];

const AMENITY_DATA = {
  Basic: ['Air conditioning', 'Private entrance', 'Wifi', 'Laptop frriendly workspace',
    'TV', 'Heating', 'Essentials', 'Hot water'],
  Dining: ['Breakfast', 'Kitchen'],
  "Bed and bath": ['Hair dryer', 'Shampoo', 'Hangers', 'Bed linens', 'Washer'],
  "Safety features": ['Fire extinguisher', 'Smoke detector', 'Carbon monoxide detector', ]
};

const amenitiesSchema = mongoose.Schema({
  type: String,
  name: String
});

const Amenity = mongoose.model('Amenity', amenitiesSchema);

const createAmenity = () => {
  for (let typeProp in AMENITY_DATA) {
    for (let i = 0; i < AMENITY_DATA[typeProp].length; i++) {
      let newAmenity = new Amenity({
        type: typeProp,
        name: AMENITY_DATA[typeProp][i]
      });

      newAmenity.save((err) => {
        if (err) {
          console.log('error saving new Amenity:', err);
        }
        console.log('Amenity saved to the dB!');
      });
    }
  }
}

const roomSchema = mongoose.Schema({
  room_id: Number,
  city: String,
  type: String,
  title: String,
  max_guest: Number,
  subtype: String,
  beds: Number,
  baths: Number,
  host_username: String,
  avatar: String,
  highlights: [String],
  short_description: String,
  main_description: String,
  // amenities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Amenity'}],
  house_rules: [String],
  house_rules_description: String,
  cancellations: [String],
  sleeping_arrangements: [String]
});

const Room = mongoose.model('Room', roomSchema);

const createRoom = () => {
  for (let room = 1; room <= 100; room++) {
    //average length for a sentence
    let sentenceLength = faker.random.number({ min: 4, max: 10 });    

    let noOfRules = faker.random.number({ min: 4, max: 10 });
    let rules = [];
    for (let j = 0; j < noOfRules; j++) {
      rules.push(faker.lorem.words(sentenceLength));
    }

    let cancellationsLength = faker.random.number({ min: 4, max: 8});
    let cancelationRules = [];
    for (let j = 0; j < cancellationsLength; j++) {
      cancelationRules.push(faker.lorem.sentences(faker.random.number({ min: 3, max: 6 })));
    }
    
    let dataItem = {};
    dataItem.room_id = room;
    dataItem.city = faker.address.city();
    dataItem.type = PROPERTY_TYPE[Math.floor(Math.random() * PROPERTY_TYPE.length)];
    dataItem.title = faker.lorem.words(faker.random.number({ min: 4, max: 8 }));
    dataItem.max_guest = faker.random.number({ min: 2, max: 8 });
    dataItem.subtype = faker.random.number({ min: 2, max: 8 });
    dataItem.beds = faker.random.number({ min: 2, max: 8 });
    dataItem.baths = faker.random.number({ min: 1, max: 4 });
    dataItem.host_username = faker.name.findName();
    dataItem.avatar = faker.image.avatar();
    dataItem.highlights = [faker.lorem.words(faker.random.number({ min: 2, max: 4 })), 
      faker.lorem.sentences(faker.random.number({ min: 4, max: 8 }))];
    dataItem.short_description = faker.lorem.sentences(faker.random.number({ min: 2, max: 4 }));
    dataItem.main_description = faker.lorem.sentences(faker.random.number({ min: 4, max: 10 }));
    //amenities
    dataItem.house_rules = rules;
    dataItem.house_rules_description = faker.lorem.sentences(faker.random.number({ min: 4, max: 8 }));
    dataItem.cancellations = cancelationRules;
    dataItem.sleeping_arrangements = [];

    for (let x = 0; x < dataItem.beds; x++) {
      let bedDetails = '';
      let noOfBed = faker.random.number({ min: 1, max: 2 });
      let typeOfBEd = BED_TYPE[Math.floor(Math.random() * BED_TYPE.length)];
      if (noOfBed === 1) {
        bedDetails = noOfBed + ' ' + typeOfBEd + ' ' + 'bed';
        console.log(bedDetails);
      } else {
        bedDetails = noOfBed + ' ' + typeOfBEd + ' ' + 'beds';
        console.log(bedDetails);

      }
      dataItem.sleeping_arrangements.push(bedDetails);
    }

    let newRoom = new Room(dataItem);

    newRoom.save((err) => {
      if (err) {
        console.log('error saving new Room:', err);
      }
      console.log('Room saved to the dB!');
    });
  }
}

createAmenity();
createRoom();






