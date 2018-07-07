import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MainContext from '../context/MainContext';
import Sidebar from '../components/home/Sidebar';
import List from '../components/home/List';
import MapContainer from '../components/home/MapContainer';

import 'mapbox-gl/dist/mapbox-gl.css';

const GET_CONFERENCE_LIST = gql`
  query conferences($publishStatus: PUBLISH_STATUS!) {
    conferences(where: { publishStatus: $publishStatus }) {
      ...List
      ...Map
    }
  }
  ${List.fragments.items}
  ${MapContainer.fragments.items}
`;

export default class Hello extends React.Component {
  render() {
    return (
      <Query
        query={GET_CONFERENCE_LIST}
        variables={{ publishStatus: 'PUBLISHED' }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <MainContext.Provider>
              <div className="root">
                <div className="map">
                  <MapContainer items={data.conferences} />
                </div>
                <div className="sidebar">
                  <Sidebar data={data.conferences} />
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
            </MainContext.Provider>
          );
        }}
      </Query>
    );
  }
}
