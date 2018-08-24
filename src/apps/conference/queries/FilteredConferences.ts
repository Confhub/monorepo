import { GraphQLBoolean, GraphQLList, GraphQLString } from 'graphql';

import { ContextType } from '../../../helpers';
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
    ctx: ContextType,
    info: any,
  ) => {
    // TODO: add return types
    const makeQuery = (extra?: object) => ({
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
