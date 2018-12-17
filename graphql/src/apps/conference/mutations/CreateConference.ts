import { GraphQLNonNull } from 'graphql';

import {
  Conference,
  ConferenceCreateInput,
  ConferencePromise,
} from '../../../generated/prisma-client';
import { Context } from '../../../types';
import GraphQLCreateConferenceInput from '../inputs/CreateConference';
import GraphQLConference from '../outputs/Conference';
import {
  generateImage,
  generateLocation,
  generateSocial,
  generateTagsCreate,
} from './helpers';

interface ArgsType {
  data: ConferenceCreateInput;
}

export default {
  type: GraphQLConference,
  args: {
    data: {
      type: new GraphQLNonNull(GraphQLCreateConferenceInput),
    },
  },
  resolve: async (
    parent: any,
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
        prices,
      },
    }: ArgsType,
    { prisma }: Context,
  ): Promise<Conference> => {
    return prisma.createConference({
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
        prices: { create: prices },
      },
    });
  },
};
