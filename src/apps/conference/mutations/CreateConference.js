// @flow

import { GraphQLNonNull } from 'graphql';
import slugify from '@sindresorhus/slugify';

import GraphQLConference from '../outputs/Conference';
import GraphQLCreateConferenceInput from '../inputs/CreateConference';
import { type ContextType } from '../../../helpers';

type Conference = {
  name: string,
  description?: string,
  tags?: Tag[],
  image?: Image,
  url: string,
  startDate: string,
  endDate: string,
  location: Location,
  social: Social,
};

type Tag = {
  id?: string,
  name?: string,
  slug?: string,
};

type Image = {
  src?: string,
  alt?: string,
};

type Location = {
  venueName?: string,
  country: string,
  city: string,
  address: string,
  coordinates: Coordinates,
};

type Coordinates = {
  latitude: number,
  longitude: number,
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
      data: {
        name,
        description,
        tags,
        image,
        url,
        startDate,
        endDate,
        location,
        social,
      },
    }: argsType,
    ctx: ContextType,
    info: any,
  ) => {
    // TODO: add types, for example Promise<ConferenceType>
    const makeQuery = () => ({
      data: {
        name,
        description,
        tags: tags ? generateTags(tags) : null,
        image: image ? generateImage(image, name) : null,
        url,
        startDate,
        endDate,
        location: generateLocation(location),
        social: social ? generateSocial(social) : null,
      },
    });

    return ctx.db.mutation.createConference(makeQuery(), info);
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

const generateImage = ({ src, alt }: Image, name: $Values<Conference>) => ({
  create: {
    src: src || 'http://via.placeholder.com/350x150',
    alt: alt || name,
  },
});

const generateLocation = ({
  venueName,
  country,
  city,
  address,
  coordinates,
}: Location) => ({
  create: {
    venueName: venueName || '',
    country,
    city,
    address,
    coordinates: {
      create: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
    },
  },
});

const generateSocial = ({ facebook, twitter, instagram }: Social) => {
  return {
    create: {
      facebook,
      twitter,
      instagram,
    },
  };
};
