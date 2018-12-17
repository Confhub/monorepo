import { AuthenticationError } from 'apollo-server';
import { GraphQLID, GraphQLNonNull } from 'graphql';

import { User, USER_ROLE } from '../../../generated/prisma-client';
import { Context } from '../../../types';
import { getUserId, getUserRole } from '../../../utils';
import GraphQLUser from '../outputs/User';
import GraphQLUserRole from '../outputs/UserRole';

interface ArgsType {
  id: string;
  newRole: USER_ROLE;
}

export default {
  type: GraphQLUser,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    newRole: {
      type: new GraphQLNonNull(GraphQLUserRole),
    },
  },
  resolve: async (
    parent: any,
    { id, newRole }: ArgsType,
    { apiToken, prisma }: Context,
    info: any,
  ): Promise<User> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId);

    if (userRole === 'MODERATOR') {
      return prisma.updateUser({
        where: { id },
        data: {
          role: newRole,
        },
      });
    }

    throw new AuthenticationError('You must have moderator rights');
  },
};
