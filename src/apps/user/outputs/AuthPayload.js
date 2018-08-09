// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

import GraphQLUser, { type User } from './User';

export type AuthPayload = {|
  token: string,
  user: User,
|};

export default new GraphQLObjectType({
  name: 'AuthPayload',
  fields: {
    token: {
      type: GraphQLString,
    },
    user: {
      type: GraphQLUser,
    },
  },
});
