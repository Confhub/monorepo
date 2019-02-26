import { ApolloServer, ServerInfo } from 'apollo-server';
import * as http from 'http';

import Schema from './Schema';
import { createContext } from './utils';

const port = (process.env.PORT && parseInt(process.env.PORT, 10)) || 4000;

const server = new ApolloServer({
  schema: Schema,
  introspection: true,
  playground: true,
  context: async ({ req }: any) => {
    if (!req || !req.headers) {
      return;
    }

    const token = req.headers.authorization || process.env.DEV_API_TOKEN || '';

    return createContext(token);
  },
});

server.listen({ port }).then(({ url }) => {
  // tslint:disable-next-line:no-console
  console.log(`🚀 GraphQL server listening at ${url}`);
});
