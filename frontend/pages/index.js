import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import { debounce } from 'lodash';

import HomePage from '../components/home/HomePage';
import { LIST_ITEM_FRAGMENT } from '../components/home/List/ListContainer';
import { MAP_FRAGMENT } from '../components/home/Map/MapContainer';
import HomePageContext from '../components/home/HomePageContext';
import { getLocation } from '../components/helpers';

export const GET_CONFERENCE_LIST = gql`
  query conferences($tags: [ID]) {
    conferencesFiltered(tags: $tags) {
      ...ListItem
      ...Map
    }
  }
  ${LIST_ITEM_FRAGMENT}
  ${MAP_FRAGMENT}
`;

// TODO: change array to object in location

class HomePageContainer extends React.Component<{}> {
  static async getInitialProps({ query }) {
    console.log('test');
    return { query };
  }

  constructor(props) {
    super(props);

    const { tags, long, lat } = this.props.query;
    const defaultTags = tags && (tags.length ? tags : [tags]);
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
    Router.push({
      pathname: '/',
      query: {
        ...Router.query,
        long,
        lat,
      },
    });
  };

  setLocationUrlDebounced = debounce(this.setLocationUrl, 1000);

  setTags = tags => {
    this.setState({ tags });
    Router.push({
      pathname: '/',
      query: {
        ...Router.query,
        tags,
      },
    });
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
      </HomePageContext.Provider>
    );
  }
}

export default HomePageContainer;
