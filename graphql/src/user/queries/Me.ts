import { User } from '../../generated/prisma-client';
import { Context } from '../../utils';
import GraphQLUser from '../outputs/User';

export default {
  type: GraphQLUser,
  resolve: (_: any, __: any, ctx: Context): Promise<User> =>
    ctx.prisma.user({ id: ctx.user.id }),
};
