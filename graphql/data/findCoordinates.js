const fs = require('fs');
const path = require('path');

const ROOT = './data';

// List of conferences to sanitize
let conferences = null;
// list of extra data like countryCode and coordinates for cities from conferences
let cities = null;

// find all unique cities and save them to cities
function readConferences(err, file) {
  if (err) {
    throw Error('Unable to load conference');
  }

  conferences = JSON.parse(file);

  const citiesList = conferences.reduce((acc, { city }) => {
    if (!acc[city]) {
      acc[city] = { city };
    }

    return acc;
  }, {});

  cities = citiesList;

  fs.readFile(path.resolve(ROOT, './cities.json'), 'utf8', readCities);
}

// get info about cities (countryCode, coordinates)
function readCities(err, file) {
  if (err) {
    throw Error('Unable to load cities');
  }

  const citiesList = JSON.parse(file);

  Object.entries(cities).forEach(([key, val]) => {
    const coordinates = citiesList.find(city => city.name === key);

    if (coordinates) {
      cities[key] = { ...val, ...coordinates };
      return;
    }

    console.log(`Unable to find coordinates for ${key}`);
  });

  prepareData();
}

// sanitize data according graphql schema and save it to sanitizedData
function prepareData() {
  const data = (conferences = conferences.map(item => {
    const cityData = cities[item.city];

    return {
      name: item.name,
      url: item.url,
      startDate: item.startDate,
      endDate: item.endDate,
      tags: [
        {
          id: 'cjqv0ee5vr85u0950duq9u6tp',
          name: 'javascript',
        },
      ],
      location: {
        city: item.city,
        country: item.country,
        address: `${item.city} ${item.country}`,
        countryCode: cityData && cityData.country,
        coordinates: {
          latitude: (cityData && cityData.lat) || '',
          longitude: (cityData && cityData.lng) || '',
        },
      },
    };
  }));

  fs.writeFile(
    path.resolve(ROOT, './sanitizedData.json'),
    JSON.stringify(data),
    saveFile,
  );
}

function saveFile(err) {
  if (err) {
    throw Error('Unable to save file');
  }

  console.log('saved file');
}

fs.readFile(path.resolve(ROOT, './javascript.json'), 'utf8', readConferences);
