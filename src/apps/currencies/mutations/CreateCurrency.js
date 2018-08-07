// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';
import slugify from '@sindresorhus/slugify';

import GraphQLCurrency from '../outputs/Currency';
import { type ContextType } from '../../../helpers';

type argsType = {
  name: string,
};

export default {
  type: GraphQLCurrency,
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
        name,
        value: slugify(name),
      },
    });

    return ctx.db.mutation.createCurrency(makeQuery(), info);
  },
};
