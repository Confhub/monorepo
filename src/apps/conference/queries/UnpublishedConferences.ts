import { GraphQLList } from 'graphql';

import { Conference } from '../../../generated/prisma';
import { Context } from '../../../helpers';
import GraphQLConference from '../outputs/Conference';

export default {
  type: new GraphQLList(GraphQLConference),
  resolve: (
    _: any,
    args: any,
    ctx: Context,
    info: any,
  ): Promise<Conference> => {
    return ctx.db.query.conferences(
      {
        where: {
          publishStatus: 'DRAFT',
        },
      },
      info,
    );
  },
};
