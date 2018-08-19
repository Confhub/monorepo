// @flow

import * as React from 'react';
import { withRouter } from 'next/router';

import Header from './Header/Header';
import Footer from './Footer/Footer';

type Props = {
  isAuth: boolean,
  userData: any,
  signOut: () => void,
  children: React.Node,
  router: any,
};

class LayoutComponent extends React.Component<Props> {
  render() {
    const { isAuth, userData, signOut, router, children } = this.props;
    const isHomePage = router.pathname === '/' ? ' home' : '';

    return (
      <React.Fragment>
        <div className={`root ${isHomePage}`}>
          <Header
            className="header"
            isAuth={isAuth}
            userData={userData}
            signOut={signOut}
          />

          <div className="layout">{children}</div>

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
      </React.Fragment>
    );
  }
}

export default withRouter(LayoutComponent);
