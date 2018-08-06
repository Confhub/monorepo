// @flow

import { GraphQLNonNull, GraphQLID } from 'graphql';

import GraphQLCurrency from '../outputs/Currency';
import { type ContextType } from '../../../helpers';

type argsType = {
  id: string,
};

export default {
  type: GraphQLCurrency,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_: mixed, { id }: argsType, ctx: ContextType, info: any) => {
    // TODO: add return types
    const makeQuery = () => ({
      where: { id },
    });

    if (id) {
      return ctx.db.mutation.deleteCurrency(makeQuery(), info);
    }
    throw new Error('Something went wrong');
  },
};
