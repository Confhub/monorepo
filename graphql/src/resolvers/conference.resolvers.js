// @flow

import { forwardTo } from 'prisma-binding';

import type { ContextType } from '../helpers';

type conferencesFilteredArgs = {
  tags: string[],
};

export default {
  Query: {
    conference: forwardTo('db'),
    conferences: forwardTo('db'),
    conferencesConnection: forwardTo('db'),
    conferencesFiltered: async (
      _: any,
      { tags }: conferencesFilteredArgs,
      ctx: ContextType,
      info: any,
    ) => {
      const makeQuery = extra => ({
        where: {
          publishStatus: 'PUBLISHED',
          ...extra,
        },
      });

      if (tags && tags.length) {
        return ctx.db.query.conferences(
          makeQuery({ tags_some: { slug_in: tags } }),
          info,
        );
      }
      return ctx.db.query.conferences(makeQuery(), info);
    },
  },
  Mutation: {
    createConference: forwardTo('db'),
    updateConference: forwardTo('db'),
    deleteConference: forwardTo('db'),
  },
};
