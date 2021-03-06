import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { ConferenceLocation } from '../../generated/prisma-client';

export default new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({ id }: ConferenceLocation): string => id,
    },
    country: {
      type: GraphQLString,
      resolve: ({ country }: ConferenceLocation): string => country,
    },
    city: {
      type: GraphQLString,
      resolve: ({ city }: ConferenceLocation): string => city,
    },
    address: {
      type: GraphQLString,
      resolve: ({ address }: ConferenceLocation): string => address,
    },
    // venueName: {
    //   type: GraphQLString,
    //   resolve: ({ venueName }: ConferenceLocation): string => venueName,
    // },
    // region: {
    //   type: GraphQLRegion,
    //   resolve: ({ region }: ConferenceLocation): REGION => region,
    // },
    // coordinates: {
    //   type: GraphQLCoordinates,
    //   resolve: ({ coordinates }: ConferenceLocation): Coordinates => coordinates,
    // },
  },
});

// const GraphQLCoordinates = new GraphQLObjectType({
//   name: 'Coordinates',
//   fields: {
//     id: {
//       type: GraphQLID,
//       resolve: ({ id }: Coordinates): string => id,
//     },
//     latitude: {
//       type: GraphQLFloat,
//       resolve: ({ latitude }: Coordinates): number => latitude,
//     },
//     longitude: {
//       type: GraphQLFloat,
//       resolve: ({ longitude }: Coordinates): number => longitude,
//     },
//   },
// });
