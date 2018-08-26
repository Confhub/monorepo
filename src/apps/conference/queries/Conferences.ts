import { GraphQLList, GraphQLString } from 'graphql';

import { Conference, PUBLISH_STATUS } from '../../../generated/prisma';
import { Context } from '../../../utils';
import GraphQLConference from '../outputs/Conference';
import GraphQLPublishStatus from '../outputs/PublishStatus';

interface ArgsType {
  publishStatus: PUBLISH_STATUS;
  tags: string[];
}

export default {
  type: new GraphQLList(GraphQLConference),
  args: {
    publishStatus: {
      type: GraphQLPublishStatus,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
  },
  resolve: (
    _: any,
    args: ArgsType,
    ctx: Context,
    info: any,
  ): Promise<Conference> => {
    const makeQuery = () => {
      if (args) {
        const { publishStatus, tags } = args;

        return {
          where: {
            ...(publishStatus && { publishStatus }),
            ...(tags && tags.length && { tags_some: { slug_in: tags } }),
          },
        };
      }

      return null;
    };

    return ctx.db.query.conferences(makeQuery(), info);
  },
};
