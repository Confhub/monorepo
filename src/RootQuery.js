// @flow

import { GraphQLObjectType } from 'graphql';

import PublishedConferences from './apps/conference/queries/PublishedConferences';
import UnpublishedConferences from './apps/conference/queries/UnpublishedConferences';
import FilteredConferences from './apps/conference/queries/FilteredConferences';
import Tags from './apps/tags/queries/Tags';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    publishedConferences: PublishedConferences,
    unpublishedConferences: UnpublishedConferences,
    filteredConferences: FilteredConferences,
    tags: Tags,
  },
});
