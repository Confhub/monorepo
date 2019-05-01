import * as dayjs from 'dayjs';
import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { PUBLISH_STATUS, REGION } from '../../generated/prisma-client';
import { Context } from '../../utils';
import GraphQLConference from '../outputs/Conference';
import GraphQLPublishStatus from '../outputs/PublishStatus';
import GraphQLRegion from '../outputs/Region';

interface Args {
  sortBy?: {
    publishStatus?: PUBLISH_STATUS;
    tags?: string[];
    regions?: REGION[];
    interval?: number;
  };
}

const GraphQLConferenceSortByInput = new GraphQLInputObjectType({
  name: 'ConferenceSortByInput',
  fields: {
    publishStatus: {
      type: GraphQLPublishStatus,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    interval: {
      type: GraphQLInt,
    },
    regions: {
      type: new GraphQLList(GraphQLRegion),
    },
  },
});

export default {
  type: new GraphQLList(GraphQLConference),
  args: {
    sortBy: {
      type: GraphQLConferenceSortByInput,
    },
  },
  resolve: (_: any, args: Args | any, ctx: Context) => {
    if (args && args.sortBy) {
      const { publishStatus, tags, interval, regions } = args.sortBy;

      const query = args &&
        args.sortBy && {
          where: {
            ...(publishStatus && { publishStatus }),
            ...(tags && tags.length && { tags_some: { slug_in: tags } }),
            ...(interval && {
              startDate_lte: dayjs()
                .add(interval, 'month')
                .format(),
            }),
            ...(regions &&
              regions.length && {
                location: { region_in: regions },
              }),
          },
        };

      return ctx.prisma.conferences(query);
    }

    return ctx.prisma.conferences();
  },
};
