import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { DateTime } from '../../../generated/prisma';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  isAdmin: boolean;
  createdAt: DateTime;
}

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
    isAdmin: {
      type: GraphQLBoolean,
      resolve: ({ isAdmin }: User): boolean => isAdmin,
    },
    createdAt: {
      type: GraphQLString,
      resolve: ({ createdAt }: User): DateTime => createdAt,
    },
  },
});
