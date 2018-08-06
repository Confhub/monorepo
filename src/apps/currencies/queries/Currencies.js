// @flow

import { GraphQLList } from 'graphql';

import GraphQLTag from '../outputs/Currency';
import { type ContextType } from '../../../helpers';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (_: mixed, args: any, ctx: ContextType, info: any) => {
    return ctx.db.query.currencies(info);
  },
};
