import * as bcrypt from 'bcryptjs';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import * as jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../../config';
import { Context } from '../../utils';
import GraphQLAuthPayload, { AuthPayload } from '../outputs/AuthPayload';

interface Args {
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
    args: Args | any,
    ctx: Context,
  ): Promise<AuthPayload> => {
    const checkEmail = await ctx.prisma.user({ email: args.email });
    if (checkEmail) {
      throw new Error('Email address already in use');
    }

    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.prisma.createUser({
      ...args,
      password,
    });

    return {
      token: jwt.sign({ userId: user.id }, JWT_SECRET),
      user,
    };
  },
};
