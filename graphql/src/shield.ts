import { and, not, or, rule, shield } from 'graphql-shield';

const isAuthenticated = rule()(async (_, __, ctx) => {
  return ctx.user !== null;
});

const isAttendee = rule()(async (_, __, ctx) => {
  return ctx.user.role === 'ATTENDEE';
});

const isSpeaker = rule()(async (_, __, ctx) => {
  return ctx.user.role === 'SPEAKER';
});

const isModerator = rule()(async (_, __, ctx) => {
  return ctx.user.role === 'MODERATOR';
});

const isAdmin = rule()(async (_, __, ctx) => {
  return ctx.user.role === 'ADMIN';
});

const permissions = shield({
  RootQuery: {},
  RootMutation: {
    changeUserRole: isAdmin,
    // createConference: isAuthenticated,
    // updateConference: or(isModerator, isAdmin),
    deleteConference: or(isModerator, isAdmin),
    publishConference: or(isModerator, isAdmin),
    createTag: isAuthenticated,
    updateTag: or(isModerator, isAdmin),
    deleteTag: or(isModerator, isAdmin),
  },
});

export default permissions;
