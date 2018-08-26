import { GraphQLList } from 'graphql';

import { Currency } from '../../../generated/prisma';
import { ContextType } from '../../../helpers';
import GraphQLTag from '../outputs/Currency';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (
    _: any,
    args: any,
    ctx: ContextType,
    info: any,
  ): Promise<Currency> => {
    return ctx.db.query.currencies(info);
  },
};
