// @flow

import gql from 'graphql-tag';

const GET_USER = gql`
  query getUser {
    user {
      id
      name
      email
      isAdmin
    }
  }
`;

export default async (apolloClient: any) => {
  try {
    const getUser = await apolloClient.query({
      query: GET_USER,
    });

    if (getUser.data) return { currentUser: getUser.data };
  } catch (e) {
    return { currentUser: {} };
  }
};
