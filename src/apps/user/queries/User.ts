import { User } from '../../../generated/prisma';
import { getUserId, Context } from '../../../utils';
import GraphQLUser from '../outputs/User';

export default {
  type: GraphQLUser,
  resolve: async (
    _: any,
    args: any,
    { apiToken, db }: Context,
    info: any,
  ): Promise<User> => {
    const userId = await getUserId(apiToken);
    return db.query.user({ where: { id: userId } }, info);
  },
};
