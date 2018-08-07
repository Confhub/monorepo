// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Social',
  fields: {
    facebook: {
      type: GraphQLString,
    },
    twitter: {
      type: GraphQLString,
    },
    instagram: {
      type: GraphQLString,
    },
  },
});
