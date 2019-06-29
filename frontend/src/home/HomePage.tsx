import React from 'react';
import styled from 'styled-components';

// import MapContainer from './Map/MapContainer';
import { Conference } from '../../codegen/generated/graphql';
import List from '../../components/list';
import Filters from './Filters/Filters';

const Wrapper = styled.div`
  display: grid;
  margin: 0 300px;
  /* grid-template-columns: 1fr 1fr; */
  /* grid-template-columns: 530px 1fr; */
  /* grid-template-areas: 'sidebar map'; */
  /* height: calc(100vh - 64px); */
`;

const Content = styled.div`
  /* grid-area: map; */
  overflow: auto;
`;

const Sidebar = styled.div`
  /* grid-area: sidebar; */
  /* overflow: scroll; */
  /* padding: 0 20px; */
`;

const HomePage = ({ data }: { data: Conference[] }) => (
  <Wrapper>
    <Sidebar>
      <Filters />
    </Sidebar>

    <Content id="map-wrap">
      {/* <MapContainer items={data} /> */}
      <List>
        {data ? (
          <>
            {/* <List.Total totalAmount={data.length} /> */}

            {data.map(item => (
              <List.Item data={item} key={item.id} />
            ))}

            <List.Map />
          </>
        ) : (
          <List.Empty />
        )}
      </List>
    </Content>
  </Wrapper>
);

export default HomePage;
