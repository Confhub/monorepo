import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { Conference, PUBLISH_STATUS } from '../../../generated/prisma';
import { Context } from '../../../utils';
import GraphQLConference from '../outputs/Conference';
import GraphQLPublishStatus from '../outputs/PublishStatus';

interface ArgsType {
  sortBy?: {
    publishStatus?: PUBLISH_STATUS;
    tags?: string[];
    location?: LocationInput;
  };
  skip?: number;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

interface LocationInput {
  NELatitude: number;
  NELongitude: number;
  SWLatitude: number;
  SWLongitude: number;
}

const GraphQLConferenceSortByLocationInput = new GraphQLInputObjectType({
  name: 'ConferenceSortByLocationInput',
  fields: {
    NELatitude: {
      type: GraphQLFloat,
      description: 'North-East Latitude (The upper-left corner)',
    },
    NELongitude: {
      type: GraphQLFloat,
      description: 'North-East Longitude (The upper-right corner)',
    },
    SWLatitude: {
      type: GraphQLFloat,
      description: 'South-West Latitude (The lower-left corner)',
    },
    SWLongitude: {
      type: GraphQLFloat,
      description: 'South-East Longitude (The lower-right corner)',
    },
  },
});

const GraphQLConferenceSortByInput = new GraphQLInputObjectType({
  name: 'ConferenceSortByInput',
  fields: {
    publishStatus: {
      type: GraphQLPublishStatus,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    location: {
      type: GraphQLConferenceSortByLocationInput,
    },
  },
});

export default {
  type: new GraphQLList(GraphQLConference),
  args: {
    sortBy: {
      type: GraphQLConferenceSortByInput,
    },
    skip: {
      type: GraphQLInt,
    },
    after: {
      type: GraphQLString,
    },
    before: {
      type: GraphQLString,
    },
    first: {
      type: GraphQLInt,
    },
    last: {
      type: GraphQLInt,
    },
  },
  resolve: (
    _: any,
    args: ArgsType,
    ctx: Context,
    info: any,
  ): Promise<Conference> => {
    const makeQuery = () => {
      if (args && args.sortBy) {
        const { publishStatus, tags, location } = args.sortBy;

        return {
          where: {
            ...(publishStatus && { publishStatus }),
            ...(tags && tags.length && { tags_some: { slug_in: tags } }),
            ...(location && {
              location: {
                coordinates: {
                  latitude_gte: location.NELatitude,
                  latitude_lte: location.NELongitude,
                  longitude_gte: location.SWLatitude,
                  longitude_lte: location.SWLongitude,
                },
              },
            }),
          },
        };
      }

      return null;
    };

    return ctx.db.query.conferences(makeQuery(), info);
  },
};
