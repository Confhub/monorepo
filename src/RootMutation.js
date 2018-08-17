// @flow

import { GraphQLObjectType } from 'graphql';

import CreateUser from './apps/user/mutations/CreateUser';
import SignInUser from './apps/user/mutations/SignInUser';
import GrantAdminRights from './apps/user/mutations/GrantAdminRights';
import CreateConference from './apps/conference/mutations/CreateConference';
import PublishConference from './apps/conference/mutations/PublishConference';
import DeleteConference from './apps/conference/mutations/DeleteConference';
import CreateTag from './apps/tags/mutations/CreateTag';
import DeleteTag from './apps/tags/mutations/DeleteTag';
import UpdateTag from './apps/tags/mutations/UpdateTag';
import CreateCurrency from './apps/currencies/mutations/CreateCurrency';
import DeleteCurrency from './apps/currencies/mutations/DeleteCurrency';
import UpdateCurrency from './apps/currencies/mutations/UpdateCurrency';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: {
    createUser: CreateUser,
    signInUser: SignInUser,
    grantAdminRights: GrantAdminRights,
    createConference: CreateConference,
    publishConference: PublishConference,
    deleteConference: DeleteConference,
    createTag: CreateTag,
    deleteTag: DeleteTag,
    updateTag: UpdateTag,
    createCurrency: CreateCurrency,
    deleteCurrency: DeleteCurrency,
    updateCurrency: UpdateCurrency,
  },
});
