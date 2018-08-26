import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { Currency } from '../../../generated/prisma';
import { Context } from '../../../helpers';
import { isAdminAuthorized } from '../../user/helpers';
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
  ): Promise<Currency> => {
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
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

    throw new Error('Something went wrong');
  },
};
