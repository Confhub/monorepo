// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import GraphQLAuthPayload from '../outputs/AuthPayload';

// import type { AuthPayload as AuthPayloadType } from '../types/AuthPayload';

type argsType = {
  email: string,
  password: string,
  name: string,
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
    name: {
      type: GraphQLString,
    },
  },
  resolve: async (_: mixed, args: argsType, ctx: Object) => {
    /*const checkEmail = await db.User.findOne({ email: args.email });
    if (checkEmail) {
      throw new Error(`Email address already in use`);
    }*/

    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    });

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    };
  },
};
