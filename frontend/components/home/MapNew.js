import React from 'react';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import gql from 'graphql-tag';
import { filter } from 'graphql-anywhere';
import MarkerIcon from './map/Marker';
import PopupComponent from './map/Popup';

class Map extends React.Component {
  state = {
    viewport: {
      latitude: 50,
      longitude: 25,
      zoom: 3,
      bearing: 0,
      pitch: 0,
      width: 400,
      height: 400,
    },
    popupInfo: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const map = document.getElementById('map-wrap');
    const { width, height } = map.getBoundingClientRect();

    this.setState({
      viewport: {
        ...this.state.viewport,
        width,
        height,
      },
    });
  };

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderMarker = item => {
    const { id, name, place } = item;
    const { latitude, longitude } = place.location.coordinates;
    return (
      <Marker key={id} longitude={longitude} latitude={latitude}>
        <MarkerIcon
          size={20}
          onClick={() => this.setState({ popupInfo: item })}
        />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    if (!popupInfo) {
      return;
    }
    const { latitude, longitude } = popupInfo.place.location.coordinates;

    return (
      <Popup
        tipSize={5}
        anchor="bottom"
        offsetTop={-25}
        longitude={longitude}
        latitude={latitude}
        onClose={() => this.setState({ popupInfo: null })}
      >
        <PopupComponent info={popupInfo} />
      </Popup>
    );
  }

  render() {
    const { viewport } = this.state;
    const { items } = this.props;

    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={process.env.MAPBOX_SECRET}
      >
        {items && items.map(this._renderMarker)}

        {this._renderPopup()}

        <div className="nav">
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>

        <style jsx>{`
          .nav {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px;
          }
        `}</style>
      </MapGL>
    );
  }
}

Map.fragments = {
  items: gql`
    fragment Map on Conference {
      id
      name
      place {
        location {
          coordinates {
            latitude
            longitude
          }
        }
      }
    }
  `,
};

export default Map;
