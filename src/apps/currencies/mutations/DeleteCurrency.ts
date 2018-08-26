import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Currency } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
import GraphQLCurrency from '../outputs/Currency';

interface ArgsType {
  id: string;
}

export default {
  type: GraphQLCurrency,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (
    _: any,
    { id }: ArgsType,
    { apiToken, db }: Context,
    info: any,
  ): Promise<Currency> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      if (id) {
        return db.mutation.deleteCurrency(
          {
            where: { id },
          },
          info,
        );
      }
    }

    throw new Error('You must have moderator rights');
  },
};
