import * as React from 'react';
import gql from 'graphql-tag';
import Map from './Map';

// import type { Map as MapType } from './__generated__/Map';

// type Props = {
//   items: MapType[],
// };

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

const MapContainer = ({ items }) => <Map items={items} />;

export default MapContainer;
