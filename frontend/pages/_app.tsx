import cookie from 'cookie';
import isEmpty from 'lodash/isEmpty';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';

import checkLoggedIn from '../lib/checkLoggedIn';
import redirect from '../lib/redirect';
import withApollo from '../lib/withApollo';
import Layout from '../src/components/layout/Layout';

Router.events.on('routeChangeStart', url => {
  if (url.includes('/?')) {
    return;
  }
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  public static async getInitialProps({ ctx, query }) {
    const { currentUser } = await checkLoggedIn(ctx.apolloClient);

    if (ctx.pathname === '/signin' || ctx.pathname === '/create-account') {
      if (currentUser.user) {
        redirect(ctx, '/');
      }
    }

    if (ctx.pathname === '/admin') {
      if (isEmpty(currentUser) || currentUser.user.role !== 'MODERATOR') {
        redirect(ctx, '/');
      }
    }

    if (currentUser.user) {
      return { isAuth: true, userData: currentUser.user, query: ctx.query };
    }

    return { isAuth: false, userData: {}, query: ctx.query };
  }

  public signOut = () => {
    this.props.apolloClient.cache.reset().then(() => {
      redirect({}, '/');

      document.cookie = cookie.serialize('token', '', {
        maxAge: -1,
      });
    });
  };

  public render() {
    const { Component, apolloClient, isAuth, userData, query } = this.props;

    return (
      <Container>
        <Head>
          <title>ConfHub</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Layout isAuth={isAuth} userData={userData} signOut={this.signOut}>
            <Component query={query} userData={userData} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
