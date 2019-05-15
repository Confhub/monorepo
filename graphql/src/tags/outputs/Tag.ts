import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import { Tag } from '../../generated/prisma-client';

export default new GraphQLObjectType({
  name: 'Tag',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({ id }: Tag): string => id,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ name }: Tag): string => name,
    },
    slug: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ slug }: Tag): string => slug,
    },
  },
});
