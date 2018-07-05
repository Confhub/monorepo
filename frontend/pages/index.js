import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Layout } from 'antd';

import MainContext from '../context/MainContext';
import Sidebar from '../components/home/Sidebar';
import List from '../components/home/List';
import MapContainer from '../components/home/MapContainer';

import 'mapbox-gl/dist/mapbox-gl.css';

const GET_CONFERENCE_LIST = gql`
  query conferences($publishStatus: PUBLISH_STATUS!) {
    conferences(where: { publishStatus: $publishStatus }) {
      ...List
      ...Map
    }
  }
  ${List.fragments.items}
  ${MapContainer.fragments.items}
`;

export default class Hello extends React.Component {
  render() {
    return (
      <Query
        query={GET_CONFERENCE_LIST}
        variables={{ publishStatus: 'PUBLISHED' }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <MainContext.Provider>
              <Layout.Sider width="60%" style={{ background: '#fff' }}>
                <MapContainer items={data.conferences} />
              </Layout.Sider>

              <Layout.Content style={{ padding: '0 20px', marginTop: 20 }}>
                <div
                  style={{ background: '#fff', padding: 24, minHeight: 380 }}
                >
                  <Sidebar data={data.conferences} />
                </div>
              </Layout.Content>
            </MainContext.Provider>
          );
        }}
      </Query>
    );
  }
}
