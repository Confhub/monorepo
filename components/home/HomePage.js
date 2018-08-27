import * as React from 'react';

import Search from './Search/Search';
import ListContainer from './List/ListContainer';
import MapContainer from './Map/MapContainer';

const HomePage = ({ data }) => (
  <div className="root">
    <div id="map-wrap" className="map">
      <MapContainer items={data} />
    </div>
    <div className="sidebar">
      <Search />
      <ListContainer items={data} />
    </div>
    <style jsx>{`
      .root {
        display: grid;
        grid-template-columns: 60% 1fr;
        grid-template-rows: 100%;
        grid-template-areas: 'map sidebar';
        height: 100%;
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
