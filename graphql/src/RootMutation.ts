import { GraphQLObjectType } from 'graphql';

import CreateConference from './conference/mutations/CreateConference';
import DeleteConference from './conference/mutations/DeleteConference';
import PublishConference from './conference/mutations/PublishConference';
import CreateTag from './tags/mutations/CreateTag';
import DeleteTag from './tags/mutations/DeleteTag';
import UpdateTag from './tags/mutations/UpdateTag';
import ChangeUserRole from './user/mutations/ChangeUserRole';
import LogIn from './user/mutations/LogIn';
import SignUp from './user/mutations/SignUp';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: {
    logIn: LogIn,
    signUp: SignUp,
    changeUserRole: ChangeUserRole,
    createConference: CreateConference,
    publishConference: PublishConference,
    deleteConference: DeleteConference,
    createTag: CreateTag,
    deleteTag: DeleteTag,
    updateTag: UpdateTag,
    // updateConference: UpdateConference,
  },
});
