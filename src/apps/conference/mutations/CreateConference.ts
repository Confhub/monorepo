import { GraphQLNonNull } from 'graphql';
import tslug from 'tslug';

import {
  ImageCreateOneInput,
  LocationCreateOneInput,
  SocialCreateOneInput,
  TagCreateManyInput,
} from '../../../generated/prisma';
import { ContextType } from '../../../helpers';
import { Tag } from '../../tags/outputs/Tag';
import GraphQLCreateConferenceInput from '../inputs/CreateConference';
import GraphQLConference, { Conference } from '../outputs/Conference';
import { Image } from '../outputs/Image';
import { Location } from '../outputs/Location';
import { Social } from '../outputs/Social';

interface ArgsType {
  data: Conference;
}

export default {
  type: GraphQLConference,
  args: {
    data: {
      type: new GraphQLNonNull(GraphQLCreateConferenceInput),
    },
  },
  resolve: async (
    _: any,
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
    }: ArgsType,
    ctx: ContextType,
    info: any,
  ) => {
    return ctx.db.mutation.createConference(
      {
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
      },
      info,
    );
  },
};

const generateTags = (tags: Tag[]): TagCreateManyInput => {
  const connect = [];
  const create = [];

  tags.map(tag => {
    if (tag.id) {
      return connect.push({
        id: tag.id,
      });
    }

    return create.push({
      name: tag.name,
      slug: tslug(tag.name, { decamelize: false }),
    });
  });

  return {
    connect,
    create,
  };
};

const generateImage = (
  { src, alt }: Image,
  name: string,
): ImageCreateOneInput => ({
  create: {
    src: src || 'http://via.placeholder.com/350x150',
    alt: alt || tslug(name),
  },
});

const generateLocation = ({
  venueName,
  country,
  city,
  address,
  coordinates,
}: Location): LocationCreateOneInput => ({
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

const generateSocial = ({
  facebook,
  twitter,
  instagram,
}: Social): SocialCreateOneInput => {
  return {
    create: {
      facebook,
      twitter,
      instagram,
    },
  };
};
