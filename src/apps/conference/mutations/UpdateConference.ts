import { GraphQLNonNull } from 'graphql';
import tslug from 'tslug';

import { ContextType } from '../../../helpers';
import { isAdminAuthorized } from '../../user/helpers';
import GraphQLCreateConferenceInput from '../inputs/CreateConference';
import GraphQLConference from '../outputs/Conference';

interface Conference {
  name: string;
  description?: string;
  tags?: Tag[];
  image?: Image;
  url: string;
  social: Social;
  startDate: string;
  endDate: string;
}

interface Tag {
  id?: string;
  name?: string;
  slug?: string;
}

interface Image {
  id?: string;
  src?: string;
  alt?: string;
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
      data: { name, description, tags, image, url, social, startDate, endDate },
    }: ArgsType,
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

const generateImage = (image: Image, name: string) => {
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
