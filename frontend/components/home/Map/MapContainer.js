// @flow

import * as React from 'react';
import gql from 'graphql-tag';

import Map from './Map';

export const MAP_FRAGMENT = gqltemp`
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
