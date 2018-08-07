// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';
import slugify from '@sindresorhus/slugify';

import GraphQLTag from '../outputs/Tag';
import { type ContextType } from '../../../helpers';

type argsType = {
  name: string,
};

export default {
  type: GraphQLTag,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _: mixed,
    { name }: argsType,
    ctx: ContextType,
    info: any,
  ) => {
    // TODO: add return types
    const makeQuery = () => ({
      data: {
        name: name,
        slug: slugify(name),
      },
    });

    return ctx.db.mutation.createTag(makeQuery(), info);
  },
};
