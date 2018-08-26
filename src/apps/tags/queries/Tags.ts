import { GraphQLList } from 'graphql';

import { Tag } from '../../../generated/prisma';
import { Context } from '../../../helpers';
import GraphQLTag from '../outputs/Tag';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (_: any, args: any, ctx: Context, info: any): Promise<Tag> => {
    return ctx.db.query.tags(info);
  },
};
