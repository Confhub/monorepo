// @flow

import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

const GraphQLCreateConferenceTagInput = new GraphQLInputObjectType({
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

const GraphQLCreateConferenceImageInput = new GraphQLInputObjectType({
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

const GraphQLCreateConferenceSocialInput = new GraphQLInputObjectType({
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

export default new GraphQLInputObjectType({
  name: 'CreateConferenceInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    tags: {
      type: new GraphQLList(GraphQLCreateConferenceTagInput),
    },
    image: {
      type: GraphQLCreateConferenceImageInput,
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDateTime),
    },
    social: {
      type: GraphQLCreateConferenceSocialInput,
    },
  },
});
