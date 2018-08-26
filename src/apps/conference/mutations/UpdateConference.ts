// import { GraphQLNonNull } from 'graphql';
// import tslug from 'tslug';

// import { Context } from '../../../helpers';
// import { Context, getUserId, getUserRole } from '../../../utils';
// import GraphQLCreateConferenceInput from '../inputs/CreateConference';
// import GraphQLConference, { Conference } from '../outputs/Conference';
// import { Tag } from '../../tags/outputs/Tag';
// import {
//   TagCreateManyInput,
//   ImageCreateOneInput,
//   SocialCreateOneInput,
//   LocationCreateOneInput,
// } from '../../../generated/prisma';
// import { Image } from '../outputs/Image';
// import { Social } from '../outputs/Social';
// import { Location } from '../outputs/Location';

// interface ArgsType {
//   data: Conference;
// }

// export default {
//   type: GraphQLConference,
//   args: {
//     data: {
//       type: new GraphQLNonNull(GraphQLCreateConferenceInput),
//     },
//   },
//   resolve: async (
//     _: any,
//     {
//       data: {
//         name,
//         description,
//         tags,
//         image,
//         url,
//         startDate,
//         endDate,
//         location,
//         social,
//       },
//     }: ArgsType,
//     { apiToken, db }: Context,
//     info: any,
//   ): Promise<Conference> => {
//     const userId = getUserId(apiToken);
//     const userRole = await getUserRole(userId, db);

//     if (userRole === 'MODERATOR') {
//       const makeQuery = () => ({
//         data: {
//           name,
//           description,
//           tags: tags ? generateTags(tags) : null,
//           image: image ? generateImage(image, name) : null,
//           url,
//           location: generateLocation(location),
//           social: social ? generateSocial(social) : null,
//           startDate,
//           endDate,
//         },
//       });

//       return db.mutation.createConference(makeQuery(), info);
//     }

//     throw new Error('You must have moderator rights');
//   },
// };

// const generateTags = (tags: Tag[]): TagCreateManyInput => {
//   const connect = [];
//   const create = [];

//   tags.map(tag => {
//     if (tag.id) {
//       return connect.push({
//         id: tag.id,
//       });
//     }

//     return create.push({
//       name: tag.name,
//       slug: tslug(tag.name, { decamelize: false }),
//     });
//   });

//   return {
//     connect,
//     create,
//   };
// };

// const generateImage = (image: Image, name: string): ImageCreateOneInput => {
//   if (image.id) {
//     return {
//       connect: {
//         id: image.id,
//       },
//     };
//   }

//   return {
//     create: {
//       src: image.src || 'http://via.placeholder.com/350x150',
//       alt: image.alt || name,
//     },
//   };
// };

// const generateLocation = ({
//   venueName,
//   country,
//   city,
//   address,
//   coordinates,
// }: Location): LocationCreateOneInput => ({
//   create: {
//     venueName: venueName || '',
//     country,
//     city,
//     address,
//     coordinates: {
//       create: {
//         latitude: coordinates.latitude,
//         longitude: coordinates.longitude,
//       },
//     },
//   },
// });

// const generateSocial = (social: Social): SocialCreateOneInput => {
//   return {
//     create: {
//       facebook: social.facebook || null,
//       twitter: social.twitter || null,
//       instagram: social.instagram || null,
//     },
//   };
// };
