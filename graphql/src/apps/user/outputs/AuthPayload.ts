import { GraphQLObjectType, GraphQLString } from 'graphql';

import { User } from '../../../generated/prisma-client';
import GraphQLUser from './User';

export interface AuthPayload {
  token: string;
  user: User;
}

export default new GraphQLObjectType({
  name: 'AuthPayload',
  fields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }: AuthPayload): string => token,
    },
    user: {
      type: GraphQLUser,
      resolve: ({ user }: AuthPayload): User => user,
    },
  },
});
