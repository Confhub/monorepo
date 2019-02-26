import { AuthenticationError } from 'apollo-server';
import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Conference } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
import GraphQLConference from '../outputs/Conference';

// interface ArgsType {
//   id: string;
// }

export default {
  type: GraphQLConference,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    _: any,
    { id }: any,
    { apiToken, db }: Context,
    info: any,
  ): Promise<Conference | null> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      if (id) {
        return db.mutation.updateConference(
          {
            where: { id },
            data: { publishStatus: 'PUBLISHED' },
          },
          info,
        );
      }
    }

    throw new AuthenticationError('You must have moderator rights');
  },
};
