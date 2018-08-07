// @flow

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import GraphQLCoordinates, { type Coordinates } from './Coordinates';

export type Location = {|
  id: string,
  country: string,
  city: string,
  street: string,
  zip: number,
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
    street: {
      type: GraphQLString,
    },
    zip: {
      type: GraphQLInt,
    },
    coordinates: {
      type: GraphQLCoordinates,
    },
  },
});
