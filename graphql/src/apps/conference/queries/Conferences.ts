import * as dayjs from 'dayjs';
import {
  // GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql';

import { Conference, PUBLISH_STATUS, REGION } from '../../../generated/prisma';
import { Context } from '../../../utils';
import GraphQLConference from '../outputs/Conference';
import GraphQLPublishStatus from '../outputs/PublishStatus';
import GraphQLRegion from '../outputs/Region';

interface ArgsType {
  sortBy?: {
    publishStatus?: PUBLISH_STATUS;
    tags?: string[];
    regions?: REGION[];
    interval?: number;
    // location?: LocationInput;
  };
  skip?: number;
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

// interface LocationInput {
//   coordinates: LocationCoordinatesInput;
//   continent: string;
// }

// interface LocationCoordinatesInput {
//   neLatitude: number;
//   neLongitude: number;
//   swLatitude: number;
//   swLongitude: number;
// }

// const GraphQLLocationCoordinatesInput = new GraphQLInputObjectType({
//   name: 'LocationCoordinatesInput',
//   fields: {
//     neLatitude: {
//       type: GraphQLFloat,
//       description: 'North-East Latitude (The upper-left corner)',
//     },
//     neLongitude: {
//       type: GraphQLFloat,
//       description: 'North-East Longitude (The upper-right corner)',
//     },
//     swLatitude: {
//       type: GraphQLFloat,
//       description: 'South-West Latitude (The lower-left corner)',
//     },
//     swLongitude: {
//       type: GraphQLFloat,
//       description: 'South-East Longitude (The lower-right corner)',
//     },
//   },
// });

// const GraphQLConferenceSortByLocationInput = new GraphQLInputObjectType({
//   name: 'ConferenceSortByLocationInput',
//   fields: {
//     coordinates: {
//       type: GraphQLLocationCoordinatesInput,
//       description: 'Sort by Coordinates',
//     },
//     continent: {
//       type: GraphQLString,
//       description: 'Sort by Continents',
//     },
//   },
// });

const GraphQLConferenceSortByInput = new GraphQLInputObjectType({
  name: 'ConferenceSortByInput',
  fields: {
    publishStatus: {
      type: GraphQLPublishStatus,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    interval: {
      type: GraphQLInt,
    },
    regions: {
      type: new GraphQLList(GraphQLRegion),
    },
    // location: {
    //   type: GraphQLConferenceSortByLocationInput,
    // },
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
  ): Promise<Conference[]> => {
    const makeQuery = () => {
      if (args && args.sortBy) {
        const {
          publishStatus,
          tags,
          interval,
          regions,
          // location
        } = args.sortBy;

        // if (location && location.coordinates && location.continent) {
        //   throw new Error(
        //     `Using both 'location.coordinates' and 'location.continent' simultaneously is not allowed!`,
        //   );
        // }

        return {
          where: {
            ...(publishStatus && { publishStatus }),
            ...(tags && tags.length && { tags_some: { slug_in: tags } }),
            ...(interval && {
              startDate_lte: dayjs()
                .add(interval, 'month')
                .format(),
            }),
            ...(regions &&
              regions.length && {
                location: { region_in: regions },
              }),
            // ...(location &&
            //   location.coordinates && {
            //     location: {
            //       coordinates: {
            //         latitude_gte: location.coordinates.swLatitude,
            //         latitude_lte: location.coordinates.neLatitude,
            //         longitude_gte: location.coordinates.swLongitude,
            //         longitude_lte: location.coordinates.neLongitude,
            //       },
            //     },
            //   }),
            // ...(location &&
            //   location.continent && {
            //     location: {
            //       continent: location.continent,
            //     },
            //   }),
          },
        };
      }

      return null;
    };

    return ctx.db.query.conferences(makeQuery(), info);
  },
};
