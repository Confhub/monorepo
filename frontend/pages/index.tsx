import gql from 'graphql-tag';
import { withRouter } from 'next/router';
import React from 'react';
import { Query } from 'react-apollo';

import FiltersProvider, {
  FiltersContext,
} from '../src/home/Filters/FiltersContext';
import HomePage from '../src/home/HomePage';
import { LIST_ITEM_FRAGMENT } from '../src/home/List/ListContainer';
// import { MAP_FRAGMENT } from '../components/home/Map/MapContainer';

import 'mapbox-gl/dist/mapbox-gl.css';

export const GET_CONFERENCE_LIST = gql`
  query conferences(
    # $location: LocationCoordinatesInput
    # $continent: String
    $tags: [String]
    $interval: Int
    $regions: [Region]
  ) {
    conferences(
      sortBy: {
        # location: { coordinates: $location, region: $region }
        publishStatus: PUBLISHED
        tags: $tags
        regions: $regions
        interval: $interval
      }
    ) {
      ...ListItem
      # ...Map
    }
  }
  ${LIST_ITEM_FRAGMENT}
`;

// ${MAP_FRAGMENT}

class HomePageContainer extends React.Component {
  public render() {
    const {
      tagValue,
      interval,
      regionValue,
      // mapViewport,
      // mapViewportActive
    } = this.props.context.state;
    // const { neLatitude, neLongitude, swLatitude, swLongitude } = mapViewport;

    return (
      <Query
        query={GET_CONFERENCE_LIST}
        variables={{
          tags: tagValue.map(tag => tag.slug || tag),
          interval: +interval,
          regions: regionValue.map(region => region.toUpperCase()),

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
  <FiltersProvider router={props.router}>
    <FiltersContext.Consumer>
      {context => <HomePageContainer {...props} context={context} />}
    </FiltersContext.Consumer>
  </FiltersProvider>
));
