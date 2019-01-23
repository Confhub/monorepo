import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import GraphQLRegion from '../outputs/Region';

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

export interface LocationInput {
  venueName?: string | null;
  countryCode: string;
  country: string;
  city: string;
  address: string | null;
  coordinates: Coordinates;
}

export default new GraphQLInputObjectType({
  name: 'ConferenceLocationInput',
  fields: {
    venueName: {
      type: GraphQLString,
    },
    // region: {
    //   type: new GraphQLNonNull(GraphQLRegion),
    // },
    country: {
      type: new GraphQLNonNull(GraphQLString),
    },
    countryCode: {
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
