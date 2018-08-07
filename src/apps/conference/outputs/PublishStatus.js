// @flow

import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'PublishStatus',
  values: {
    DRAFT: {
      value: 'DRAFT',
    },
    PUBLISHED: {
      value: 'PUBLISHED',
    },
  },
});
