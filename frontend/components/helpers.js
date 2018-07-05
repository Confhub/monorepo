import queryString from 'query-string';

const mL = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
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
export const parseDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const month = mS[start.getMonth()];
  const year = start.getFullYear();
  const startDay = start.getDate();
  const endDay = end.getDate();

  return `${month} ${startDay}-${endDay}, ${year}`;
};

export const searchCity = query => {
  const params = queryString.stringify({
    access_token: process.env.MAPBOX_SECRET,
    type: 'place',
    autocomplete: true,
    language: 'en',
  });
  return fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?` + params
  )
    .then(res => res.json())
    .then(res => res.features);
};
