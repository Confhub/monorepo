import { Context } from '../../utils';
import GraphQLUser from '../outputs/User';

export default {
  type: GraphQLUser,
  resolve: (_: any, __: any, ctx: Context) =>
    ctx.prisma.user({ id: ctx.user.id }),
};
