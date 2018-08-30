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
