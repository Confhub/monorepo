// @flow

import { forwardTo } from 'prisma-binding';

import type { ContextType } from '../helpers';

type conferencesFilteredArgs = {
  tags: string[],
};

type publishConferenceArgs = {
  id: string,
};

export default {
  Query: {
    conference: forwardTo('db'),
    conferences: forwardTo('db'),
    conferencesConnection: forwardTo('db'),
    conferencesFiltered: (
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
          makeQuery({ tags_some: { id_in: tags } }),
          info,
        );
      }
      return ctx.db.query.conferences(makeQuery(), info);
    },
    publishedConferences: (_: any, args: any, ctx: ContextType, info: any) => {
      const makeQuery = extra => ({
        where: {
          publishStatus: 'PUBLISHED',
          ...extra,
        },
      });

      return ctx.db.query.conferences(makeQuery(), info);
    },
    unpublishedConferences: (
      _: any,
      args: any,
      ctx: ContextType,
      info: any,
    ) => {
      const makeQuery = extra => ({
        where: {
          publishStatus: 'DRAFT',
          ...extra,
        },
      });

      return ctx.db.query.conferences(makeQuery(), info);
    },
  },
  Mutation: {
    createConference: forwardTo('db'),
    deleteConference: forwardTo('db'),
    publishConference: (
      _: any,
      { id }: publishConferenceArgs,
      ctx: ContextType,
      info: any,
    ) => {
      const makeQuery = extra => ({
        where: { id },
        data: { publishStatus: 'PUBLISHED' },
        ...extra,
      });

      if (id) {
        return ctx.db.mutation.updateConference(makeQuery(), info);
      }
      throw new Error('Something went wrong');
    },
    updateConference: forwardTo('db'),
  },
};
