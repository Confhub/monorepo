// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router, { withRouter } from 'next/router';
import debounce from 'lodash/debounce';

import HomePage from '../components/home/HomePage';
import { LIST_ITEM_FRAGMENT } from '../components/home/List/ListContainer';
import { MAP_FRAGMENT } from '../components/home/Map/MapContainer';
import HomePageContext from '../components/home/HomePageContext';
import { getLocation } from '../components/helpers';

import 'mapbox-gl/dist/mapbox-gl.css';

export const GET_CONFERENCE_LIST = gql`
  query conferences($tags: [String]) {
    filteredConferences(tags: $tags, published: true) {
      ...ListItem
      ...Map
    }
  }
  ${LIST_ITEM_FRAGMENT}
  ${MAP_FRAGMENT}
`;

// @TODO: change array to object in location

class HomePageContainer extends React.Component<{}> {
  static async getInitialProps({ router }) {
    return { router };
  }

  constructor(props) {
    super(props);

    const { tags, long, lat } = this.props.router.query;
    const defaultTags = tags && (typeof tags === 'string' ? [tags] : tags);
    const defaultLocation = long && lat ? [+long, +lat] : [25, 50];

    this.state = {
      hoveredItem: null,
      location: defaultLocation,
      locationLoading: false,
      tags: defaultTags || [],
    };
  }

  onEnter = id => {
    this.setState({
      hoveredItem: id,
    });
  };

  onLeave = id => {
    this.setState(prevState => ({
      hoveredItem: id === prevState.id ? null : prevState.id,
    }));
  };

  getLocation = async () => {
    this.setState({ locationLoading: true });
    const coordinates = await getLocation();
    this.setLocation(coordinates);
    this.setState({ locationLoading: false });
  };

  setLocation = location => {
    this.setState({ location });
    const [long, lat] = location.map(item => item.toFixed(2));
    this.setLocationUrlDebounced(long, lat);
  };

  setLocationUrl = (long, lat) => {
    const { tags } = Router.query;
    const href = {
      pathname: '/',
      query: {
        long,
        lat,
        ...(tags && { tags }),
      },
    };

    Router.push(href, href, { shallow: true });
  };

  setLocationUrlDebounced = debounce(this.setLocationUrl, 1000);

  setTags = tags => {
    this.setState({ tags });
    const { long, lat } = Router.query;
    const href = {
      pathname: '/',
      query: {
        ...(long && lat && { long, lat }),
        tags: tags.map(t => t.slug),
      },
    };
    Router.push(href, href, { shallow: true });
  };

  render() {
    const { hoveredItem, items, location, locationLoading, tags } = this.state;
    const context = {
      onEnter: this.onEnter,
      onLeave: this.onLeave,
      getLocation: this.getLocation,
      setLocation: this.setLocation,
      hoveredItem,
      items,
      location,
      locationLoading,
      tags,
      setTags: this.setTags,
    };

    return (
      <HomePageContext.Provider value={context}>
        <Query
          query={GET_CONFERENCE_LIST}
          variables={{ tags: tags.map(t => t.slug || t) }}
        >
          {({ loading, error, data }) => {
            return (
              <HomePage
                loading={loading}
                error={error}
                data={data && data.filteredConferences}
              />
            );
          }}
        </Query>
      </HomePageContext.Provider>
    );
  }
}

export default withRouter(HomePageContainer);
