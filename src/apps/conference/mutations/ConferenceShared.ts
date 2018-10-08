import tslug from 'tslug';
import idx from 'idx';
import {
  Image,
  ImageCreateOneInput,
  Location,
  LocationCreateOneInput,
  Social,
  SocialCreateOneInput,
  Tag,
  TagCreateManyInput,
  TagUpdateManyInput,
  ConferencePriceCreateOneInput,
  ConferencePrice,
  Price,
  PriceCreateInput,
} from '../../../generated/prisma';
import { detectContinent } from './helpers';

export const generateTagsCreate = (
  tags: Tag[],
  prevTags?: Tag[],
): TagCreateManyInput => {
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

export const generateTagsUpdate = (
  tags: Tag[],
  prevTags?: Tag[],
): TagUpdateManyInput => {
  const disconnect = prevTags
    ? prevTags
        .filter(prevTag => tags.findIndex(tag => tag.id === prevTag.id) === -1)
        .map(tag => ({ id: tag.id }))
    : [];

  return {
    ...generateTagsCreate(tags),
    disconnect,
  };
};

export const generateImage = (
  { src, alt }: Image,
  name: string,
): ImageCreateOneInput => ({
  create: {
    src: src || 'http://via.placeholder.com/350x150',
    alt: alt || tslug(name),
  },
});

export const generateLocation = ({
  venueName,
  country,
  city,
  address,
  coordinates,
}: Location): LocationCreateOneInput => ({
  create: {
    venueName: venueName || '',
    continent: detectContinent(country.toLowerCase()),
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

export const generateSocial = ({
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

export const generatePrice = (price: Price): PriceCreateInput => {
  if (!price) {
    return null;
  }

  const currencyId = idx(price, _ => _.currency.id);

  return {
    amount: price.amount,
    expiration: price.expiration,
    currency: {
      connect: {
        id: currencyId,
      },
    },
  };
};
