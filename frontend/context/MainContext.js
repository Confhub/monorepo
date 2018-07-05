import React from 'react';
import data from '../data/conf';

const { Provider, Consumer } = React.createContext();

// TODO: maybe save lcoation to localstorage
class MainContextProvider extends React.Component {
  state = {
    hoveredItem: null,
    items: data,
    location: null,
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

  getLocation = () => {
    const success = position => {
      const { longitude, latitude } = position.coords;
      this.setLocation([longitude, latitude]);
    };

    const error = err => {
      console.log(err);
    };

    const options = {
      maximumAge: 5 * 60 * 1000,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  setLocation = location => {
    this.setState({ location });
  };

  render() {
    const { hoveredItem, items, location } = this.state;
    const context = {
      onEnter: this.onEnter,
      onLeave: this.onLeave,
      getLocation: this.getLocation,
      setLocation: this.setLocation,
      hoveredItem,
      items,
      location,
    };
    return <Provider value={context}>{this.props.children}</Provider>;
  }
}

export default {
  Provider: MainContextProvider,
  Consumer,
};
