import { User } from '../../../generated/prisma';
import { Context } from '../../../helpers';
import { isUserAuthorized } from '../helpers';
import GraphQLUser from '../outputs/User';

export default {
  type: GraphQLUser,
  resolve: async (
    _: any,
    args: any,
    { apiToken, db }: Context,
    info: any,
  ): Promise<User> => {
    const { userId } = await isUserAuthorized(apiToken);
    return db.query.user({ where: { id: userId } }, info);
  },
};
