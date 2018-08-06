// @flow

import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

import GraphQLConference from '../outputs/Conference';
import { type ContextType } from '../../../helpers';

type argsType = {
  tags: string[],
  published: boolean, // TODO: change to publishStatus ENUM type
};

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
    _: mixed,
    { tags, published }: argsType,
    ctx: ContextType,
    info: any,
  ) => {
    // TODO: add return types
    const makeQuery = extra => ({
      where: {
        publishStatus: published ? 'PUBLISHED' : 'DRAFT',
        ...extra,
      },
    });

    if (tags && tags.length) {
      return ctx.db.query.conferences(
        makeQuery({ tags_some: { slug_in: tags } }),
        info,
      );
    }
    return ctx.db.query.conferences(makeQuery(), info);
  },
};

// TODO: change name of the query to be more clear
