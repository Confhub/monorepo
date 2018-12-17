import { AuthenticationError } from 'apollo-server';
import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Conference } from '../../../generated/prisma-client';
import { Context } from '../../../types';
import { getUserId, getUserRole } from '../../../utils';
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
    parent: any,
    { id }: ArgsType,
    { apiToken, prisma }: Context,
    info: any,
  ): Promise<Conference | null> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId);

    if (userRole === 'MODERATOR') {
      if (id) {
        return prisma.deleteConference({
          id,
        });
      }
    }

    throw new AuthenticationError('You must have moderator rights');
  },
};
