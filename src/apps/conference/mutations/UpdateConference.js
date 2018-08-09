// @flow

import { GraphQLNonNull } from 'graphql';
import slugify from '@sindresorhus/slugify';

import GraphQLConference from '../outputs/Conference';
import GraphQLCreateConferenceInput from '../inputs/CreateConference';
import { isAdminAuthorized } from '../../user/helpers';
import { type ContextType } from '../../../helpers';

type Conference = {
  name: string,
  description?: string,
  tags?: Tag[],
  image?: Image,
  url: string,
  social: Social,
  startDate: string,
  endDate: string,
};

type Tag = {
  id?: string,
  name?: string,
  slug?: string,
};

type Image = {
  id?: string,
  src?: string,
  alt?: string,
};

type Social = {
  facebook?: string,
  twitter?: string,
  instagram?: string,
};

type argsType = {
  data: Conference,
};

export default {
  type: GraphQLConference,
  args: {
    data: {
      type: new GraphQLNonNull(GraphQLCreateConferenceInput),
    },
  },
  resolve: async (
    _: mixed,
    {
      data: { name, description, tags, image, url, social, startDate, endDate },
    }: argsType,
    { apiToken, db }: ContextType,
    info: any,
  ) => {
    // TODO: add types, for example Promise<ConferenceType>
    const { isAdmin } = await isAdminAuthorized(apiToken, db);

    if (isAdmin) {
      const makeQuery = () => ({
        data: {
          name,
          description,
          tags: tags ? generateTags(tags) : null,
          image: image ? generateImage(image, name) : null,
          url,
          social: social ? generateSocial(social) : null,
          startDate,
          endDate,
        },
      });

      return db.mutation.createConference(makeQuery(), info);
    }

    throw new Error('Something went wrong');
  },
};

const generateTags = (tags: Tag[]) => {
  let connect = [];
  let create = [];

  tags.map(tag => {
    if (tag.id) {
      return connect.push({
        id: tag.id,
      });
    }

    return create.push({
      name: tag.name,
      slug: slugify(tag.name),
    });
  });

  return {
    connect,
    create,
  };
};

const generateImage = (image: Image, name: $Values<Conference>) => {
  if (image.id) {
    return {
      connect: {
        id: image.id,
      },
    };
  }

  return {
    create: {
      src: image.src || 'http://via.placeholder.com/350x150',
      alt: image.alt || name,
    },
  };
};

const generateSocial = (social: Social) => {
  return {
    create: {
      facebook: social.facebook || null,
      twitter: social.twitter || null,
      instagram: social.instagram || null,
    },
  };
};
