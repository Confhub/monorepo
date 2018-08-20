// @flow

import * as React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import cookie from 'cookie';
import Router from 'next/router';
import NProgress from 'nprogress';

import Layout from '../components/layout/Layout';
import withApollo from '../lib/withApollo';
import redirect from '../lib/redirect';
import checkLoggedIn from '../lib/checkLoggedIn';

Router.events.on('routeChangeStart', url => {
  if (url.includes('/?')) return;
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ ctx }: any) {
    const { currentUser } = await checkLoggedIn(ctx.apolloClient);

    if (currentUser.user) {
      return { isAuth: true, userData: currentUser.user };
    }

    return { isAuth: false };
  }

  signOut = () => {
    this.props.apolloClient.cache.reset().then(() => {
      redirect({}, '/');

      document.cookie = cookie.serialize('token', '', {
        maxAge: -1,
      });
    });
  };

  render() {
    const { Component, pageProps, apolloClient, isAuth, userData } = this.props;

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Layout
            isAuth={isAuth}
            userData={userData || null}
            signOut={this.signOut}
          >
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);

// types: MODERATOR, SPEAKER, VISITOR
