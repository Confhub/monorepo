import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
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
    address: {
      type: GraphQLString,
    },
    coordinates: {
      type: GraphQLCoordinates,
    },
  },
});
