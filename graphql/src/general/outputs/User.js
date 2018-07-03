// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export type User = {|
  id: string,
  email: string,
  createdAt: string,
  password: string,
  name: string,
|};

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: GraphQLID,
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
  },
});
