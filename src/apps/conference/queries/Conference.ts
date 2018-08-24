import { GraphQLID, GraphQLNonNull } from 'graphql';

import { ContextType } from '../../../helpers';
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
  resolve: (_: any, { id }: ArgsType, ctx: ContextType, info: any) => {
    // TODO: add return types
    const makeQuery = () => ({
      where: { id },
    });

    return ctx.db.query.conference(makeQuery(), info);
  },
};
