import React, { Fragment } from 'react';
import { Layout } from 'antd';

import Meta from './Meta';
import Header from './header/Header';
import Footer from './footer/Footer';

class LayoutComponent extends React.Component {
  render() {
    return (
      <Fragment>
        <Meta />

        <Layout className="home">
          <Header />

          <Layout.Content>
            <Layout>{this.props.children}</Layout>
          </Layout.Content>

          <Footer />
        </Layout>
      </Fragment>
    );
  }
}

export default LayoutComponent;
