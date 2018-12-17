import { ApolloError } from 'apollo-server';
import * as bcrypt from 'bcryptjs';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import * as jwt from 'jsonwebtoken';

import { Context } from '../../../types';
import { APP_SECRET } from '../../../utils';
import GraphQLAuthPayload, { AuthPayload } from '../outputs/AuthPayload';

interface ArgsType {
  email: string;
  password: string;
  name: string;
}

export default {
  type: GraphQLAuthPayload,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _: any,
    args: ArgsType,
    { prisma }: Context,
  ): Promise<AuthPayload> => {
    const checkEmail = await prisma.user({
      email: args.email,
    });
    if (checkEmail) {
      throw new ApolloError('Email address already in use');
    }

    const password = await bcrypt.hash(args.password, 10);
    const user = await prisma.createUser({
      data: { ...args, password },
    });

    return {
      token: jwt.sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
};
