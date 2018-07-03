// @flow

import GraphQLAConference, { type Conference } from '../outputs/Conference';

export default {
  type: GraphQLAConference,
  resolve: async (): Promise<Conference> => {
    return {};
  },
};
