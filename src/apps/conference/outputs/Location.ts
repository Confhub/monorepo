import {
  GraphQLFloat,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export interface Location {
  id: string;
  venueName?: string;
  country: string;
  city: string;
  address?: string;
  coordinates?: Coordinates;
}

interface Coordinates {
  id: string;
  latitude: number;
  longitude: number;
}

const GraphQLCoordinates = new GraphQLObjectType({
  name: 'Coordinates',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Coordinates): string => id,
    },
    latitude: {
      type: GraphQLFloat,
      resolve: ({ latitude }: Coordinates): number => latitude,
    },
    longitude: {
      type: GraphQLFloat,
      resolve: ({ longitude }: Coordinates): number => longitude,
    },
  },
});

export default new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id }: Location): string => id,
    },
    venueName: {
      type: GraphQLString,
      resolve: ({ venueName }: Location): string => venueName,
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
    coordinates: {
      type: GraphQLCoordinates,
      resolve: ({ coordinates }: Location): Coordinates => coordinates,
    },
  },
});
