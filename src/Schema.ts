import { GraphQLSchema } from 'graphql';

import RootMutation from './RootMutation';
import RootQuery from './RootQuery';
// import RootSubscription from './RootSubscription';

const schemaDefinition = {
  query: RootQuery,
  mutation: RootMutation,
  // subscription: RootSubscription,
};

export default new GraphQLSchema(schemaDefinition);
