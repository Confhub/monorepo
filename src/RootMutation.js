// @flow

import { GraphQLObjectType } from 'graphql';

import SignUp from './general/mutations/SignUp';
import SignIn from './general/mutations/SignIn';
import CreateConference from './apps/conference/mutations/CreateConference';
import PublishConference from './apps/conference/mutations/PublishConference';
import DeleteConference from './apps/conference/mutations/DeleteConference';
import CreateTag from './apps/tags/mutations/CreateTag';
import DeleteTag from './apps/tags/mutations/DeleteTag';
import UpdateTag from './apps/tags/mutations/UpdateTag';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: {
    signUp: SignUp,
    signIn: SignIn,
    createConference: CreateConference,
    publishConference: PublishConference,
    deleteConference: DeleteConference,
    createTag: CreateTag,
    deleteTag: DeleteTag,
    updateTag: UpdateTag,
  },
});
