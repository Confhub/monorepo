import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'Currency',
  values: {
    USD: {
      value: 'USD',
    },
    EUR: {
      value: 'EUR',
    },
  },
});
