import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLDateTime } from "graphql-iso-date";
import GraphQLCurrency from "../../currencies/outputs/Currency";

const Price = new GraphQLObjectType({
  name: 'ConferencePrice',
  fields: {
    amount: {
      type: GraphQLString,
    },
    expiration: {
      type: GraphQLDateTime,
    },
    currency: {
      type: GraphQLCurrency,
    },
  },
});


export default new GraphQLObjectType({
  name: 'ConferencePrices',
  fields: {
    regular: {
      type: Price,
    },
    earlyBird: {
      type: Price,
    },
    lateBird: {
      type: Price,
    },
  },
});
