import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

import { DateTime, User, USER_ROLE } from '../../../generated/prisma';
import GraphQLUserRole from '../outputs/UserRole';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: User): string => id,
    },
    email: {
      type: GraphQLString,
      resolve: ({ email }: User): string => email,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: User): string => name,
    },
    role: {
      type: GraphQLUserRole,
      resolve: ({ role }: User): USER_ROLE => role,
    },
    createdAt: {
      type: GraphQLString,
      resolve: ({ createdAt }: User): DateTime => createdAt,
    },
  },
});
