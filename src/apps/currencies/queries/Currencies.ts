import { GraphQLList } from 'graphql';

import { ContextType } from '../../../helpers';
import GraphQLTag from '../outputs/Currency';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (_: any, args: any, ctx: ContextType, info: any) => {
    // TODO: add return types
    return ctx.db.query.currencies(info);
  },
};
