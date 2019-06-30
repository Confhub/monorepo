// import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { ApolloProvider } from 'react-apollo';

import Layout from '../components/layout/Layout';
import withApollo from '../lib/withApollo';

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
          <ApolloHooksProvider client={apolloClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
