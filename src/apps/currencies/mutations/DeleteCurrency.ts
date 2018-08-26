import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Currency } from '../../../generated/prisma';
import { ContextType } from '../../../helpers';
import { isAdminAuthorized } from '../../user/helpers';
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
    { apiToken, db }: ContextType,
    info: any,
  ): Promise<Currency> => {
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      if (id) {
        return db.mutation.deleteCurrency(
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
