import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Conference } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
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
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      if (id) {
        return db.mutation.deleteConference(
          {
            where: { id },
          },
          info,
        );
      }
    }

    throw new Error('You must have moderator rights');
  },
};
