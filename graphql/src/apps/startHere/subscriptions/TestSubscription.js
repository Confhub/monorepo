// @flow

import GraphQLTest, { type Test } from '../outputs/Test';
import { DATA_UPDATED } from '../mutations/TestMutation';

import type { GraphqlContextType } from '../../../helpers';

export default {
  type: GraphQLTest,
  resolve: (payload: Test) => payload,
  subscribe: (root: any, args: any, { pubsub }: GraphqlContextType) =>
    pubsub.asyncIterator(DATA_UPDATED),
};
