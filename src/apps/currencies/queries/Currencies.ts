import { GraphQLList } from 'graphql';

import { Currency } from '../../../generated/prisma';
import { Context } from '../../../utils';
import GraphQLTag from '../outputs/Currency';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (_: any, args: any, ctx: Context, info: any): Promise<Currency> => {
    return ctx.db.query.currencies(info);
  },
};
