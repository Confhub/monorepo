// @flow

import { GraphQLObjectType } from 'graphql';

import User from './apps/startHere/queries/User';
import Conferences from './general/queries/Conferences';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    users: User,
    conferences: Conferences,
  },
});
