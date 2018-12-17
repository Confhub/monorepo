import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import {
  Conference,
  DateTimeOutput,
  Image,
  Location,
  Price,
  PUBLISH_STATUS,
  Social,
  Tag,
} from '../../../generated/prisma-client';
import GraphQLTag from '../../tags/outputs/Tag';
import GraphQLImage from './Image';
import GraphQLLocation from './Location';
import GraphQLPrice from './Price';
import GraphQLPublishStatus from './PublishStatus';
import GraphQLSocial from './Social';

// export interface Conference {
//   id: string;
// }

export default new GraphQLObjectType({
  name: 'Conference',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Conference): string => id,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }: Conference): string => name,
    },
    description: {
      type: GraphQLString,
      resolve: ({ description }: Conference): string => description,
    },
    tags: {
      type: new GraphQLList(GraphQLTag),
      // @ts-ignore
      resolve: ({ tags }: Conference): Tag[] => tags,
    },
    image: {
      type: GraphQLImage,
      // @ts-ignore
      resolve: ({ image }: Conference): Image => image,
    },
    url: {
      type: GraphQLString,
      resolve: ({ url }: Conference): string => url,
    },
    startDate: {
      type: GraphQLDateTime,
      resolve: ({ startDate }: Conference): DateTimeOutput => startDate,
    },
    endDate: {
      type: GraphQLDateTime,
      resolve: ({ endDate }: Conference): DateTimeOutput => endDate,
    },
    // location: {
    //   type: GraphQLLocation,
    //   resolve: ({ location }: Conference): Location => location,
    // },
    social: {
      type: GraphQLSocial,
      // @ts-ignore
      resolve: ({ social }: Conference): Social => social,
    },
    publishStatus: {
      type: GraphQLPublishStatus,
      resolve: ({ publishStatus }: Conference): PUBLISH_STATUS => publishStatus,
    },
    prices: {
      type: new GraphQLList(GraphQLPrice),
      // @ts-ignore
      resolve: ({ prices }: Conference): Price[] => prices,
    },
  },
});
