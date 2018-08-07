// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';

import GraphQLConference from '../outputs/Conference';
import { type ContextType } from '../../../helpers';

type argsType = {
  id: string,
};

export default {
  type: GraphQLConference,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_: mixed, { id }: argsType, ctx: ContextType, info: any) => {
    // TODO: add return types
    const makeQuery = () => ({
      where: { id },
    });

    return ctx.db.query.conference(makeQuery(), info);
  },
};
