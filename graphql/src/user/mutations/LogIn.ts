import * as bcrypt from 'bcryptjs';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import * as jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../../config';
import { Context } from '../../utils';
import GraphQLAuthPayload, { AuthPayload } from '../outputs/AuthPayload';

interface Args {
  email: string;
  password: string;
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
  },
  resolve: async (
    _: any,
    { email, password }: Args | any,
    ctx: Context,
  ): Promise<AuthPayload> => {
    const user = await ctx.prisma.user({ email });

    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid credentials');
    }

    return {
      token: jwt.sign({ userId: user.id }, JWT_SECRET),
      user,
    };
  },
};
