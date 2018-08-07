// @flow

import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import slugify from '@sindresorhus/slugify';

import GraphQLTag from '../outputs/Tag';
import { type ContextType } from '../../../helpers';

type argsType = {
  id: string,
  name: string,
};

export default {
  type: GraphQLTag,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _: mixed,
    { id, name }: argsType,
    ctx: ContextType,
    info: any,
  ) => {
    // TODO: add return types
    const makeQuery = () => ({
      where: { id },
      data: {
        name: name,
        slug: slugify(name),
      },
    });

    return ctx.db.mutation.updateTag(makeQuery(), info);
  },
};
