import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'Region',
  values: {
    NORTH_AMERICA: {
      value: 'NORTH_AMERICA',
    },
    LATIN_AMERICA: {
      value: 'LATIN_AMERICA',
    },
    EUROPE: {
      value: 'EUROPE',
    },
    AFRICA: {
      value: 'AFRICA',
    },
    MIDDLE_EAST: {
      value: 'MIDDLE_EAST',
    },
    ASIA: {
      value: 'ASIA',
    },
    OCEANIA: {
      value: 'OCEANIA',
    },
  },
});
