import { GraphQLServer } from 'graphql-yoga';

import Schema from './Schema';
import { createContext } from './utils';

const options = {
  port: parseInt(process.env.PORT, 10) || 4000,
};

const server = new GraphQLServer({
  schema: Schema,
  context: async ({ request, connection }) => {
    if (connection) {
      const token =
        connection.context.Authorization ||
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
});

server.start(options, ({ port }) => {
  // tslint:disable-next-line:no-console
  console.log(`🚀 GraphQL server listening at http://localhost:${port}/`);
});
