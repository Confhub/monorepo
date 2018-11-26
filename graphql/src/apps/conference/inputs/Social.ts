import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ConferenceSocialInput',
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
