import { GraphQLInputObjectType, GraphQLID, GraphQLString } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ConferenceImageInput',
  fields: {
    id: {
      type: GraphQLID,
    },
    src: {
      type: GraphQLString,
    },
    alt: {
      type: GraphQLString,
    },
  },
});
