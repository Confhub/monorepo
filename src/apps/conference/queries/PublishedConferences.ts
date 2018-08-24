import { GraphQLList } from 'graphql';

import { ContextType } from '../../../helpers';
import GraphQLConference from '../outputs/Conference';

export default {
  type: new GraphQLList(GraphQLConference),
  resolve: (_: any, args: any, ctx: ContextType, info: any) => {
    // TODO: add return types
    const makeQuery = () => ({
      where: {
        publishStatus: 'PUBLISHED',
      },
    });

    return ctx.db.query.conferences(makeQuery(), info);
  },
};
