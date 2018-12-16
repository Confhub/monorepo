import * as React from 'react';

import ListContainer from './List/ListContainer';
import MapContainer from './Map/MapContainer';
import Search from './Search/Search';

const HomePage = ({ data }) => (
  <div className="root">
    <div className="sidebar">
      <Search />
      <ListContainer items={data} />
    </div>
    <div id="map-wrap" className="map">
      <MapContainer items={data} />
    </div>
    <style jsx={true}>{`
      .root {
        display: grid;
        grid-template-columns: 530px 1fr;
        grid-template-areas: 'sidebar map';
        height: 100vh;
      }

      .map {
        grid-area: map;
      }

      .sidebar {
        grid-area: sidebar;
        overflow: scroll;
        padding: 0 20px;
      }
    `}</style>
  </div>
);

export default HomePage;
