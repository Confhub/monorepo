interface Option {
  id: number;
  label: string;
  value: string;
  disabled?: boolean;
}

const categoryOptions: Option[] = [
  { id: 0, label: '💻 Tech', value: 'tech', disabled: true },
  { id: 1, label: '💊 Medicine', value: 'medicine', disabled: true },
  { id: 2, label: '👔 Business', value: 'business', disabled: true },
  { id: 3, label: '👩‍💼 Law', value: 'law', disabled: true },
];

const priceOptions: Option[] = [
  { id: 0, label: '💵 > 0', value: 'more-than-0' },
  { id: 1, label: '💵 < $500', value: 'less-than-500' },
  { id: 2, label: '💵 < $1000', value: 'less-than-1000' },
];

const intervalOptions: Option[] = [
  { id: 0, label: '⏰ < 1 month', value: '1' },
  { id: 1, label: '⏰ < 3 months', value: '3' },
  { id: 2, label: '⏰ < 6 month', value: '6' },
  { id: 3, label: '⏰ < 1 year', value: '12' },
];

const locationOptions: Option[] = [
  { id: 0, label: '🚴‍ Current city', value: 'europe' },
  { id: 1, label: '🚗 < 500 Km', value: 'north-america' },
  { id: 2, label: '✈️ < 1000 Km', value: 'latin-america' },
];

const regionOptions: Option[] = [
  { id: 0, label: '🌎 North America', value: 'north_america' },
  { id: 1, label: '💃🏻 Latin America', value: 'latin_america' },
  { id: 2, label: '🇪🇺 Europe', value: 'europe' },
  { id: 3, label: '🌍 Africa', value: 'africa' },
  { id: 4, label: '🕌 Middle East', value: 'middle_east' },
  { id: 5, label: '⛩ Asia', value: 'asia' },
  { id: 6, label: '🏄 Oceania', value: 'oceania' },
  { id: 7, label: '🖥 Online', value: 'online' },
];

const languagesOptions: Option[] = [
  { id: 0, label: '🇬🇧 English', value: 'english' },
  { id: 1, label: '🇪🇸 Spanish', value: 'spanish' },
  { id: 2, label: '🇫🇷 French', value: 'french' },
  { id: 3, label: '🇨🇳 Сhinese', value: 'chinese' },
  { id: 4, label: '🇷🇺 Russian', value: 'russian' },
  { id: 5, label: '🇮🇳 Hindi', value: 'hindi' },
];

export {
  categoryOptions,
  priceOptions,
  intervalOptions,
  locationOptions,
  regionOptions,
  languagesOptions,
};
