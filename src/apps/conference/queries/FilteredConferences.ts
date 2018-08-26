import { GraphQLBoolean, GraphQLList, GraphQLString } from 'graphql';

import { Conference } from '../../../generated/prisma';
import { Context } from '../../../utils';
import GraphQLConference from '../outputs/Conference';

interface ArgsType {
  tags: string[];
  published: boolean; // TODO: change to publishStatus ENUM type
}

export default {
  type: new GraphQLList(GraphQLConference),
  args: {
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    published: {
      type: GraphQLBoolean,
    },
  },
  resolve: (
    _: any,
    { tags, published }: ArgsType,
    ctx: Context,
    info: any,
  ): Promise<Conference> => {
    if (tags && tags.length) {
      return ctx.db.query.conferences({
        where: {
          publishStatus: published ? 'PUBLISHED' : 'DRAFT',
          tags_some: { slug_in: tags },
        },
      });
    }
    return ctx.db.query.conferences(
      {
        where: {
          publishStatus: published ? 'PUBLISHED' : 'DRAFT',
        },
      },
      info,
    );
  },
};

// TODO: change name of the query to be more clear
