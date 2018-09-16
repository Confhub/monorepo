import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import {
  GraphQLCreateConferenceImageInput,
  GraphQLCreateConferenceLocationInput,
  GraphQLCreateConferenceSocialInput,
  GraphQLCreateConferenceTagInput,
} from './ConferenceShared';

export default new GraphQLInputObjectType({
  name: 'EditConferenceInput',
  fields: {
    name: {
      type: GraphQLString,
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
      type: GraphQLString,
    },
    startDate: {
      type: GraphQLDateTime,
    },
    endDate: {
      type: GraphQLDateTime,
    },
    location: {
      type: GraphQLCreateConferenceLocationInput,
    },
    social: {
      type: GraphQLCreateConferenceSocialInput,
    },
  },
});
