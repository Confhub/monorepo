import { AuthenticationError } from 'apollo-server';
import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Tag } from '../../../generated/prisma-client';
import { Context } from '../../../types';
import { getUserId, getUserRole } from '../../../utils';
import GraphQLTag from '../outputs/Tag';

interface ArgsType {
  id: string;
}

export default {
  type: GraphQLTag,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    parent: any,
    { id }: ArgsType,
    { apiToken, prisma }: Context,
  ): Promise<Tag | null> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId);

    if (userRole === 'MODERATOR') {
      if (id) {
        return prisma.deleteTag({
          id,
        });
      }
    }

    throw new AuthenticationError('You must have moderator rights');
  },
};
