import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import {
  Conference,
  DateTimeOutput,
  Image,
  PUBLISH_STATUS,
  Tag,
} from '../../generated/prisma-client';
import GraphQLTag from '../../tags/outputs/Tag';
import { Context } from '../../utils';
import GraphQLImage from './Image';
import GraphQLLocation from './Location';
import GraphQLPublishStatus from './PublishStatus';

export default new GraphQLObjectType({
  name: 'Conference',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({ id }: Conference): string => id,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: Conference): string => name,
    },
    description: {
      type: GraphQLString,
      resolve: ({ description }: Conference): string | null =>
        description || null,
    },
    tags: {
      type: new GraphQLList(new GraphQLNonNull(GraphQLTag)),
      resolve: ({ id }: Conference, _, ctx: Context): Tag[] =>
        ctx.prisma.conference({ id }).tags(),
    },
    image: {
      type: GraphQLImage,
      resolve: ({ id }: Conference, _, ctx: Context): Image =>
        ctx.prisma.conference({ id }).image(),
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: ({ url }: Conference): string => url,
    },
    startDate: {
      type: new GraphQLNonNull(GraphQLDateTime),
      resolve: ({ startDate }: Conference): DateTimeOutput => startDate,
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLDateTime),
      resolve: ({ endDate }: Conference): DateTimeOutput => endDate,
    },
    location: {
      type: new GraphQLNonNull(GraphQLLocation),
      resolve: ({ id }: Conference, _, ctx: Context): Location =>
        ctx.prisma.conference({ id }).location(),
    },
    publishStatus: {
      type: new GraphQLNonNull(GraphQLPublishStatus),
      resolve: ({ publishStatus }: Conference): PUBLISH_STATUS => publishStatus,
    },
  },
});
