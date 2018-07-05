import React from 'react';
import data from '../data/conf';
import { getLocation } from '../components/helpers';

const { Provider, Consumer } = React.createContext();

// TODO: maybe save lcoation to localstorage
class MainContextProvider extends React.Component {
  state = {
    hoveredItem: null,
    items: data,
    location: null,
    locationLoading: false,
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

  render() {
    const { hoveredItem, items, location, locationLoading } = this.state;
    const context = {
      onEnter: this.onEnter,
      onLeave: this.onLeave,
      getLocation: this.getLocation,
      setLocation: this.setLocation,
      hoveredItem,
      items,
      location,
      locationLoading,
    };
    return <Provider value={context}>{this.props.children}</Provider>;
  }
}

export default {
  Provider: MainContextProvider,
  Consumer,
};
