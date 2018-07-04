import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <Container>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Container>
      </div>
    );
  }
}

export default withApollo(MyApp);
