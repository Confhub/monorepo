import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export interface Currency {
  id: string;
  name: string;
}

export default new GraphQLObjectType({
  name: 'Currency',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Currency): string => id,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: Currency): string => name,
    },
  },
});
