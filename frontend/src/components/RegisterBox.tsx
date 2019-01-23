import cookie from 'cookie';
import gql from 'graphql-tag';
import * as React from 'react';
import { withApollo, Mutation } from 'react-apollo';
import redirect from '../../lib/redirect';

const CREATE_USER = gql`
  mutation Create($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      user {
        id
      }
    }

    signInUser(email: $email, password: $password) {
      token
    }
  }
`;

const RegisterBox = ({ client }) => {
  let name, email, password;

  return (
    <Mutation
      mutation={CREATE_USER}
      onCompleted={async data => {
        // Store the token in cookie
        document.cookie = cookie.serialize('token', data.signInUser.token, {
          maxAge: 30 * 24 * 60 * 60, // 30 days
        });
        // Force a reload of all the current queries now that the user is
        // logged in
        try {
          await client.cache.reset();
          redirect({}, '/');
        } catch (err) {
          console.error(err);
        }
      }}
      onError={error => {
        console.error(error);
      }}
    >
      {(create, { error }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            e.stopPropagation();

            create({
              variables: {
                name: name.value,
                email: email.value,
                password: password.value,
              },
            });

            name.value = email.value = password.value = '';
          }}
        >
          {error && <p>Issue occured while registering :(</p>}
          <input
            name="name"
            placeholder="Name"
            ref={node => {
              name = node;
            }}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            ref={node => {
              email = node;
            }}
          />
          <br />
          <input
            name="password"
            placeholder="Password"
            ref={node => {
              password = node;
            }}
            type="password"
          />
          <br />
          <button>Register</button>
        </form>
      )}
    </Mutation>
  );
};

export default withApollo(RegisterBox);
