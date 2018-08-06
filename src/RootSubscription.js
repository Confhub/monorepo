// @flow

import { GraphQLObjectType } from 'graphql';

import TestSubscription from './apps/conference/subscriptions/TestSubscription';

export default new GraphQLObjectType({
  name: 'RootSubscription',
  description: 'Root Subscription',
  fields: {
    testSubscription: TestSubscription,
  },
});
