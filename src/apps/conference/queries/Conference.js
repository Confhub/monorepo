// @flow

import { GraphQLList } from 'graphql';

import GraphQLConference from '../outputs/Conference';
import { type ContextType } from '../../../helpers';

export default {
  type: new GraphQLList(GraphQLConference),
  resolve: (_: mixed, args: any, ctx: ContextType, info: any) => {
    // TODO: add return types
    const makeQuery = extra => ({
      where: {
        publishStatus: 'PUBLISHED',
        ...extra,
      },
    });

    return ctx.db.query.conferences(makeQuery(), info);
  },
};
