// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

import GraphQLCoordinates, { type Coordinates } from './Coordinates';

export type Location = {|
  id: string,
  country: string,
  city: string,
  address: string,
  coordinates: Coordinates,
|};

export default new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: {
      type: GraphQLID,
    },
    country: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    coordinates: {
      type: GraphQLCoordinates,
    },
  },
});
