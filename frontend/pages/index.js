// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import HomePage from '../components/home/HomePage';
import { LIST_ITEM_FRAGMENT } from '../components/general/List/ListContainer';
import { MAP_FRAGMENT } from '../components/home/Map/Map';

import 'mapbox-gl/dist/mapbox-gl.css';

const GET_CONFERENCE_LIST = gql`
  query conferences($publishStatus: PUBLISH_STATUS!) {
    conferences(where: { publishStatus: $publishStatus }) {
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
      <Query
        query={GET_CONFERENCE_LIST}
        variables={{ publishStatus: 'PUBLISHED' }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return <HomePage data={data.conferences} />;
        }}
      </Query>
    );
  }
}

export default HomePageContainer;
