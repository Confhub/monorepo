import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import GraphQLConferenceImageInput from './Image';
import GraphQLConferenceLocationInput from './Location';
import GraphQLConferenceTagInput from './Tag';

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
      type: new GraphQLList(GraphQLConferenceTagInput),
    },
    image: {
      type: GraphQLConferenceImageInput,
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
      type: new GraphQLNonNull(GraphQLConferenceLocationInput),
    },
  },
});
