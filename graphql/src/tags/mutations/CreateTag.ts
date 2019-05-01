import { GraphQLNonNull, GraphQLString } from 'graphql';

import { Context } from '../../utils';
import GraphQLTag from '../outputs/Tag';

interface Args {
  name: string;
}

export default {
  type: GraphQLTag,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_: any, { name }: Args | any, ctx: Context) =>
    ctx.prisma.createTag({
      name,
      slug: name,
    }),
};
