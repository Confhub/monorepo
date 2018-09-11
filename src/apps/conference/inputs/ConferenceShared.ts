import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export const GraphQLCreateConferenceTagInput = new GraphQLInputObjectType({
  name: 'CreateConferenceTagInput',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    slug: {
      type: GraphQLString,
    },
  },
});

export const GraphQLCreateConferenceImageInput = new GraphQLInputObjectType({
  name: 'CreateConferenceImageInput',
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

const GraphQLCreateConferenceCoordinatesInput = new GraphQLInputObjectType({
  name: 'CreateConferenceCoordinatesInput',
  fields: {
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
});

export const GraphQLCreateConferenceLocationInput = new GraphQLInputObjectType({
  name: 'CreateConferenceLocationInput',
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
      type: new GraphQLNonNull(GraphQLCreateConferenceCoordinatesInput),
    },
  },
});

export const GraphQLCreateConferenceSocialInput = new GraphQLInputObjectType({
  name: 'CreateConferenceSocialInput',
  fields: {
    facebook: {
      type: GraphQLString,
    },
    twitter: {
      type: GraphQLString,
    },
    instagram: {
      type: GraphQLString,
    },
  },
});
