import { ApolloServer, ServerInfo } from 'apollo-server';
import * as http from 'http';

import Schema from './Schema';
import { prisma } from './generated/prisma-client';
import { Context } from './types';

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 4000;

const server = new ApolloServer({
  schema: Schema,
  context: async ({ req }: any): Promise<Context> => {
    if (!req || !req.headers) {
      return;
    }

    const token = req.headers.authorization || process.env.DEV_API_TOKEN || '';

    return {
      apiToken: token,
      prisma,
    };
  },
});

server.listen({ port }).then(({ url }) => {
  // tslint:disable-next-line:no-console
  console.log(`🚀 GraphQL server listening at ${url}`);
});
