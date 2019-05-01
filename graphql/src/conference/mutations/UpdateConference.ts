// import { AuthenticationError } from 'apollo-server';
// import { GraphQLID, GraphQLNonNull } from 'graphql';

// import { Conference, ConferenceUpdateInput } from '../../../generated/prisma';

// import { getUserId, getUserRole, Context } from '../../../utils';
// import GraphQLEditConferenceInput from '../inputs/EditConference';
// import GraphQLConference from '../outputs/Conference';
// import {
//   generateImage,
//   generateLocation,
//   // generateSocial,
//   generateTagsUpdate,
// } from './helpers';

// interface ArgsType {
//   id: string;
//   data: Conference;
// }

// export default {
//   type: GraphQLConference,
//   args: {
//     id: {
//       type: new GraphQLNonNull(GraphQLID),
//     },
//     data: {
//       type: new GraphQLNonNull(GraphQLEditConferenceInput),
//     },
//   },
//   resolve: async (
//     _: any,
//     {
//       id,
//       data: {
//         name,
//         description,
//         tags,
//         image,
//         url,
//         startDate,
//         endDate,
//         location,
//         // social,
//         // prices,
//       },
//     }: ArgsType,
//     { apiToken, db }: Context,
//     info: any,
//   ): Promise<Conference | null> => {
//     const conference = await db.query.conference({ where: { id } });
//     const userId = getUserId(apiToken);
//     const userRole = await getUserRole(userId, db);

//     if (userRole === 'MODERATOR') {
//       // console.log('PRICES', conference.prices);

//       const query: ConferenceUpdateInput = {
//         ...(name && { name }),
//         ...(url && { url }),
//         ...(startDate && { startDate }),
//         ...(endDate && { endDate }),
//         ...(description && { description }),
//         ...(tags && { tags: generateTagsUpdate(tags, conference.tags) }),
//         ...(image && { image: generateImage(image, name || conference.name) }),
//         ...(location && { location: generateLocation(location) }),
//         // ...(social && { social: generateSocial(social) }),
//         // ...(prices && { prices: generatePrices(prices) }),
//       };

//       return db.mutation.updateConference({ data: query, where: { id } }, info);
//     }

//     throw new AuthenticationError('You must have moderator rights');
//   },
// };

// // function generatePrices(prices: Price[]): PriceUpdateManyInput {
// //   const [create, update, remove] = prices.reduce(
// //     (acc, price) => {
// //       let item = 0;
// //       if (price.id) {
// //         const { id, ...data } = price;
// //         item = Object.keys(data).length ? 1 : 2;
// //       }
// //       acc[item].push(price);

// //       return acc;
// //     },
// //     [[], [], []],
// //   );
// //   return {
// //     create,
// //     update: update.map(({ id, ...data }) => ({
// //       where: { id },
// //       data,
// //     })),
// //     delete: remove,
// //   };
// // }
