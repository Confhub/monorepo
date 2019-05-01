import { GraphQLInputObjectType, GraphQLList, GraphQLString } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import GraphQLConferenceImageInput from './Image';
import GraphQLConferenceLocationInput from './Location';
import GraphQLConferenceTagInput from './Tag';

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
      type: new GraphQLList(GraphQLConferenceTagInput),
    },
    image: {
      type: GraphQLConferenceImageInput,
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
      type: GraphQLConferenceLocationInput,
    },
  },
});
