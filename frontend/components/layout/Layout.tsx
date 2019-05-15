import { Layout as AntLayout } from 'antd';
import { withRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';

interface Props {
  router: {
    pathname: string;
  };
  children: React.ReactNode;
}

const Content = styled(AntLayout.Content)`
  background: #ffffff;
`;

class Layout extends React.Component<Props> {
  public render() {
    // const { isAuth, userData, signOut, router, children } = this.props;
    const { router, children } = this.props;
    const isHomePage = router.pathname === '/';

    return (
      <React.Fragment>
        <AntLayout className={`layout ${isHomePage ? 'home' : ''}`}>
          <Header
          // isAuth={isAuth}
          // userData={userData}
          // signOut={signOut}
          />

          <Content>{children}</Content>
        </AntLayout>

        {/* <style>{`
          .layout {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
              "header"
              "content"
              "footer";
          }

          .home {
            width: 100vw;
            height: 100vh;
          }

          .home .content {
            overflow: hidden;
          }

          .layout :global(.header) {
            grid-area: header;
          }

          .content {
            grid-area: content;
          }

          .layout :global(.footer) {
            grid-area: footer;
            padding: 12px;
          }

          .layout :global(.footer p:last-child) {
            margin: 0;
          }
        `}</style> */}
      </React.Fragment>
    );
  }
}

// @ts-ignore
export default withRouter(Layout);
