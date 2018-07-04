// @flow

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import GraphQLTopic, { type Topic } from './Topic';

export type Speaker = {|
  id: string,
  email: string,
  createdAt: string,
  password: string,
  name: string,
  topics: Topic[],
|};

export default new GraphQLObjectType({
  name: 'Speaker',
  fields: {
    id: {
      type: GraphQLID,
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
    topics: {
      type: new GraphQLList(GraphQLTopic),
    },
  },
});
