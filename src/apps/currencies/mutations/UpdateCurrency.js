// @flow

import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import slugify from '@sindresorhus/slugify';

import GraphQLCurrency from '../outputs/Currency';
import { isAdminAuthorized } from '../../user/helpers';
import { type ContextType } from '../../../helpers';

type argsType = {
  id: string,
  name: string,
};

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
    _: mixed,
    { id, name }: argsType,
    { apiToken, db }: ContextType,
    info: any,
  ) => {
    // TODO: add return types
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      const makeQuery = () => ({
        where: { id },
        data: {
          name,
          value: slugify(name),
        },
      });

      return db.mutation.updateCurrency(makeQuery(), info);
    }

    throw new Error('Something went wrong');
  },
};
