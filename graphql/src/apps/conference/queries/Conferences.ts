import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import {
  Conference,
  FragmentableArray,
  PUBLISH_STATUS,
} from '../../../generated/prisma-client';
import { Context } from '../../../types';
import GraphQLConference from '../outputs/Conference';
import GraphQLPublishStatus from '../outputs/PublishStatus';

interface Args {
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
  coordinates: LocationCoordinatesInput;
  continent: string;
}

interface LocationCoordinatesInput {
  neLatitude: number;
  neLongitude: number;
  swLatitude: number;
  swLongitude: number;
}

const GraphQLLocationCoordinatesInput = new GraphQLInputObjectType({
  name: 'LocationCoordinatesInput',
  fields: {
    neLatitude: {
      type: GraphQLFloat,
      description: 'North-East Latitude (The upper-left corner)',
    },
    neLongitude: {
      type: GraphQLFloat,
      description: 'North-East Longitude (The upper-right corner)',
    },
    swLatitude: {
      type: GraphQLFloat,
      description: 'South-West Latitude (The lower-left corner)',
    },
    swLongitude: {
      type: GraphQLFloat,
      description: 'South-East Longitude (The lower-right corner)',
    },
  },
});

const GraphQLConferenceSortByLocationInput = new GraphQLInputObjectType({
  name: 'ConferenceSortByLocationInput',
  fields: {
    coordinates: {
      type: GraphQLLocationCoordinatesInput,
      description: 'Sort by Coordinates',
    },
    continent: {
      type: GraphQLString,
      description: 'Sort by Continents',
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
    parent: any,
    args: Args,
    ctx: Context,
  ): FragmentableArray<Conference> => {
    const makeQuery = () => {
      if (args && args.sortBy) {
        const { publishStatus, tags, location } = args.sortBy;

        if (location && location.coordinates && location.continent) {
          throw new Error(
            `Using both 'location.coordinates' and 'location.continent' simultaneously is not allowed!`,
          );
        }

        return {
          where: {
            ...(publishStatus && { publishStatus }),
            ...(tags && tags.length && { tags_some: { slug_in: tags } }),
            ...(location &&
              location.coordinates && {
                location: {
                  coordinates: {
                    latitude_gte: location.coordinates.swLatitude,
                    latitude_lte: location.coordinates.neLatitude,
                    longitude_gte: location.coordinates.swLongitude,
                    longitude_lte: location.coordinates.neLongitude,
                  },
                },
              }),
            ...(location &&
              location.continent && {
                location: {
                  continent: location.continent,
                },
              }),
          },
        };
      }

      return {};
    };

    return ctx.prisma.conferences(makeQuery());
  },
};
