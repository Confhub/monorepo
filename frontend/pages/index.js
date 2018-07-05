import React from 'react';
import { Layout } from 'antd';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MainContext from '../context/MainContext';
import Sidebar from '../components/home/Sidebar';

import ListComponent from '../components/home/List';

import 'mapbox-gl/dist/mapbox-gl.css';

import MapFragment from '../components/home/MapFragment';

const { Header } = Layout;

const GET_CONFERENCE_LIST = gql`
  query conferences($publishStatus: PUBLISH_STATUS!) {
    conferences(where: { publishStatus: $publishStatus }) {
      ...List
      ...Map
    }
  }
  ${ListComponent.fragments.items}
  ${MapFragment.fragments.items}
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
            <div className="home">
              <div className="header">
                <Header />
              </div>
              <MainContext.Provider>
                <div className="map">
                  <MapFragment items={data.conferences}  />
                </div>
                <div className="sidebar">
                  <Sidebar data={data.conferences} />
                </div>
              </MainContext.Provider>

              <style jsx>{`
                .home {
                  width: 100vw;
                  height: 100vh;
                  display: grid;
                  grid-template-columns: 1fr 450px;
                  grid-template-rows: 50px 1fr;
                  grid-template-areas:
                    'header header'
                    'map sidebar';
                }

                .header {
                  grid-area: header;
                }

                .map {
                  grid-area: map;
                }

                .sidebar {
                  grid-area: sidebar;
                  background-color: #fff;
                  overflow: scroll;
                }
              `}</style>
            </div>
          );
        }}
      </Query>
    );
  }
}
