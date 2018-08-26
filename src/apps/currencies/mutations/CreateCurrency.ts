import { GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { Currency } from '../../../generated/prisma';
import { ContextType } from '../../../helpers';
import { isAdminAuthorized } from '../../user/helpers';
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
    { apiToken, db }: ContextType,
    info: any,
  ): Promise<Currency> => {
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
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

    throw new Error('Something went wrong');
  },
};
