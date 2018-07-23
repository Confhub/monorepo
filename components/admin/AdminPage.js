import * as React from 'react';
import { Layout } from 'antd';

import ListContainer from './List/ListContainer';

const AdminPageContainer = () => (
  <Layout.Content style={{ padding: '0 20px', marginTop: 20 }}>
    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      <ListContainer />
    </div>
  </Layout.Content>
);

export default AdminPageContainer;
