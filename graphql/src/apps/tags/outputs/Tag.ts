import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import { Tag } from '../../../generated/prisma-client';

export default new GraphQLObjectType({
  name: 'Tag',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Tag): string => id,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: Tag): string => name,
    },
    slug: {
      type: GraphQLString,
      resolve: ({ slug }: Tag): string => slug,
    },
  },
});
