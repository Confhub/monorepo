import { GraphQLNonNull, GraphQLString } from 'graphql';
import tslug from 'tslug';

import { ContextType } from '../../../helpers';
import GraphQLTag, { Tag } from '../outputs/Tag';

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
    ctx: ContextType,
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
