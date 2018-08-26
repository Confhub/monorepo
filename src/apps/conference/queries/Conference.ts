import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Conference } from '../../../generated/prisma';
import { Context } from '../../../helpers';
import GraphQLConference from '../outputs/Conference';

interface ArgsType {
  id: string;
}

export default {
  type: GraphQLConference,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (
    _: any,
    { id }: ArgsType,
    ctx: Context,
    info: any,
  ): Promise<Conference> => {
    return ctx.db.query.conference(
      {
        where: { id },
      },
      info,
    );
  },
};
