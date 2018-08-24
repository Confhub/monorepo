import { GraphQLID, GraphQLNonNull } from 'graphql';

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
  ) => {
    // TODO: add return types
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      const makeQuery = () => ({
        where: { id },
      });

      if (id) {
        return db.mutation.deleteCurrency(makeQuery(), info);
      }
    }

    throw new Error('Something went wrong');
  },
};
