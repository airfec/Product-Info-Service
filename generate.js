const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./models/');
// const Amenity = db.Amenity;
const Room = db.Room;

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

const AMENITY_DATA = [
  { amenityType: 'Basic', name: 'Air conditioning', icon: '', explanation: '' },
  {
    amenityType: 'Basic',
    name: 'Private entrance',
    icon: '',
    explanation: 'Separate street or building entrance'
  },

  {
    amenityType: 'Basic',
    name: 'Heating',
    icon: '',
    explanation: 'Central heating or a heater in the listing'
  },

  { amenityType: 'Dining', name: 'Breakfast', icon: '', explanation: '' },

  {
    amenityType: 'Bed and bath',
    name: 'Hair dryer',
    icon: '',
    explanation: ''
  },
  { amenityType: 'Bed and bath', name: 'Shampoo', icon: '', explanation: '' },
  { amenityType: 'Bed and bath', name: 'Hangers', icon: '', explanation: '' },
  {
    amenityType: 'Bed and bath',
    name: 'Bed linens',
    icon: '',
    explanation: ''
  },
  { amenityType: 'Bed and bath', name: 'Washer', icon: '', explanation: '' },
  {
    amenityType: 'Safety features',
    name: 'Smoke detector',
    icon: '',
    explanation: ''
  },
  {
    amenityType: 'Safety features',
    name: 'Carbon monoxide detector',
    icon: '',
    explanation: ''
  }
];

const defaultAmenities = [
  { amenityType: 'Basic', name: 'Wifi', icon: 'fa fa-wifi', explanation: '' },
  {
    amenityType: 'Basic',
    name: 'TV',
    icon: 'fa fa-television',
    explanation: ''
  },
  {
    amenityType: 'Basic',
    name: 'Hot water',
    icon: 'fa fa-shower',
    explanation: ''
  },
  {
    amenityType: 'Dining',
    name: 'Kitchen',
    icon: 'fa fa-cutlery',
    explanation: 'Space where guests can cook their own meals'
  },
  {
    amenityType: 'Facilities',
    name: 'Free parking on premises',
    icon: 'fa fa-car',
    explanation: ''
  },
  {
    amenityType: 'Basic',
    name: 'Laptop friendly workspace',
    icon: 'fa fa-laptop',
    explanation:
      'A table or desk with space for a laptop and a chair that’s comfortable to work in'
  }
];

const populateRandomAmenities = num => {
  let newAmenity = defaultAmenities.slice();
  let allAmenities = AMENITY_DATA.slice();
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * allAmenities.length);
    newAmenity.push(allAmenities[index]);
    allAmenities.splice(index, 1);
  }
  return newAmenity;
};

const createRoom = () => {
  const data = [];
  for (let room = 1; room <= 100; room++) {
    // average length for a sentence
    const sentenceLength = faker.random.number({ min: 4, max: 10 });

    const noOfRules = faker.random.number({ min: 4, max: 10 });
    const rules = [];
    for (let j = 0; j < noOfRules; j++) {
      rules.push(faker.lorem.words(faker.random.number({ min: 2, max: 4 })));
    }

    const cancellationsLength = faker.random.number({ min: 4, max: 8 });
    const cancelationRules = [];
    for (let j = 0; j < cancellationsLength; j++) {
      cancelationRules.push(
        faker.lorem.words(faker.random.number({ min: 6, max: 10 }))
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
    (dataItem.amenities = populateRandomAmenities(
      faker.random.number({ min: 6, max: 10 })
    )),
      (dataItem.house_rules = rules);
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

db.Room.remove({}).exec(function(err, results) {
  if (err) {
    console.error(err);
    return process.exit(0);
  }
  createRoom();
});
