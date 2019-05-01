import { applyMiddleware } from 'graphql-middleware';
import { GraphQLServer } from 'graphql-yoga';

import { prisma } from './generated/prisma-client';

import Schema from './Schema';
import permissions from './shield';
import { getUser } from './utils';

const server = new GraphQLServer({
  schema: applyMiddleware(Schema, permissions),
  context: async ({ request }: { request: Request }) => ({
    ...request,
    prisma,
    user: await getUser(request, prisma),
  }),
});

server.start(({ port }) => {
  console.info(`🚀 GraphQL server listening at http://localhost:${port}`);
});
