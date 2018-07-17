// @flow

import { GraphQLServer } from 'graphql-yoga';

import { default as typeDefs } from './typeDefs/index';
import { default as resolvers } from './resolvers/index';

// import Schema from './Schema';
import { createContext } from './helpers';

const port = parseInt(process.env.PORT, 10) || 4000;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  // schema: Schema,
  context: async ({ request, connection }: GraphQLServer) => {
    if (connection) {
      const token =
        connection.context['Authorization'] ||
        connection.context.authorization ||
        process.env.DEV_API_TOKEN ||
        '';

      return createContext(token);
    } else {
      if (!request || !request.headers) {
        return;
      }
      const token =
        request.headers.authorization || process.env.DEV_API_TOKEN || '';

      return createContext(token);
    }
  },
  mocks: false,
});

server.start({ port }, ({ port }) =>
  // eslint-disable-next-line no-console
  console.log(`🚀 GraphQL server listening at localhost:${port}`),
);
