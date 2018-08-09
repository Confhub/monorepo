import queryString from 'query-string';

// const mL = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];
const mS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

// return date in format May 2-4, 2018
// export const parseDateRange = (startDate: string, endDate: string) => {
export const parseDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const month = mS[start.getMonth()];
  const year = start.getFullYear();
  const startDay = start.getDate();
  const endDay = end.getDate();

  return `${month} ${startDay}-${endDay}, ${year}`;
};

export const searchCity = async (query, { search } = {}) => {
  const params = {
    access_token: process.env.MAPBOX_SECRET,
    autocomplete: true,
    language: 'en',
  };

  if (!search) {
    params.type = 'place';
  }

  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?` + queryString.stringify(params),
  );

  const { features } = await res.json();

  return features;
};

export const getLocation = () =>
  new Promise((resolve, reject) => {
    const success = position => {
      const { longitude, latitude } = position.coords;
      resolve([longitude, latitude]);
    };

    const error = err => {
      reject(err);
    };

    const options = {
      maximumAge: 5 * 60 * 1000,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  });
