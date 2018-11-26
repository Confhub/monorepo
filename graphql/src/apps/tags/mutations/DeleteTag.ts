import { AuthenticationError } from 'apollo-server';
import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Tag } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
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
    _: any,
    { id }: ArgsType,
    { apiToken, db }: Context,
    info: any,
  ): Promise<Tag | null> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      if (id) {
        return db.mutation.deleteTag(
          {
            where: { id },
          },
          info,
        );
      }
    }

    throw new AuthenticationError('You must have moderator rights');
  },
};
