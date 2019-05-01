import { GraphQLList } from 'graphql';

import { Context } from '../../utils';
import GraphQLTag from '../outputs/Tag';

export default {
  type: new GraphQLList(GraphQLTag),
  resolve: (_: any, __: any, ctx: Context) => ctx.prisma.tags(),
};
