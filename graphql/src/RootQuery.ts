import { GraphQLObjectType } from 'graphql';

import Conference from './conference/queries/Conference';
import Conferences from './conference/queries/Conferences';
import Tags from './tags/queries/Tags';
import Me from './user/queries/Me';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    conference: Conference,
    conferences: Conferences,
    tags: Tags,
    me: Me,
  },
});
