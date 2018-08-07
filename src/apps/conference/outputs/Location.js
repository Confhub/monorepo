// @flow

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} from 'graphql';

const GraphQLCoordinates = new GraphQLObjectType({
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

export default new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: {
      type: GraphQLID,
    },
    venueName: {
      type: GraphQLString,
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
