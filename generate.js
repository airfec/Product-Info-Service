const faker = require('faker');
const fs = require('fs');
const out = fs.createWriteStream('./test.csv');

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

  out.write('room_id, city, type, title, max_guest, subtype, beds, baths, host_username, avatar, short_description, main_description, house_rules_description, highlights, house_rules, cancellations, sleeping_arrangements \n');

  for (let room = 1; room < 1000000; room++) {

    const sentenceLength = faker.random.number({ min: 4, max: 10 });
    
    let sentence = `${room},`;
    sentence += `${faker.address.city()},`;
    sentence += `${PROPERTY_TYPE[Math.floor(Math.random() * PROPERTY_TYPE.length)] },`;
    sentence += `${ faker.lorem.sentences(faker.random.number({ min: 4, max: 8 })) },`;
    sentence += `${faker.random.number({ min: 2, max: 8 }) },`;
    sentence += `${faker.random.number({ min: 2, max: 8 }) },`;
    sentence += `${faker.random.number({ min: 2, max: 8 }) },`;
    sentence += `${faker.random.number({ min: 1, max: 4 }) },`;
    sentence += `${faker.name.findName()},`;
    sentence += `${faker.image.avatar()},`;
    sentence += `${faker.lorem.sentences(faker.random.number({ min: 2, max: 4 })) },`;
    sentence += `${faker.lorem.sentences(faker.random.number({ min: 4, max: 10 })) },`;
    sentence += `${faker.lorem.sentences(faker.random.number({ min: 4, max: 8 })) },`;
    //highlights
    sentence += `${faker.lorem.sentences(faker.random.number({ min: 2, max: 4 }))}* ${faker.lorem.sentences(faker.random.number({ min: 4, max: 8 }))},`;
    //house_rules
    const noOfRules = faker.random.number({ min: 4, max: 10 });
    let rules = '';
    for (let j = 0; j < noOfRules; j++) {
      rules += `${faker.lorem.sentences(faker.random.number({ min: 2, max: 4 }))}* `;
    }
    sentence += `${rules},`;
    //cancellation
    const cancellationsLength = faker.random.number({ min: 4, max: 8 });
    let cancelationRules = '';
    for (let j = 0; j < cancellationsLength; j++) {
      cancelationRules += `${faker.lorem.sentences(faker.random.number({ min: 6, max: 10 }))}* `;
    }
    sentence += `${cancelationRules},`;
    //sleeping arrangements
    let beds = faker.random.number({ min: 2, max: 8 });
    for (let x = 0; x < beds; x++) {
      let bedDetails = '';
      const noOfBed = faker.random.number({ min: 1, max: 2 });
      const typeOfBEd = BED_TYPE[Math.floor(Math.random() * BED_TYPE.length)];
      if (noOfBed === 1) {
        bedDetails = `${noOfBed} ${typeOfBEd} ` + 'bed';
      } else {
        bedDetails = `${noOfBed} ${typeOfBEd} ` + 'beds';
      }
      sentence += `${bedDetails}* `;
    }
    out.write(`${sentence}\n`);
  }

};

createRoom();

