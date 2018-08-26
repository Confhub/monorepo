import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export interface Image {
  id: string;
  src: string;
  alt?: string;
}

export default new GraphQLObjectType({
  name: 'Image',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Image): string => id,
    },
    src: {
      type: GraphQLString,
      resolve: ({ src }: Image): string => src,
    },
    alt: {
      type: GraphQLString,
      resolve: ({ alt }: Image): string => alt,
    },
  },
});
