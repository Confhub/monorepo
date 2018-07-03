// @flow

import { GraphQLObjectType } from 'graphql';

import SignUp from './general/mutations/SignUp';
import SignIn from './general/mutations/SignIn';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: {
    signUp: SignUp,
    signIn: SignIn,
  },
});
