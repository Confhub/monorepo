import * as React from 'react';

// import MapContainer from './Map/MapContainer';
import Filters from './Filters/Filters';
import ListContainer from './List/ListContainer';

const HomePage = ({ data }) => (
  <div className="root">
    <div className="sidebar">
      <Filters />
    </div>
    <div id="map-wrap" className="map">
      {/* <MapContainer items={data} /> */}
      <ListContainer items={data} />
    </div>

    <style jsx={true}>{`
      .root {
        display: grid;
        grid-template-columns: 530px 1fr;
        grid-template-areas: 'sidebar map';
        height: calc(100vh - 64px);
      }

      .map {
        grid-area: map;
        overflow: auto;
        grid-area: map;
        overflow: auto;
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