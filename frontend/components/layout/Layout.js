import React, { Fragment } from 'react';
import { withRouter } from 'next/router';

import Meta from './Meta';
import Header from './Header/Header';
import Footer from './Footer/Footer';

class LayoutComponent extends React.Component {
  render() {
    const rootClasses = this.props.router.pathname === '/' ? ' home' : '';
    return (
      <Fragment>
        <Meta />

        <div className={'root' + rootClasses}>
          <Header className="header" />

          <div className="layout">{this.props.children}</div>

          <Footer className="footer" />
        </div>
        <style jsx>{`
          .root {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
              'header'
              'content'
              'footer';
          }

          .home {
            width: 100vw;
            height: 100vh;
          }

          .home .layout {
            overflow: hidden;
          }

          .root :global(.header) {
            grid-area: header;
          }

          .layout {
            grid-area: content;
          }

          .root :global(.footer) {
            grid-area: footer;
            padding: 12px;
          }

          .root :global(.footer p:last-child) {
            margin: 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default withRouter(LayoutComponent);
