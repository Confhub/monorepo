// @flow

import { forwardTo } from 'prisma-binding';

export default {
  Query: {
    conference: forwardTo('db'),
    conferences: forwardTo('db'),
    conferencesConnection: forwardTo('db'),
    tags: forwardTo('db'),
    conferencesFiltered: async (_, args, ctx, info) => {
      const tags = args.tags;
      const makeQuery = extra => ({
        where: {
          publishStatus: 'PUBLISHED',
          ...extra,
        },
      });

      if (tags && tags.length) {
        return ctx.db.query.conferences(
          makeQuery({ tag_some: { name_in: tags } }),
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
    createTag: forwardTo('db'),
    updateTag: forwardTo('db'),
    deleteTag: forwardTo('db'),
  },
};
