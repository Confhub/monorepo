// @flow

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
} from 'graphql';

export type Price = {|
  id: string,
  amount: number,
  currency: string,
|};

export default new GraphQLObjectType({
  name: 'Price',
  fields: {
    id: {
      type: GraphQLID,
    },
    amount: {
      type: GraphQLFloat,
    },
    currency: {
      type: GraphQLString,
    },
  },
});
