import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { Location } from '../../generated/prisma-client';

export default new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: ({ id }: Location): string => id,
    },
    country: {
      type: GraphQLString,
      resolve: ({ country }: Location): string => country,
    },
    city: {
      type: GraphQLString,
      resolve: ({ city }: Location): string => city,
    },
    address: {
      type: GraphQLString,
      resolve: ({ address }: Location): string => address,
    },
    // venueName: {
    //   type: GraphQLString,
    //   resolve: ({ venueName }: Location): string => venueName,
    // },
    // region: {
    //   type: GraphQLRegion,
    //   resolve: ({ region }: Location): REGION => region,
    // },
    // coordinates: {
    //   type: GraphQLCoordinates,
    //   resolve: ({ coordinates }: Location): Coordinates => coordinates,
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
