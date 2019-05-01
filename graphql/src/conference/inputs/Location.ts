import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

// const GraphQLConferenceCoordinatesInput = new GraphQLInputObjectType({
//   name: 'ConferenceCoordinatesInput',
//   fields: {
//     latitude: {
//       type: new GraphQLNonNull(GraphQLFloat),
//     },
//     longitude: {
//       type: new GraphQLNonNull(GraphQLFloat),
//     },
//   },
// });

export default new GraphQLInputObjectType({
  name: 'ConferenceLocationInput',
  fields: {
    country: {
      type: new GraphQLNonNull(GraphQLString),
    },
    city: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: GraphQLString,
    },
    countryCode: {
      type: new GraphQLNonNull(GraphQLString),
    },
    // venueName: {
    //   type: GraphQLString,
    // },
    // region: {
    //   type: new GraphQLNonNull(GraphQLRegion),
    // },
    // coordinates: {
    //   type: new GraphQLNonNull(GraphQLConferenceCoordinatesInput),
    // },
  },
});
