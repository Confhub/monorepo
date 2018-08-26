import { GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { Tag } from '../../../generated/prisma';
import { Context } from '../../../utils';
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
  resolve: async (
    _: any,
    { name }: ArgsType,
    ctx: Context,
    info: any,
  ): Promise<Tag> => {
    return ctx.db.mutation.createTag(
      {
        data: {
          name,
          slug: tslug(name, { decamelize: true }),
        },
      },
      info,
    );
  },
};
