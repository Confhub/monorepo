import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import { DateTime, ID_Output } from '../../../generated/prisma';
import GraphQLCurrency from './Currency';

export default new GraphQLObjectType({
  name: 'Price',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: any): ID_Output => id,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: any): string => name,
    },
    amount: {
      type: GraphQLFloat,
      resolve: ({ amount }: any): number => amount,
    },
    currency: {
      type: GraphQLCurrency,
      resolve: ({ currency }: any): any => currency,
    },
    expirationDate: {
      type: GraphQLDateTime,
      resolve: ({ expirationDate }: any): DateTime => expirationDate,
    },
  },
});
