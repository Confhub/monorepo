import { GraphQLObjectType } from 'graphql';

import Conference from './apps/conference/queries/Conference';
import Conferences from './apps/conference/queries/Conferences';
import Currencies from './apps/currencies/queries/Currencies';
import Tags from './apps/tags/queries/Tags';
import User from './apps/user/queries/User';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    user: User,
    conference: Conference,
    conferences: Conferences,
    tags: Tags,
    currencies: Currencies,
  },
});
