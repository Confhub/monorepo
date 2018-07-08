import React from 'react';
import { Layout } from 'antd';

import ListComponent from '../home/List/ListContainer';

const AdminPageContainer = ({ data }) => (
  <Layout.Content style={{ padding: '0 20px', marginTop: 20 }}>
    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      <ListComponent items={data} />
    </div>
  </Layout.Content>
);

export default AdminPageContainer;
