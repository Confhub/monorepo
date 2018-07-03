// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

import GraphQLLocation, { type Location } from './Location';

export type Place = {|
  id: string,
  venueType: string,
  name: string,
  location: Location,
|};

export default new GraphQLObjectType({
  name: 'Place',
  fields: {
    id: {
      type: GraphQLID,
    },
    venueType: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLLocation,
    },
  },
});
