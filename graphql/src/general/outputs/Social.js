// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export type Social = {|
  id: string,
  facebook: string,
  twitter: string,
|};

export default new GraphQLObjectType({
  name: 'Social',
  fields: {
    id: {
      type: GraphQLID,
    },
    facebook: {
      type: GraphQLString,
    },
    twitter: {
      type: GraphQLString,
    },
  },
});
