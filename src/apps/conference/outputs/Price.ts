import {
  GraphQLID,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import {
  CURRENCY,
  DateTime,
  Price,
  ID_Output,
} from '../../../generated/prisma';
import GraphQLCurrency from './Currency';

export default new GraphQLObjectType({
  name: 'Price',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Price): ID_Output => id,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: Price): string => name,
    },
    amount: {
      type: GraphQLFloat,
      resolve: ({ amount }: Price): number => amount,
    },
    currency: {
      type: GraphQLCurrency,
      resolve: ({ currency }: Price): CURRENCY => currency,
    },
    expirationDate: {
      type: GraphQLDateTime,
      resolve: ({ expirationDate }: Price): DateTime => expirationDate,
    },
  },
});
