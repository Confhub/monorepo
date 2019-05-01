import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Context } from '../../utils';
import GraphQLTag from '../outputs/Tag';

interface Args {
  id: string;
}

export default {
  type: GraphQLTag,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_: any, { id }: Args | any, ctx: Context) =>
    ctx.prisma.deleteTag({
      id,
    }),
};
