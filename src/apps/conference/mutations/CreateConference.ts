import { GraphQLNonNull } from 'graphql';

import {
  Conference,
  ConferencePrice,
  ConferencePriceCreateOneInput,
} from '../../../generated/prisma';
import { Context } from '../../../utils';
import GraphQLCreateConferenceInput from '../inputs/CreateConference';
import GraphQLConference from '../outputs/Conference';
import {
  generateImage,
  generateLocation,
  generateSocial,
  generateTagsCreate,
  generatePrice,
} from './ConferenceShared';

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
        price,
      },
    }: ArgsType,
    ctx: Context,
    info: any,
  ): Promise<Conference> => {
    return ctx.db.mutation.createConference(
      {
        data: {
          name,
          description,
          tags: tags ? generateTagsCreate(tags) : null,
          image: image ? generateImage(image, name) : null,
          url,
          startDate,
          endDate,
          location: generateLocation(location),
          social: social ? generateSocial(social) : null,
          price: generatePrices(price),
        },
      },
      info,
    );
  },
};

function generatePrices(
  prices: ConferencePrice,
): ConferencePriceCreateOneInput {
  const { regular, earlyBird, lateBird } = prices;

  return {
    create: {
      regular: { create: { ...generatePrice(regular) } },
      earlyBird: { create: { ...generatePrice(earlyBird) } },
      lateBird: { create: { ...generatePrice(lateBird) } },
    },
  };
}
