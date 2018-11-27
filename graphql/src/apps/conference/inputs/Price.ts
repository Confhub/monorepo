import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import GraphQLCurrency from '../outputs/Currency';

const GraphQLConferencePriceInput = new GraphQLInputObjectType({
  name: 'PriceInput',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
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

export default GraphQLConferencePriceInput;
