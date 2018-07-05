import React, { Fragment } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Meta = () => (
  <Fragment>
    <Head>
      <title>ConfHub</title>
      <meta name="description" content="" />
      <link rel="shortcut icon" href="/static/images/favicon.ico" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>

    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #d7ff28;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #d7ff28, 0 0 5px #d7ff28;
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  </Fragment>
);

export default Meta;
