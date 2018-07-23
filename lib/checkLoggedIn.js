import gql from 'graphql-tag';

export default async apolloClient => {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query getUser {
          user {
            id
            name
          }
        }
      `,
    });

    return { loggedInUser: data };
  } catch (error) {
    return { loggedInUser: {} };
  }
};
