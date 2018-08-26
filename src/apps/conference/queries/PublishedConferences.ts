import { GraphQLList } from 'graphql';

import { ContextType } from '../../../helpers';
import GraphQLConference, { Conference } from '../outputs/Conference';

export default {
  type: new GraphQLList(GraphQLConference),
  resolve: (
    _: any,
    args: any,
    ctx: ContextType,
    info: any,
  ): Promise<Conference> => {
    return ctx.db.query.conferences(
      {
        where: {
          publishStatus: 'PUBLISHED',
        },
      },
      info,
    );
  },
};
