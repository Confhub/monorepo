import { ContextType } from '../../../helpers';
import { isUserAuthorized } from '../helpers';
import GraphQLUser from '../outputs/User';

export default {
  type: GraphQLUser,
  resolve: async (
    _: any,
    args: any,
    { apiToken, db }: ContextType,
    info: any,
  ) => {
    // TODO: add return types
    const { userId } = await isUserAuthorized(apiToken);
    return db.query.user({ where: { id: userId } }, info);
  },
};
