import gql from 'graphql-tag';
import { withRouter } from 'next/router';
import * as React from 'react';
import { Query } from 'react-apollo';

import HomePage from '../components/home/HomePage';
import HomePageProvider, {
  HomePageContext,
} from '../components/home/HomePageContext';
import { LIST_ITEM_FRAGMENT } from '../components/home/List/ListContainer';
import { MAP_FRAGMENT } from '../components/home/Map/MapContainer';

import 'mapbox-gl/dist/mapbox-gl.css';

export const GET_CONFERENCE_LIST = gql`
  query conferences(
    $tags: [String]
    $location: LocationCoordinatesInput
    $continent: String
  ) {
    conferences(
      sortBy: {
        publishStatus: PUBLISHED
        tags: $tags
        location: { coordinates: $location, continent: $continent }
      }
    ) {
      ...ListItem
      ...Map
    }
  }
  ${LIST_ITEM_FRAGMENT}
  ${MAP_FRAGMENT}
`;

class HomePageContainer extends React.Component {
  public render() {
    const { tags, mapViewport, mapViewportActive } = this.props.context.state;
    const { neLatitude, neLongitude, swLatitude, swLongitude } = mapViewport;

    return (
      <Query
        query={GET_CONFERENCE_LIST}
        variables={{
          tags: tags.map(tag => tag.slug || tag),
          // TODO: UNCOMENT after implementing Map
          // ...(mapViewportActive
          //   ? {
          //       location: { neLatitude, neLongitude, swLatitude, swLongitude },
          //     }
          //   : { continent: 'Europe' }),
        }}
      >
        {({ loading, error, data }) => {
          return (
            <HomePage
              loading={loading}
              error={error}
              data={data && data.conferences}
            />
          );
        }}
      </Query>
    );
  }
}

export default withRouter(props => (
  <HomePageProvider router={props.router}>
    <HomePageContext.Consumer>
      {context => <HomePageContainer {...props} context={context} />}
    </HomePageContext.Consumer>
  </HomePageProvider>
));
