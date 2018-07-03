// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export type User = {|
  id: number,
  name: string,
  description: string,
|};

export default new GraphQLObjectType({
  name: 'Userasdsd',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
});
