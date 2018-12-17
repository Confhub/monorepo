import { AuthenticationError } from 'apollo-server';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { Tag } from '../../../generated/prisma-client';
import { Context } from '../../../types';
import { getUserId, getUserRole } from '../../../utils';
import GraphQLTag from '../outputs/Tag';

interface ArgsType {
  id: string;
  name: string;
}

export default {
  type: GraphQLTag,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    parent: any,
    { id, name }: ArgsType,
    { apiToken, prisma }: Context,
  ): Promise<Tag | null> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId);

    if (userRole === 'MODERATOR') {
      return prisma.updateTag({
        where: { id },
        data: {
          name,
          slug: tslug(name, { decamelize: true }),
        },
      });
    }

    throw new AuthenticationError('You must have moderator rights');
  },
};
