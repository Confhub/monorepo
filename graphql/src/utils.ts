import * as jwt from 'jsonwebtoken';
import { Prisma, User } from './generated/prisma-client';

import { JWT_SECRET } from './config';

export interface Context {
  prisma: Prisma;
  user: User;
}

export const getUser = async (req: any, prisma: Prisma) => {
  if (req.headers && req.headers.authorization) {
    const auth = (req.headers && req.headers.authorization) || '';
    const token = auth.replace('Bearer ', '');
    const { userId } = jwt.verify(token, JWT_SECRET) as {
      userId: string;
    };

    return prisma.user({ id: userId });
  }

  return null;
};
