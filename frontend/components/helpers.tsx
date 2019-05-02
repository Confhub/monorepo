import queryString from 'query-string';

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
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?` +
      queryString.stringify(params),
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

const cloudName = 'alizhdanov';
const unsignedUploadPreset = 'is2hk7eh';

export const handleImageLoading = async file => {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const fd = new FormData();
  fd.append('upload_preset', unsignedUploadPreset);
  fd.append('file', file);

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: fd,
    });

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

export const customRequest = async ({ file, headers, onError, onSuccess }) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const formData = new FormData();
  formData.append('upload_preset', unsignedUploadPreset);
  formData.append('file', file);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: formData,
    });

    const data = await response.json();

    onSuccess(data, file);
  } catch (e) {
    onError(e);
  }
};

export const setImageParams = (url, params) => {
  // if img hosted not in cloudinary, don't modify it
  if (!url.includes('cloudinary.com')) {
    return url;
  }
  // 7 is length of 'upload/' string
  const sliceIndex = url.indexOf('upload/') + 7;
  const start = url.slice(0, sliceIndex);
  const end = url.slice(sliceIndex);

  return `${start}${params}/${end}`;
};

////////////////////////
// GOOGLE PLACES
////////////////////////

// IMPORTANT: session token can save a lot of money, please don't remove it
// some info - https://developers.google.com/places/web-service/autocomplete#session_tokens
const sessiontoken = Math.random()
  .toString(36)
  .slice(2);

// getting detailed data about place by it's id
// more info
// https://developers.google.com/places/web-service/details
export const getPlaceDetails = async placeid => {
  const params = {
    key: 'AIzaSyB-UymjkciC5d1_SQRq5p2t_X3oaJ6zCkI',
    placeid,
    fields: 'geometry,formatted_address,address_components',
    language: 'en',
    sessiontoken,
  };
  const url =
    'https://maps.googleapis.com/maps/api/place/details/json?' +
    queryString.stringify(params);

  const res = await fetch(url, { mode: 'cors' });

  const { result } = await res.json();

  return result;
};

// getting autocomplete data by query
// more info
// https://developers.google.com/places/web-service/autocomplete
export const getPlaceAutocomplete = async query => {
  const params = {
    key: 'AIzaSyB-UymjkciC5d1_SQRq5p2t_X3oaJ6zCkI',
    input: query,
    language: 'en',
    sessiontoken,
  };
  const url =
    'https://maps.googleapis.com/maps/api/place/autocomplete/json?' +
    queryString.stringify(params);

  try {
    const res = await fetch(url);

    const { predictions } = await res.json();

    return predictions;
  } catch (e) {
    console.log(e);
  }
};
