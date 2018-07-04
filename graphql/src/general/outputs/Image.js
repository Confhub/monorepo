// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export type Image = {|
  id: string,
  src: string,
  alt: string,
|};

export default new GraphQLObjectType({
  name: 'Image',
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
