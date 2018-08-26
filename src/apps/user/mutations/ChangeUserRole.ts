import { GraphQLID, GraphQLNonNull } from 'graphql';

import { User, USER_ROLE } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
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
    _: any,
    { id, newRole }: ArgsType,
    { apiToken, db }: Context,
    info: any,
  ): Promise<User> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      return db.mutation.updateUser(
        {
          where: { id },
          data: {
            role: newRole,
          },
        },
        info,
      );
    }

    throw new Error('You must have moderator rights');
  },
};
