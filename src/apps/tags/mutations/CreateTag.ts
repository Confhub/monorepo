import { GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { ContextType } from '../../../helpers';
import GraphQLTag from '../outputs/Tag';

interface ArgsType {
  name: string;
}

export default {
  type: GraphQLTag,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_: any, { name }: ArgsType, ctx: ContextType, info: any) => {
    // TODO: add return types
    const makeQuery = () => ({
      data: {
        name,
        slug: tslug(name, { decamelize: true }),
      },
    });

    return ctx.db.mutation.createTag(makeQuery(), info);
  },
};
