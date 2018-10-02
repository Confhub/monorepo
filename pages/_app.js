import * as React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import cookie from 'cookie';
import Router from 'next/router';
import NProgress from 'nprogress';
import isEmpty from 'lodash/isEmpty';
import Head from 'next/head';

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
  static async getInitialProps({ ctx, query }) {
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

  signOut = () => {
    this.props.apolloClient.cache.reset().then(() => {
      redirect({}, '/');

      document.cookie = cookie.serialize('token', '', {
        maxAge: -1,
      });
    });
  };

  render() {
    const { Component, apolloClient, isAuth, userData, query } = this.props;

    return (
      <Container>
        <Head>
          <title>ConfHub</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="" />
          <link rel="shortcut icon" href="/static/images/favicon.ico" />
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
