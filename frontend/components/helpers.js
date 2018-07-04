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
