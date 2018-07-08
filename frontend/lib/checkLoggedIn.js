// import gql from 'graphql-tag';

export default apolloClient =>
  apolloClient
    .query({
      query: gqltemp`
        query getUser {
          user {
            id
            name
          }
        }
      `,
    })
    .then(({ data }) => {
      return { loggedInUser: data };
    })
    .catch(() => {
      // Fail gracefully
      return { loggedInUser: {} };
    });
