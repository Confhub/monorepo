import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { Tag } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
import GraphQLTag from '../outputs/Tag';

interface ArgsType {
  id: string;
  name: string;
}

export default {
  type: GraphQLTag,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _: any,
    { id, name }: ArgsType,
    { apiToken, db }: Context,
    info: any,
  ): Promise<Tag> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      return db.mutation.updateTag(
        {
          where: { id },
          data: {
            name,
            slug: tslug(name, { decamelize: true }),
          },
        },
        info,
      );
    }

    throw new Error('You must have moderator rights');
  },
};
