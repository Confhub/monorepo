// @flow

import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import GraphQLImage from './Image';
import GraphQLTag from '../../tags/outputs/Tag';
import GraphQLSocial from './Social';
import GraphQLPublishStatus from './PublishStatus';

export default new GraphQLObjectType({
  name: 'Conference',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    tags: {
      type: new GraphQLList(GraphQLTag),
    },
    image: {
      type: GraphQLImage,
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
    social: {
      type: GraphQLSocial,
    },
    publishStatus: {
      type: GraphQLPublishStatus,
    },
  },
});
