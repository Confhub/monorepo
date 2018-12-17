import { GraphQLObjectType, GraphQLString } from 'graphql';

import { Social } from '../../../generated/prisma-client';

export default new GraphQLObjectType({
  name: 'Social',
  fields: {
    facebook: {
      type: GraphQLString,
      resolve: ({ facebook }: Social): string => facebook,
    },
    twitter: {
      type: GraphQLString,
      resolve: ({ twitter }: Social): string => twitter,
    },
    instagram: {
      type: GraphQLString,
      resolve: ({ instagram }: Social): string => instagram,
    },
  },
});
