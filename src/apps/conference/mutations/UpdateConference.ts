import { AuthenticationError } from 'apollo-server';
import { GraphQLID, GraphQLNonNull } from 'graphql';

import {
  Conference,
  ConferencePrice,
  ConferencePriceUpdateOneInput,
  ConferenceUpdateInput,
} from '../../../generated/prisma';

import { getUserId, getUserRole, Context } from '../../../utils';
import GraphQLEditConferenceInput from '../inputs/EditConference';
import GraphQLConference from '../outputs/Conference';
import {
  generateImage,
  generateLocation,
  generatePrice,
  generateSocial,
  generateTagsUpdate,
} from './helpers';

interface ArgsType {
  id: string;
  data: Conference;
}

export default {
  type: GraphQLConference,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    data: {
      type: new GraphQLNonNull(GraphQLEditConferenceInput),
    },
  },
  resolve: async (
    _: any,
    {
      id,
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
        price,
      },
    }: ArgsType,
    { apiToken, db }: Context,
    info: any,
  ): Promise<Conference | null> => {
    const conference = await db.query.conference({ where: { id } });
    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);

    if (userRole === 'MODERATOR') {
      const query: ConferenceUpdateInput = {
        ...(name && { name }),
        ...(url && { url }),
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        ...(description && { description }),
        ...(tags && { tags: generateTagsUpdate(tags, conference.tags) }),
        ...(image && { image: generateImage(image, name || conference.name) }),
        ...(location && { location: generateLocation(location) }),
        ...(social && { social: generateSocial(social) }),
        ...(price && { price: generatePrices(price, conference.price) }),
      };

      return db.mutation.updateConference({ data: query, where: { id } }, info);
    }

    throw new AuthenticationError('You must have moderator rights');
  },
};

function generatePrices(
  prices: ConferencePrice,
  oldPrices: ConferencePrice,
): ConferencePriceUpdateOneInput {
  const { regular, earlyBird, lateBird } = prices;

  return {
    update: {
      regular: generateUpdatePrice(regular, oldPrices && oldPrices.regular),
      earlyBird: generateUpdatePrice(
        earlyBird,
        oldPrices && oldPrices.earlyBird,
      ),
      lateBird: generateUpdatePrice(lateBird, oldPrices && oldPrices.lateBird),
    },
  };
}

function generateUpdatePrice(price, oldPrice) {
  if (!price) {
    return null;
  }

  return {
    upsert: {
      update: { ...generatePrice(price) },
      create: { ...generatePrice({ ...oldPrice, ...price }) },
    },
  };
}
