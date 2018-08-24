import { GraphQLID, GraphQLNonNull } from 'graphql';

import { ContextType } from '../../../helpers';
import { isAdminAuthorized } from '../helpers';
import GraphQLUser from '../outputs/User';

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
  ) => {
    // TODO: add return types
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      const makeQuery = () => ({
        where: { id },
        data: {
          isAdmin: true,
        },
      });

      return db.mutation.updateUser(makeQuery(), info);
    }

    throw new Error('Something went wrong');
  },
};
