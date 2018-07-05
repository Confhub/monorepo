// @flow

import { forwardTo } from 'prisma-binding';

export default {
  Query: {
    conference: forwardTo('db'),
    conferences: forwardTo('db'),
    conferencesConnection: forwardTo('db'),
  },
  Mutation: {
    createConference: forwardTo('db'),
    updateConference: forwardTo('db'),
    deleteConference: forwardTo('db'),
  },
};
