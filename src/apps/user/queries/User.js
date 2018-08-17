// @flow

import GraphQLUser from '../outputs/User';
import { isUserAuthorized } from '../helpers';

export default {
  type: GraphQLUser,
  resolve: async (
    _: mixed,
    args: mixed,
    { apiToken, db }: Object,
    info: any,
  ) => {
    // TODO: add return types
    const { userId } = await isUserAuthorized(apiToken);
    return db.query.user({ where: { id: userId } }, info);
  },
};
