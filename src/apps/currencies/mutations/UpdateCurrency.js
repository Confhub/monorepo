// @flow

import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import GraphQLCurrency from '../outputs/Currency';
import { type ContextType } from '../../../helpers';

type argsType = {
  id: string,
  name: string,
};

export default {
  type: GraphQLCurrency,
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
      },
    });

    return ctx.db.mutation.updateCurrency(makeQuery(), info);
  },
};
