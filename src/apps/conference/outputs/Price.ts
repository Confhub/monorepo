import { GraphQLFloat, GraphQLObjectType } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import { CURRENCY, DateTime, Price } from '../../../generated/prisma';
import GraphQLCurrency from './Currency';

export default new GraphQLObjectType({
  name: 'Price',
  fields: {
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
