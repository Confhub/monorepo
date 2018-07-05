import React from 'react';
import gql from 'graphql-tag';
import dynamic from 'next/dynamic';

const Map = dynamic(import('./Map'), { ssr: false });

const MapFragment = ({ items }) => <Map items={items} />;

MapFragment.fragments = {
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

export default MapFragment;
