// @flow

import { forwardTo } from 'prisma-binding';

export default {
  Query: {
    tags: forwardTo('db'),
  },
  Mutation: {
    createTag: forwardTo('db'),
    updateTag: forwardTo('db'),
    deleteTag: forwardTo('db'),
  },
};
