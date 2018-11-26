import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const GraphQLConferenceCoordinatesInput = new GraphQLInputObjectType({
  name: 'ConferenceCoordinatesInput',
  fields: {
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
});

export default new GraphQLInputObjectType({
  name: 'ConferenceLocationInput',
  fields: {
    venueName: {
      type: GraphQLString,
    },
    country: {
      type: new GraphQLNonNull(GraphQLString),
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: GraphQLString,
    },
    coordinates: {
      type: new GraphQLNonNull(GraphQLConferenceCoordinatesInput),
    },
  },
});
