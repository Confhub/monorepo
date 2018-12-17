import { User } from '../../../generated/prisma-client';
import { Context } from '../../../types';
import { getUserId } from '../../../utils';
import GraphQLUser from '../outputs/User';

export default {
  type: GraphQLUser,
  resolve: async (
    parent: any,
    args: any,
    { apiToken, prisma }: Context,
  ): Promise<User> => {
    const userId = await getUserId(apiToken);

    return prisma.user({ id: userId });
  },
};
