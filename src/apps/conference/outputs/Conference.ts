import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

import { DateTime, PUBLISH_STATUS } from '../../../generated/prisma';
import GraphQLTag, { Tag } from '../../tags/outputs/Tag';
import GraphQLImage, { Image } from './Image';
import GraphQLLocation, { Location } from './Location';
import GraphQLPublishStatus from './PublishStatus';
import GraphQLSocial, { Social } from './Social';

export interface Conference {
  id: string;
  name: string;
  description?: string;
  tags?: Tag[];
  image?: Image;
  url: string;
  startDate: DateTime;
  endDate: DateTime;
  location: Location;
  social?: Social;
  publishStatus?: PUBLISH_STATUS;
}

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
      resolve: ({ tags }: Conference): Tag[] => tags,
    },
    image: {
      type: GraphQLImage,
      resolve: ({ image }: Conference): Image => image,
    },
    url: {
      type: GraphQLString,
      resolve: ({ url }: Conference): string => url,
    },
    startDate: {
      type: GraphQLDateTime,
      resolve: ({ startDate }: Conference): DateTime => startDate,
    },
    endDate: {
      type: GraphQLDateTime,
      resolve: ({ endDate }: Conference): DateTime => endDate,
    },
    location: {
      type: GraphQLLocation,
      resolve: ({ location }: Conference): Location => location,
    },
    social: {
      type: GraphQLSocial,
      resolve: ({ social }: Conference): Social => social,
    },
    publishStatus: {
      type: GraphQLPublishStatus,
      resolve: ({ publishStatus }: Conference): PUBLISH_STATUS => publishStatus,
    },
  },
});
