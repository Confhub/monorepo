// @flow

import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import GraphQLImage, { type Image } from './Image';
import GraphQLPrice, { type Price } from './Price';
import GraphQLSpeaker, { type Speaker } from './Speaker';
import GraphQLTopic, { type Topic } from './Topic';
import GraphQLPlace, { type Place } from './Place';
import GraphQLCallForPapers, { type CallForPapers } from './CallForPapers';
import GraphQLSocial, { type Social } from './Social';

export type Conference = {|
  id: string,
  name: string,
  description: string,
  sector: string,
  url: string,
  image: Image,
  startDate: string,
  endDate: string,
  price: Price,
  speakers: Speaker[],
  topics: Topic[],
  place: Place,
  callForPapers: CallForPapers,
  social: Social,
|};

export default new GraphQLObjectType({
  name: 'Conference',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLImage,
    },
    startDate: {
      type: GraphQLString,
    },
    endDate: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLPrice,
    },
    speakers: {
      type: new GraphQLList(GraphQLSpeaker),
    },
    topics: {
      type: new GraphQLList(GraphQLTopic),
    },
    place: {
      type: GraphQLPlace,
    },
    callForPapers: {
      type: GraphQLCallForPapers,
    },
    social: {
      type: GraphQLSocial,
    },
  },
});
