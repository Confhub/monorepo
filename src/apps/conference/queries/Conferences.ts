import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { Conference, PUBLISH_STATUS } from '../../../generated/prisma';
import { Context } from '../../../utils';
import GraphQLConference from '../outputs/Conference';
import GraphQLPublishStatus from '../outputs/PublishStatus';

interface ArgsType {
  sortBy?: {
    publishStatus?: PUBLISH_STATUS;
    tags?: string[];
  };
  skip?: number;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

const GraphQLSearchConferenceInput = new GraphQLInputObjectType({
  name: 'SearchConferenceInput',
  fields: {
    publishStatus: {
      type: GraphQLPublishStatus,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
  },
});

export default {
  type: new GraphQLList(GraphQLConference),
  args: {
    sortBy: {
      type: GraphQLSearchConferenceInput,
    },
    skip: {
      type: GraphQLInt,
    },
    after: {
      type: GraphQLString,
    },
    before: {
      type: GraphQLString,
    },
    first: {
      type: GraphQLInt,
    },
    last: {
      type: GraphQLInt,
    },
  },
  resolve: (
    _: any,
    args: ArgsType,
    ctx: Context,
    info: any,
  ): Promise<Conference> => {
    const makeQuery = () => {
      if (args && args.sortBy) {
        const { publishStatus, tags } = args.sortBy;

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
