import * as bcrypt from 'bcryptjs';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import * as jwt from 'jsonwebtoken';

import { ContextType } from '../../../helpers';
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
    ctx: ContextType,
  ): Promise<AuthPayload> => {
    const checkEmail = await ctx.db.query.user({
      where: { email: args.email },
    });
    if (checkEmail) {
      throw new Error(`Email address already in use`);
    }

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
