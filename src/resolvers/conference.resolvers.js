// @flow

import { forwardTo } from 'prisma-binding';

import type { ContextType } from '../helpers';

type conferencesFilteredArgs = {
  tags: string[],
};

type publishConferenceArgs = {
  id: string,
};

type createConference = {
  data: {
    name: string,
    description?: string,
    image?: {
      id?: string,
      src?: string,
      alt?: string,
    },
  },
};

export default {
  Query: {
    conference: forwardTo('db'),
    conferences: forwardTo('db'),
    conferencesConnection: forwardTo('db'),
    conferencesFiltered: (
      _: any,
      { tags, published }: conferencesFilteredArgs,
      ctx: ContextType,
      info: any,
    ) => {
      const makeQuery = extra => ({
        where: {
          publishStatus: published ? 'PUBLISHED' : 'DRAFT',
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
    createConference: (
      _: any,
      { data: { name, description, image } }: publishConferenceArgs,
      ctx: ContextType,
      info: any,
    ) => {
      const makeQuery = () => ({
        data: {
          name,
          description,
          image: (() => {
            if (!image) {
              return null;
            }

            if (image.id) {
              return {
                connect: {
                  id: image.id,
                },
              };
            }

            return {
              create: {
                src: image.src || "http://via.placeholder.com/350x150",
                alt: image.alt || name,
              },
            };
          })(),
        },
      });

      console.log(makeQuery());

      return ctx.db.mutation.createConference(makeQuery(), info);
    },
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
