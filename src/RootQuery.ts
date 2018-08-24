import { GraphQLObjectType } from 'graphql';

import Conference from './apps/conference/queries/Conference';
import FilteredConferences from './apps/conference/queries/FilteredConferences';
import PublishedConferences from './apps/conference/queries/PublishedConferences';
import UnpublishedConferences from './apps/conference/queries/UnpublishedConferences';
import Currencies from './apps/currencies/queries/Currencies';
import Tags from './apps/tags/queries/Tags';
import User from './apps/user/queries/User';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    user: User,
    conference: Conference,
    publishedConferences: PublishedConferences,
    unpublishedConferences: UnpublishedConferences,
    filteredConferences: FilteredConferences,
    tags: Tags,
    currencies: Currencies,
  },
});
