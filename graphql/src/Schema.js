// @flow

import { GraphQLSchema } from 'graphql';

import RootQuery from './RootQuery';
import RootMutation from './RootMutation';
// import RootSubscription from './RootSubscription';

const schemaDefinition = {
  query: RootQuery,
  mutation: RootMutation,
  // subscription: RootSubscription,
};

export default new GraphQLSchema(schemaDefinition);
