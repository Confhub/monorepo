import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Conference } from '../../../generated/prisma';
import { Context } from '../../../helpers';
import { isAdminAuthorized } from '../../user/helpers';
import GraphQLConference from '../outputs/Conference';

interface ArgsType {
  id: string;
}

export default {
  type: GraphQLConference,
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
  ): Promise<Conference> => {
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      if (id) {
        return db.mutation.deleteConference(
          {
            where: { id },
          },
          info,
        );
      }
    }

    throw new Error('Something went wrong');
  },
};
