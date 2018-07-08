// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import HomePage from '../components/home/HomePage';
import { LIST_ITEM_FRAGMENT } from '../components/general/List/ListContainer';
import { MAP_FRAGMENT } from '../components/home/Map/Map';
import HomePageContext from '../components/home/HomePageContext';

import 'mapbox-gl/dist/mapbox-gl.css';

const GET_CONFERENCE_LIST = gql`
  query conferences($tags: [String]) {
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
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                console.log(data);

                return <HomePage data={data.conferencesFiltered} />;
              }}
            </Query>
          )}
        </HomePageContext.Consumer>
      </HomePageContext.Provider>
    );
  }
}

export default HomePageContainer;
