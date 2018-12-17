import { GraphQLID, GraphQLNonNull } from 'graphql';

import { ConferencePromise } from '../../../generated/prisma-client';
import { Context } from '../../../types';
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
  resolve: (parent: any, { id }: Args, ctx: Context): ConferencePromise => {
    return ctx.prisma.conference({ id });
  },
};
