import { GraphQLList } from 'graphql';

import { ContextType } from '../../../helpers';
import GraphQLTag, { Tag } from '../outputs/Tag';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (_: any, args: any, ctx: ContextType, info: any): Promise<Tag> => {
    return ctx.db.query.tags(info);
  },
};
