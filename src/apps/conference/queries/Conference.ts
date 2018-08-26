import { GraphQLID, GraphQLNonNull } from 'graphql';

import { ContextType } from '../../../helpers';
import GraphQLConference, { Conference } from '../outputs/Conference';

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
    ctx: ContextType,
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
