// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export type CallForPapers = {|
  id: string,
  url: string,
  endDate: string,
|};

export default new GraphQLObjectType({
  name: 'CallForPapers',
  fields: {
    id: {
      type: GraphQLID,
    },
    url: {
      type: GraphQLString,
    },
    endDate: {
      type: GraphQLString,
    },
  },
});
