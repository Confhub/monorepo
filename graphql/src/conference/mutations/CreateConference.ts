import { GraphQLNonNull } from 'graphql';

import { Conference } from '../../generated/prisma-client';
import { Context } from '../../utils';
import GraphQLCreateConferenceInput from '../inputs/CreateConference';
import GraphQLConference from '../outputs/Conference';
import { generateImage, generateLocation, generateTagsCreate } from './helpers';

// interface Args {
//   data: Conference;
// }

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
      },
    }: any,
    ctx: Context,
  ): Promise<Conference> =>
    ctx.prisma.createConference({
      name,
      description,
      tags: generateTagsCreate(tags),
      image: generateImage(image, name),
      url,
      startDate,
      endDate,
      location: generateLocation(location),
    }),
};
