import { GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { Tag } from '../../../generated/prisma-client';
import { Context } from '../../../types';
import GraphQLTag from '../outputs/Tag';

interface ArgsType {
  name: string;
}

export default {
  type: GraphQLTag,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _: any,
    { name }: ArgsType,
    { prisma }: Context,
  ): Promise<Tag> => {
    return prisma.createTag({
      data: {
        name,
        slug: tslug(name, { decamelize: true }),
      },
    });
  },
};
