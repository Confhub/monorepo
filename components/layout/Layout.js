import * as React from "react";
import { withRouter } from "next/router";
import { Layout } from "antd";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

class LayoutComponent extends React.Component {
  render() {
    const { isAuth, userData, signOut, router, children } = this.props;
    const isHomePage = router.pathname === "/";

    return (
      <React.Fragment>
        <Layout className={`layout ${isHomePage ? "home" : ""}`}>
          <Header
            className="header"
            isAuth={isAuth}
            userData={userData}
            signOut={signOut}
          />

          {isHomePage ? (
            <div>{children}</div>
          ) : (
            <Layout.Content
              className="content"
              style={{ padding: "0 20px", marginTop: 20 }}
            >
              <div style={{ padding: 24, background: "#fff" }}>{children}</div>
            </Layout.Content>
          )}

          {/* <Footer className="footer" /> */}
        </Layout>

        <style jsx>{`
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
        `}</style>
      </React.Fragment>
    );
  }
}

export default withRouter(LayoutComponent);
