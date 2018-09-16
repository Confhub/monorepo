import { ApolloServer } from 'apollo-server';

import Schema from './Schema';
import { createContext } from './utils';

const port = parseInt(process.env.PORT, 10) || 4000;

const server = new ApolloServer({
  schema: Schema,
  context: async ({ req }) => {
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
