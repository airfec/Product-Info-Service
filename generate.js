const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./models/');
const Amenity = require('./models/Amenity.js');
const Room = require('./models/Room.js');

const PROPERTY_TYPE = [
  'Apartment',
  'Castle',
  'Cabin',
  'Apartment',
  'Entire Home',
  'Private Room',
  'Shared Space',
  'Mill',
  'Dome House'
];
const BED_TYPE = ['single', 'queen', 'double', 'king'];

const AMENITY_DATA = {
  Basic: [
    'Air conditioning',
    'Private entrance',
    'Wifi',
    'Laptop friendly workspace',
    'TV',
    'Heating',
    'Essentials',
    'Hot water'
  ],
  Dining: ['Breakfast', 'Kitchen'],
  'Bed and bath': ['Hair dryer', 'Shampoo', 'Hangers', 'Bed linens', 'Washer'],
  'Safety features': [
    'Fire extinguisher',
    'Smoke detector',
    'Carbon monoxide detector'
  ]
};

const createAmenity = () => {
  const amenityArr = [];
  const keys = Object.keys(AMENITY_DATA);
  console.log(keys);
  for (let j = 0; j < keys.length; j++) {
    for (let i = 0; i < AMENITY_DATA[keys[j]].length; i++) {
      // console.log('inside', AMENITY_DATA[keys[j]][i]);
      const newAmenity = new Amenity({
        type: keys[j],
        name: AMENITY_DATA[keys[j]][i]
      });
      const temp = newAmenity.save();
      amenityArr.push(temp);
    }
  }

  Promise.all(amenityArr)
    .then(results => {
      console.log(`${results.length} data saved in dB!`);
    })
    .catch(err => {
      console.error(err);
    })
    .then(() => {
      mongoose.connection.close(() => {
        process.exit(0);
      });
    });
};

const createRoom = () => {
  const data = [];
  for (let room = 1; room <= 100; room++) {
    // average length for a sentence
    const sentenceLength = faker.random.number({ min: 4, max: 10 });

    const noOfRules = faker.random.number({ min: 4, max: 10 });
    const rules = [];
    for (let j = 0; j < noOfRules; j++) {
      rules.push(faker.lorem.words(sentenceLength));
    }

    const cancellationsLength = faker.random.number({ min: 4, max: 8 });
    const cancelationRules = [];
    for (let j = 0; j < cancellationsLength; j++) {
      cancelationRules.push(
        faker.lorem.sentences(faker.random.number({ min: 3, max: 6 }))
      );
    }

    const dataItem = {};
    dataItem.room_id = room;
    dataItem.city = faker.address.city();
    dataItem.type =
      PROPERTY_TYPE[Math.floor(Math.random() * PROPERTY_TYPE.length)];
    dataItem.title = faker.lorem.words(faker.random.number({ min: 4, max: 8 }));
    dataItem.max_guest = faker.random.number({ min: 2, max: 8 });
    dataItem.subtype = faker.random.number({ min: 2, max: 8 });
    dataItem.beds = faker.random.number({ min: 2, max: 8 });
    dataItem.baths = faker.random.number({ min: 1, max: 4 });
    dataItem.host_username = faker.name.findName();
    dataItem.avatar = faker.image.avatar();
    dataItem.highlights = [
      faker.lorem.words(faker.random.number({ min: 2, max: 4 })),
      faker.lorem.sentences(faker.random.number({ min: 4, max: 8 }))
    ];
    dataItem.short_description = faker.lorem.sentences(
      faker.random.number({ min: 2, max: 4 })
    );
    dataItem.main_description = faker.lorem.sentences(
      faker.random.number({ min: 4, max: 10 })
    );
    // amenities
    dataItem.house_rules = rules;
    dataItem.house_rules_description = faker.lorem.sentences(
      faker.random.number({ min: 4, max: 8 })
    );
    dataItem.cancellations = cancelationRules;
    dataItem.sleeping_arrangements = [];

    for (let x = 0; x < dataItem.beds; x++) {
      let bedDetails = '';
      const noOfBed = faker.random.number({ min: 1, max: 2 });
      const typeOfBEd = BED_TYPE[Math.floor(Math.random() * BED_TYPE.length)];
      if (noOfBed === 1) {
        bedDetails = `${noOfBed} ${typeOfBEd} ` + 'bed';
      } else {
        bedDetails = `${noOfBed} ${typeOfBEd} ` + 'beds';
      }
      dataItem.sleeping_arrangements.push(bedDetails);
    }

    const newRoom = new Room(dataItem);
    const temp = newRoom.save();
    data.push(temp);
  }

  Promise.all(data)
    .then(results => {
      console.log(`${results.length} data saved in dB!`);
    })
    .catch(err => {
      console.error(err);
    })
    .then(() => {
      mongoose.connection.close(() => {
        process.exit(0);
      });
    });
};

createRoom();
// createAmenity();
