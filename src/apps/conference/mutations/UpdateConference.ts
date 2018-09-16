import { GraphQLID, GraphQLNonNull } from 'graphql';

import { Conference, ConferenceUpdateInput } from '../../../generated/prisma';
import { getUserId, getUserRole, Context } from '../../../utils';
import GraphQLEditConferenceInput from '../inputs/EditConference';
import GraphQLConference from '../outputs/Conference';
import {
  generateImage,
  generateLocation,
  generateSocial,
  generateTagsUpdate,
} from './ConferenceShared';

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
      },
    }: ArgsType,
    { apiToken, db }: Context,
    info: any,
  ): Promise<Conference> => {
    const conference = await db.query.conference({ where: { id } }, info);

    const userId = getUserId(apiToken);
    const userRole = await getUserRole(userId, db);
    if (userRole === 'MODERATOR') {
      const query: ConferenceUpdateInput = {};
      if (name) {
        query.name = name;
      }
      if (url) {
        query.url = url;
      }
      if (startDate) {
        query.startDate = startDate;
      }
      if (endDate) {
        query.endDate = endDate;
      }
      if (description) {
        query.description = description;
      }
      if (tags) {
        query.tags = generateTagsUpdate(tags, conference.tags);
      }
      if (image) {
        query.image = generateImage(image, name || conference.name);
      }
      if (location) {
        query.location = generateLocation(location);
      }
      if (social) {
        query.social = generateSocial(social);
      }

      return db.mutation.updateConference({ data: query, where: { id } }, info);
    }
    throw new Error('You must have moderator rights');
  },
};
