// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Currency',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
});
