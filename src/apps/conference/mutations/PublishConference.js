// @flow

import { GraphQLNonNull, GraphQLID } from 'graphql';

import GraphQLConference from '../outputs/Conference';
import { isAdminAuthorized } from '../../user/helpers';
import { type ContextType } from '../../../helpers';

type argsType = {
  id: string,
};

export default {
  type: GraphQLConference,
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
      const makeQuery = extra => ({
        where: { id },
        data: { publishStatus: 'PUBLISHED' },
        ...extra,
      });

      if (id) {
        return db.mutation.updateConference(makeQuery(), info);
      }
    }

    throw new Error('Something went wrong');
  },
};
