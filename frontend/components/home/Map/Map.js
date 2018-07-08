import React, { Component } from 'react';
import MapGL from 'react-map-gl';

const mapboxApiAccessToken = process.env.MAPBOX_SECRET;

class Map extends Component {
  state = {
    viewport: {
      latitude: 37.7751,
      longitude: -122.4193,
      zoom: 11,
      bearing: 0,
      pitch: 0,
      width: 500,
      height: 500,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  onViewportChange = viewport =>
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });

  resize = () => {
    return this.onViewportChange({
      width: innerWidth >= 576 ? window.innerWidth - 440 : window.innerWidth,
      height: this.props.height || window.innerHeight,
    });
  };

  render() {
    const { viewport, settings } = this.state;

    return (
      <MapGL
        {...viewport}
        {...settings}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={this.onViewportChange}
        dragToRotate={false}
        mapboxApiAccessToken={mapboxApiAccessToken}
        className="root"
      />
    );
  }
}

export default Map;

// TODO: play with different map styles, for example: mapStyle="mapbox://styles/mapbox/dark-v9"
