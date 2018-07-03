// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

import GraphQLSpeaker, { type Speaker } from './Speaker';
import GraphQLConference, { type Conference } from './Conference';

export type Topic = {|
  id: string,
  title: string,
  description: string,
  conference: Conference,
  speaker: Speaker,
|};

export default new GraphQLObjectType({
  name: 'Topic',
  fields: {
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    /* conference: {
      type: GraphQLConference,
    },*/
    /* speaker: {
      type: GraphQLSpeaker,
    },*/
  },
});
