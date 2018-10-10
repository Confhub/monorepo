import { GraphQLFloat, GraphQLInputObjectType, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import GraphQLCurrency from '../outputs/Currency';

export const GraphQLConferencePriceInput = new GraphQLInputObjectType({
  name: 'ConferencePriceInput',
  fields: {
    amount: {
      type: GraphQLFloat,
    },
    currency: {
      type: GraphQLCurrency,
    },
    expiration: {
      type: GraphQLDateTime,
    },
  },
});

export default new GraphQLInputObjectType({
  name: 'ConferencePricesInput',
  fields: {
    regular: {
      type: GraphQLConferencePriceInput,
    },
    earlyBird: {
      type: GraphQLConferencePriceInput,
    },
    lateBird: {
      type: GraphQLConferencePriceInput,
    },
  },
});
