// @flow

import { forwardTo } from 'prisma-binding';

import GraphQLUser, { type User } from '../outputs/User';

export default {
  type: GraphQLUser,
  resolve: () => {
    return forwardTo('db');
  },
};
