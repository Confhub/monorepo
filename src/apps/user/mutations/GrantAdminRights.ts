import { GraphQLID, GraphQLNonNull } from 'graphql';

import { ContextType } from '../../../helpers';
import { isAdminAuthorized } from '../helpers';
import GraphQLUser, { User } from '../outputs/User';

interface ArgsType {
  id: string;
}

export default {
  type: GraphQLUser,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    _: any,
    { id }: ArgsType,
    { apiToken, db }: ContextType,
    info: any,
  ): Promise<User> => {
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      return db.mutation.updateUser(
        {
          where: { id },
          data: {
            isAdmin: true,
          },
        },
        info,
      );
    }

    throw new Error('Something went wrong');
  },
};
