import { ContextType } from '../../../helpers';
import { isUserAuthorized } from '../helpers';
import GraphQLUser, { User } from '../outputs/User';

export default {
  type: GraphQLUser,
  resolve: async (
    _: any,
    args: any,
    { apiToken, db }: ContextType,
    info: any,
  ): Promise<User> => {
    const { userId } = await isUserAuthorized(apiToken);
    return db.query.user({ where: { id: userId } }, info);
  },
};
