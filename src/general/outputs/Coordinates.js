// @flow

import { GraphQLObjectType, GraphQLID, GraphQLFloat } from 'graphql';

export type Coordinates = {|
  id: string,
  latitude: number,
  longitude: number,
|};

export default new GraphQLObjectType({
  name: 'Coordinates',
  fields: {
    id: {
      type: GraphQLID,
    },
    latitude: {
      type: GraphQLFloat,
    },
    longitude: {
      type: GraphQLFloat,
    },
  },
});
