import { GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { Currency } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
import GraphQLCurrency from '../outputs/Currency';

interface ArgsType {
  name: string;
}

export default {
  type: GraphQLCurrency,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _: any,
    { name }: ArgsType,
    { apiToken, db }: Context,
    info: any,
  ): Promise<Currency> => {
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      return db.mutation.createCurrency(
        {
          data: {
            name,
            value: tslug(name, { decamelize: false }),
          },
        },
        info,
      );
    }

    throw new Error('You must have moderator rights');
  },
};
