// @flow

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import type { ContextType } from '../helpers';

type signInArgs = {
  email: string,
  password: string,
};

type signUpArgs = {
  email: string,
  password: string,
  name: string,
};

export default {
  Mutation: {
    signIn: async (_, { email, password }: signInArgs, { db }: ContextType) => {
      const user = await db.query.user({ where: { email } });
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
    signUp: async (_, args: signUpArgs, { db }: ContextType) => {
      /*const checkEmail = await db.User.findOne({ email: args.email });
          if (checkEmail) {
            throw new Error(`Email address already in use`);
          }*/

      const password = await bcrypt.hash(args.password, 10);
      const user = await db.mutation.createUser({
        data: { ...args, password },
      });

      return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        user,
      };
    },
  },
};
