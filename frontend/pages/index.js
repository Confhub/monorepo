// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import HomePage from '../components/home/HomePage';
import { LIST_ITEM_FRAGMENT } from '../components/general/List/ListContainer';
import { MAP_FRAGMENT } from '../components/home/Map/MapContainer';
import HomePageContext from '../components/home/HomePageContext';

import 'mapbox-gl/dist/mapbox-gl.css';

const GET_CONFERENCE_LIST = gql`
  query conferences($tags: [ID]) {
    conferencesFiltered(tags: $tags) {
      ...ListItem
      ...Map
    }
  }
  ${LIST_ITEM_FRAGMENT}
  ${MAP_FRAGMENT}
`;

class HomePageContainer extends React.Component<{}> {
  render() {
    return (
      <HomePageContext.Provider>
        <HomePageContext.Consumer>
          {({ tags }) => (
            <Query query={GET_CONFERENCE_LIST} variables={{ tags }}>
              {({ loading, error, data }) => {
                return (
                  <HomePage
                    loading={loading}
                    error={error}
                    data={data && data.conferencesFiltered}
                  />
                );
              }}
            </Query>
          )}
        </HomePageContext.Consumer>
      </HomePageContext.Provider>
    );
  }
}

export default HomePageContainer;
