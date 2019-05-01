import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Context } from '../../utils';
import GraphQLConference from '../outputs/Conference';

interface Args {
  id: string;
}

export default {
  type: GraphQLConference,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_: any, { id }: Args | any, ctx: Context) =>
    ctx.prisma.conference({ id }),
};
