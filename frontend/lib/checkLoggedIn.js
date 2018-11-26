import gql from 'graphql-tag';

const GET_USER = gql`
  query getUser {
    user {
      id
      name
      email
      role
    }
  }
`;

export default async apolloClient => {
  try {
    const getUser = await apolloClient.query({
      query: GET_USER,
    });

    if (getUser.data) {
      return { currentUser: getUser.data };
    }
  } catch (e) {
    return { currentUser: {} };
  }
};
