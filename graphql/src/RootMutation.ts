import { GraphQLObjectType } from 'graphql';

import CreateConference from './apps/conference/mutations/CreateConference';
import DeleteConference from './apps/conference/mutations/DeleteConference';
import PublishConference from './apps/conference/mutations/PublishConference';
import UpdateConference from './apps/conference/mutations/UpdateConference';
import CreateTag from './apps/tags/mutations/CreateTag';
import DeleteTag from './apps/tags/mutations/DeleteTag';
import UpdateTag from './apps/tags/mutations/UpdateTag';
import ChangeUserRole from './apps/user/mutations/ChangeUserRole';
import CreateUser from './apps/user/mutations/CreateUser';
import SignInUser from './apps/user/mutations/SignInUser';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: {
    createUser: CreateUser,
    signInUser: SignInUser,
    changeUserRole: ChangeUserRole,
    createConference: CreateConference,
    updateConference: UpdateConference,
    publishConference: PublishConference,
    deleteConference: DeleteConference,
    createTag: CreateTag,
    deleteTag: DeleteTag,
    updateTag: UpdateTag,
  },
});
