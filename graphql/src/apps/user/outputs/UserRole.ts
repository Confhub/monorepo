import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'UserRole',
  values: {
    ATTENDEE: {
      value: 'ATTENDEE',
    },
    SPEAKER: {
      value: 'SPEAKER',
    },
    MODERATOR: {
      value: 'MODERATOR',
    },
  },
});
