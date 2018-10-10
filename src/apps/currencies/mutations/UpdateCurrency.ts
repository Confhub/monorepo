import { AuthenticationError } from 'apollo-server';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { Currency } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
import GraphQLCurrency from '../outputs/Currency';

interface ArgsType {
  id: string;
  name: string;
}

export default {
  type: GraphQLCurrency,
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
  ): Promise<Currency | null> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      return db.mutation.updateCurrency(
        {
          where: { id },
          data: {
            name,
            value: tslug(name, { decamelize: false }),
          },
        },
        info,
      );
    }

    throw new AuthenticationError('You must have moderator rights');
  },
};
