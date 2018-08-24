import { GraphQLNonNull } from 'graphql';
import tslug from 'tslug';

import { ContextType } from '../../../helpers';
import GraphQLCreateConferenceInput from '../inputs/CreateConference';
import GraphQLConference from '../outputs/Conference';

interface Conference {
  name: string;
  description?: string;
  tags?: Tag[];
  image?: Image;
  url: string;
  startDate: string;
  endDate: string;
  location: Location;
  social: Social;
}

interface Tag {
  id?: string;
  name?: string;
  slug?: string;
}

interface Image {
  src?: string;
  alt?: string;
}

interface Location {
  venueName?: string;
  country: string;
  city: string;
  address: string;
  coordinates: Coordinates;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Social {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

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

const generateImage = ({ src, alt }: Image, name: string) => ({
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
