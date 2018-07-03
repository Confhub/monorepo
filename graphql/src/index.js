// @flow

import { ApolloServer } from 'apollo-server';
import { Prisma } from 'prisma-binding';

import Schema from './Schema';
import { createContext } from './helpers';

const port = parseInt(process.env.PORT, 10) || 4000;

const getPrismaInstance = () => {
  return new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true,
  });
};

const startServer = async () => {
  const server = new ApolloServer({
    schema: Schema,
    context: async ({ req, connection }: ApolloServer) => {
      if (connection) {
        const token =
          connection.context['Authorization'] ||
          connection.context.authorization ||
          process.env.DEV_API_TOKEN ||
          '';

        return createContext(token);
      } else {
        if (!req || !req.headers) {
          return;
        }
        const token =
          req.headers.authorization || process.env.DEV_API_TOKEN || '';

        return createContext(token);
      }
    },
    db: getPrismaInstance(),
    tracing: true,
    mocks: true,
  });

  server.listen(port).then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`🚀 GraphQL server listening at ${url}`);
  });
};

startServer().catch((error: Error) => {
  console.error(error); // eslint-disable-line no-console
});
