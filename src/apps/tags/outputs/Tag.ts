import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export default new GraphQLObjectType({
  name: 'Tag',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Tag): string => id,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: Tag): string => name,
    },
    slug: {
      type: GraphQLString,
      resolve: ({ slug }: Tag): string => slug,
    },
  },
});
