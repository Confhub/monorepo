import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';

import { Context } from '../../utils';
import GraphQLTag from '../outputs/Tag';

interface Args {
  id: string;
  name: string;
}

export default {
  type: GraphQLTag,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_: any, { id, name }: Args | any, ctx: Context) =>
    ctx.prisma.updateTag({
      where: { id },
      data: {
        name,
        slug: name,
      },
    }),
};
