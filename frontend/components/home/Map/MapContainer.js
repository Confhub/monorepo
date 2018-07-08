import React from 'react';
import gql from 'graphql-tag';

import Map from './Map';

const MapContainer = ({ items }) => <Map items={items} />;

MapContainer.fragments = {
  items: gql`
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
  `,
};

export default MapContainer;
