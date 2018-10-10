import { GraphQLInputObjectType, GraphQLID, GraphQLString } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ConferenceTagInput',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    slug: {
      type: GraphQLString,
    },
  },
});
