// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import GraphQLAuthPayload, { type AuthPayload } from '../outputs/AuthPayload';

type argsType = {
  email: string,
  password: string,
};

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
    _: mixed,
    { email, password }: argsType,
    ctx: Object,
  ): Promise<AuthPayload> => {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email: ${email}`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },
};
