import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';

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
  public render() {
    // @ts-ignore
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <Head>
          <title>ConfHub</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
