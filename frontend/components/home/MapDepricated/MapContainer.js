// @flow

import * as React from 'react';
import gql from 'graphql-tag';
import dynamic from 'next/dynamic';
import { Layout } from 'antd';

export const MAP_FRAGMENT = gql`
  fragment Map on Conference {
    name
    place {
      location {
        coordinates {
          latitude
          longitude
        }
      }
    }
  }
`;

const Map = dynamic(import('./Map'), {
  ssr: false,
  loading: () => (
    <Layout.Sider width="60%" style={{ background: '#fff' }}>
      Loading....
    </Layout.Sider>
  ),
});

const MapContainer = ({ items }) => <Map items={items} />;

export default MapContainer;
