import { GraphQLInputObjectType, GraphQLID, GraphQLString } from "graphql";
import { Currency } from '../../../generated/prisma';

export default new GraphQLInputObjectType({
  name: 'CurrencyInput',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    value: {
      type: GraphQLString,
    },
  },
});
