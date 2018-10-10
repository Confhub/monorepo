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
  GraphQLConferencePricesInput,
  GraphQLCreateConferenceImageInput,
  GraphQLCreateConferenceLocationInput,
  GraphQLCreateConferenceSocialInput,
  GraphQLCreateConferenceTagInput,
} from './ConferenceShared';

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
    location: {
      type: new GraphQLNonNull(GraphQLCreateConferenceLocationInput),
    },
    social: {
      type: GraphQLCreateConferenceSocialInput,
    },
    price: {
      type: GraphQLConferencePricesInput,
    },
  },
});
