// @flow

import { GraphQLObjectType } from 'graphql';

import User from './apps/user/queries/User';
import Conference from './apps/conference/queries/Conference';
import PublishedConferences from './apps/conference/queries/PublishedConferences';
import UnpublishedConferences from './apps/conference/queries/UnpublishedConferences';
import FilteredConferences from './apps/conference/queries/FilteredConferences';
import Tags from './apps/tags/queries/Tags';
import Currencies from './apps/currencies/queries/Currencies';

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
