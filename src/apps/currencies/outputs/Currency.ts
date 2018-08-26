import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import { Currency } from '../../../generated/prisma';

export default new GraphQLObjectType({
  name: 'Currency',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Currency): string => id,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: Currency): string => name,
    },
  },
});
