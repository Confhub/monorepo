import { GraphQLObjectType, GraphQLString } from 'graphql';

import GraphQLUser, { User } from './User';

export default new GraphQLObjectType({
  name: 'AuthPayload',
  fields: {
    token: {
      type: GraphQLString,
    },
    user: {
      type: GraphQLUser,
    },
  },
});
