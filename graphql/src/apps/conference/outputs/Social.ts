import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Social',
  fields: {
    facebook: {
      type: GraphQLString,
      resolve: ({ facebook }: any): string => facebook,
    },
    twitter: {
      type: GraphQLString,
      resolve: ({ twitter }: any): string => twitter,
    },
    instagram: {
      type: GraphQLString,
      resolve: ({ instagram }: any): string => instagram,
    },
  },
});
