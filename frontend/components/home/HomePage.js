// @flow

import * as React from 'react';

import HomePageContext from './HomePageContext';
import Search from './Search/Search';
import ListContainer from './List/ListContainer';
import MapContainer from './MapDepricated/MapContainer';

const HomePage = ({ data }) => (
  <HomePageContext.Provider>
    <div className="root">
      <div className="map">
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
  </HomePageContext.Provider>
);

export default HomePage;
