import { GraphQLID, GraphQLNonNull } from 'graphql';

import { ContextType } from '../../../helpers';
import { isAdminAuthorized } from '../../user/helpers';
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
  resolve: async (
    _: any,
    { id }: ArgsType,
    { apiToken, db }: ContextType,
    info: any,
  ): Promise<Conference> => {
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      if (id) {
        return db.mutation.deleteConference(
          {
            where: { id },
          },
          info,
        );
      }
    }

    throw new Error('Something went wrong');
  },
};
