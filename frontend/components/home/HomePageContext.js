// @flow

import * as React from 'react';
import { getLocation } from '../helpers';

const { Provider, Consumer } = React.createContext();

// TODO: maybe save location to localstorage
class HomePageContextProvider extends React.Component {
  state = {
    hoveredItem: null,
    location: null,
    locationLoading: false,
    tags: [],
  };

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
  };

  setTags = tags => {
    this.setState({ tags });
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
    return <Provider value={context}>{this.props.children}</Provider>;
  }
}

export default {
  Provider: HomePageContextProvider,
  Consumer,
};
