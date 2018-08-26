import { GraphQLObjectType, GraphQLString } from 'graphql';

export interface Social {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export default new GraphQLObjectType({
  name: 'Social',
  fields: {
    facebook: {
      type: GraphQLString,
      resolve: ({ facebook }: Social): string => facebook,
    },
    twitter: {
      type: GraphQLString,
      resolve: ({ twitter }: Social): string => twitter,
    },
    instagram: {
      type: GraphQLString,
      resolve: ({ instagram }: Social): string => instagram,
    },
  },
});
