import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  #nprogress {
    pointer-events: none;

    .bar {
      background: #4290f7;
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }

    .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #4290f7, 0 0 5px #4290f7;
      opacity: 1;
      transform: rotate(3deg) translate(0px, -4px);
    }
  }
`;

// @ts-ignore
export class MyDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // @ts-ignore
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  public render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="" />
          <link rel="shortcut icon" href="/static/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <GlobalStyles />
      </html>
    );
  }
}

export default MyDocument;
