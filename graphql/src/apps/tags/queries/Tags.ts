import { GraphQLList } from 'graphql';

import { Tag } from '../../../generated/prisma-client';
import { Context } from '../../../types';
import GraphQLTag from '../outputs/Tag';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (parent: any, args: any, { prisma }: Context): Promise<Tag[]> => {
    return prisma.tags();
  },
};
