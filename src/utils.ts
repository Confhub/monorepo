import * as jwt from 'jsonwebtoken';

import { Prisma, USER_ROLE } from './generated/prisma';

export const APP_SECRET = process.env.APP_SECRET || '';

export interface Context {
  apiToken: string;
  db: Prisma;
}

const getPrismaInstance = () => {
  return new Prisma({
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: process.env.NODE_ENV === 'development',
  });
};

export function createContext(token: string): Context {
  return {
    apiToken: token,
    db: getPrismaInstance(),
  };
}

export function getUserId(token: string): string {
  if (token) {
    const apiToken = token.replace('Bearer ', '');
    const { userId } = jwt.verify(apiToken, APP_SECRET) as {
      userId: string;
    };
    return userId;
  }

  throw new Error('Not authorized');
}

export async function getUserRole(userId: string, db: any): Promise<USER_ROLE> {
  const { role } = (await db.query.user({
    where: { id: userId },
  })) as {
    role: USER_ROLE;
  };

  return role;
}
