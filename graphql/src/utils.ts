import * as jwt from 'jsonwebtoken';

import { prisma, USER_ROLE } from './generated/prisma-client';

export const APP_SECRET = process.env.APP_SECRET || '';

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

export async function getUserRole(userId: string): Promise<USER_ROLE> {
  const { role } = await prisma.user({
    id: userId,
  });

  return role;
}
