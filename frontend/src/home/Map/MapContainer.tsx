import gql from 'graphql-tag';
import dynamic from 'next/dynamic';
import * as React from 'react';

import { FiltersContext } from '../Filters/FiltersContext';

const Map = dynamic(import('./Map'), {
  ssr: false,
  loading: () => (
    <div style={{ backgroundColor: '#8ACDEC', height: '100vh' }} />
  ),
});

export const MAP_FRAGMENT = gql`
  fragment Map on Conference {
    name
    location {
      coordinates {
        latitude
        longitude
      }
    }
  }
`;

const MapContainer = ({ items, context }) => (
  <Map items={items} context={context} />
);

export default props => (
  <FiltersContext.Consumer>
    {context => <MapContainer {...props} context={context} />}
  </FiltersContext.Consumer>
);
