import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import { Currency, DateTime, Price } from '../../../generated/prisma';
import GraphQLCurrency from '../../currencies/outputs/Currency';

export default new GraphQLObjectType({
  name: 'Price',
  fields: {
    amount: {
      type: GraphQLString,
      resolve: ({ amount }: Price): string => amount,
    },
    currency: {
      type: GraphQLCurrency,
      resolve: ({ currency }: Price): Currency => currency,
    },
    expirationDate: {
      type: GraphQLDateTime,
      resolve: ({ expirationDate }: Price): DateTime => expirationDate,
    },
  },
});
