// @flow

import { GraphQLNonNull, GraphQLID } from 'graphql';

import GraphQLUser from '../outputs/User';
import { isAdminAuthorized } from '../helpers';
import { type ContextType } from '../../../helpers';

type argsType = {
  id: string,
};

export default {
  type: GraphQLUser,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    _: mixed,
    { id }: argsType,
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
