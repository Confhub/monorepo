import { GraphQLID, GraphQLNonNull } from 'graphql';

import { ContextType } from '../../../helpers';
import { isAdminAuthorized } from '../../user/helpers';
import GraphQLTag, { Tag } from '../outputs/Tag';

interface ArgsType {
  id: string;
}

export default {
  type: GraphQLTag,
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
  ): Promise<Tag> => {
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      if (id) {
        return db.mutation.deleteTag(
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
