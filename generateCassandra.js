const faker = require("faker");

const PROPERTY_TYPE = [
  "Apartment",
  "Castle",
  "Cabin",
  "Apartment",
  "Entire Home",
  "Private Room",
  "Shared Space",
  "Mill",
  "Dome House"
];
const BED_TYPE = ["single", "queen", "double", "king"];

const AMENITY_DATA = [
  { amenitytype: "Basic", name: "Air conditioning", icon: "", explanation: "" },
  {
    amenitytype: "Basic",
    name: "Private entrance",
    icon: "",
    explanation: "Separate street or building entrance"
  },

  {
    amenitytype: "Basic",
    name: "Heating",
    icon: "",
    explanation: "Central heating or a heater in the listing"
  },

  { amenitytype: "Dining", name: "Breakfast", icon: "", explanation: "" },

  {
    amenitytype: "Bed and bath",
    name: "Hair dryer",
    icon: "",
    explanation: ""
  },
  { amenitytype: "Bed and bath", name: "Shampoo", icon: "", explanation: "" },
  { amenitytype: "Bed and bath", name: "Hangers", icon: "", explanation: "" },
  {
    amenitytype: "Bed and bath",
    name: "Bed linens",
    icon: "",
    explanation: ""
  },
  { amenitytype: "Bed and bath", name: "Washer", icon: "", explanation: "" },
  {
    amenitytype: "Safety features",
    name: "Smoke detector",
    icon: "",
    explanation: ""
  },
  {
    amenitytype: "Safety features",
    name: "Carbon monoxide detector",
    icon: "",
    explanation: ""
  }
];

const defaultAmenities = [
  { amenitytype: "Basic", name: "Wifi", icon: "fa fa-wifi", explanation: "" },
  {
    amenitytype: "Basic",
    name: "TV",
    icon: "fa fa-television",
    explanation: ""
  },
  {
    amenitytype: "Basic",
    name: "Hot water",
    icon: "fa fa-shower",
    explanation: ""
  }
];

const createRoom = (start, end) => {
  for (start; start < end; start++) {
    const noOfRules = faker.random.number({ min: 2, max: 3 });
    const rules = [];
    for (let j = 0; j < noOfRules; j++) {
      rules.push(faker.lorem.words(faker.random.number({ min: 1, max: 2 })));
    }

    const cancellationsLength = faker.random.number({ min: 1, max: 3 });
    let cancelationRules = [];
    for (let j = 0; j < cancellationsLength; j++) {
      cancelationRules.push(
        faker.lorem.words(faker.random.number({ min: 2, max: 3 }))
      );
    }

    cancelationRules = cancelationRules.join(",");

    const id = start;

    const name = `room${start}`;

    const city = faker.address.city();

    const type =
      PROPERTY_TYPE[Math.floor(Math.random() * PROPERTY_TYPE.length)];

    const title = faker.lorem.words(faker.random.number({ min: 1, max: 3 }));

    const max_guest = faker.random.number({ min: 1, max: 4 });

    const sub_type = faker.random.number({ min: 1, max: 8 });

    const beds = faker.random.number({ min: 2, max: 8 });

    const baths = faker.random.number({ min: 1, max: 4 });

    const host = faker.name.findName();

    const avatar = faker.image.avatar();

    const short_desc = faker.lorem.sentences(
      faker.random.number({ min: 1, max: 2 })
    );

    const main_desc = faker.lorem.sentences(
      faker.random.number({ min: 1, max: 2 })
    );

    const rules_desc = faker.lorem.sentences(
      faker.random.number({ min: 1, max: 2 })
    );

    const highligths = `${faker.lorem.words(
      faker.random.number({ min: 1, max: 2 })
    )}, ${faker.lorem.sentences(faker.random.number({ min: 1, max: 2 }))}`;

    const cancel = cancelationRules;

    const sleeping_arrangements = [];
    for (let x = 0; x < beds; x++) {
      let bedDetails = "";
      const noOfBed = faker.random.number({ min: 1, max: 2 });
      const typeOfBEd = BED_TYPE[Math.floor(Math.random() * BED_TYPE.length)];
      if (noOfBed === 1) {
        bedDetails = `${noOfBed} ${typeOfBEd} ` + "bed";
      } else {
        bedDetails = `${noOfBed} ${typeOfBEd} ` + "beds";
      }
      sleeping_arrangements.push(bedDetails);
    }

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

    let amens = populateRandomAmenities(
      faker.random.number({ min: 1, max: 1 })
    );

    console.log(
      `${id}|${JSON.stringify(name)}|${JSON.stringify(city)}|${JSON.stringify(
        type
      )}|${JSON.stringify(
        title
      )}|${max_guest}|${sub_type}|${beds}|${baths}|${JSON.stringify(
        host
      )}|${JSON.stringify(avatar)}|${JSON.stringify(
        short_desc
      )}|${JSON.stringify(main_desc)}|${JSON.stringify(
        rules_desc
      )}|${JSON.stringify(highligths)}|${JSON.stringify(
        rules
      )}|${JSON.stringify(cancel)}|${JSON.stringify(
        sleeping_arrangements
      )}|${JSON.stringify(amens).replace(/\"/g, "'")}`
    );
  }
};
