import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { ContextType } from '../../../helpers';
import { isAdminAuthorized } from '../../user/helpers';
import GraphQLTag, { Tag } from '../outputs/Tag';

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
    { apiToken, db }: ContextType,
    info: any,
  ): Promise<Tag> => {
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
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

    throw new Error('Something went wrong');
  },
};
