import { GraphQLID, GraphQLNonNull } from 'graphql';

import { USER_ROLE } from '../../generated/prisma-client';
import { Context } from '../../utils';
import GraphQLUser from '../outputs/User';
import GraphQLUserRole from '../outputs/UserRole';

interface Args {
  id: string;
  newRole: USER_ROLE;
}

export default {
  type: GraphQLUser,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    newRole: {
      type: new GraphQLNonNull(GraphQLUserRole),
    },
  },
  resolve: async (_: any, { id, newRole }: Args | any, ctx: Context) =>
    ctx.prisma.updateUser({
      where: { id },
      data: {
        role: newRole,
      },
    }),
};
