// @flow

import { Prisma } from 'prisma-binding';

export type ContextType = {|
  apiToken: string,
  db: Prisma,
|};

const getPrismaInstance = () => {
  return new Prisma({
    typeDefs: 'src/typeDefs/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: process.env.NODE_ENV === 'development',
  });
};

export function createContext(token: string): ContextType {
  return {
    apiToken: token,
    db: getPrismaInstance(),
  };
}
