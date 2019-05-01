import React from 'react';
import styled from 'styled-components';

// import MapContainer from './Map/MapContainer';
import Filters from './Filters/Filters';
import List from './List/List';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 530px 1fr;
  grid-template-areas: 'sidebar map';
  height: calc(100vh - 64px);
`;

const Content = styled.div`
  grid-area: map;
  overflow: auto;
  grid-area: map;
  overflow: auto;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  overflow: scroll;
  padding: 0 20px;
`;

const HomePage = ({ data }) => (
  <Wrapper>
    <Sidebar>
      <Filters />
    </Sidebar>

    <Content id="map-wrap">
      {/* <MapContainer items={data} /> */}
      <List items={data} />
    </Content>
  </Wrapper>
);

export default HomePage;
