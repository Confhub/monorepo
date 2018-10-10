import { GraphQLObjectType } from 'graphql';

import { ConferencePrice, Price } from '../../../generated/prisma';
import GraphQLPrice from './Price';

export default new GraphQLObjectType({
  name: 'ConferencePrice',
  fields: {
    regular: {
      type: GraphQLPrice,
      resolve: ({ regular }: ConferencePrice): Price => regular,
    },
    earlyBird: {
      type: GraphQLPrice,
      resolve: ({ earlyBird }: ConferencePrice): Price => earlyBird,
    },
    lateBird: {
      type: GraphQLPrice,
      resolve: ({ lateBird }: ConferencePrice): Price => lateBird,
    },
  },
});
