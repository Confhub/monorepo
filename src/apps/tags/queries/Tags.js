// @flow

import { GraphQLList } from 'graphql';

import GraphQLTag from '../outputs/Tag';
import { type ContextType } from '../../../helpers';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (_: mixed, args: any, ctx: ContextType, info: any) => {
    // TODO: add return types
    return ctx.db.query.tags(info);
  },
};
