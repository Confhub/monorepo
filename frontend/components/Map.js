import React from 'react';
import mapboxgl from './MapboxConstructor';
import MainContext from '../context/MainContext';
import Head from 'next/head';

const { Map, Marker, Popup } = mapboxgl;

const DFAULT_MARKER_COLOR = '#3FB1CE';
const ACTIVE_MARKER_COLOR = 'red';

class MapContainer extends React.Component {
  state = {
    markers: null,
  };

  setLocation = () => {
    const success = position => {
      const { longitude, latitude } = position.coords;
      this.map.setCenter([longitude, latitude]);
    };

    const error = err => {
      console.log(err);
    };

    const options = {
      maximumAge: 5 * 60 * 1000,
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  setMarkers = () => {
    const markers = this.props.items.map(item => {
      const {
        name,
        location: { latitude, longtitude },
      } = item;
      const popup = new Popup().setText(name);

      popup.on('open', () => {
        // console.log(name)
      });

      const marker = new Marker()
        .setLngLat([longtitude, latitude])
        .setPopup(popup)
        .addTo(this.map);

      return {
        id: item.id,
        instance: marker,
      };
    });

    this.setState({ markers });
  };

  removeMarkers = () => {
    this.state.markers.forEach(item => item.instance.remove());
    this.setState({ markers: null });
  };

  componentDidMount() {
    this.map = new Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [14.3857148, 50.0713951],
      zoom: 4,
    });

    // this.setLocation();
    this.setMarkers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hoveredItem !== this.props.hoveredItem) {
      this.setMarkerActive(this.props.hoveredItem, prevProps.hoveredItem);
    }

    if (prevProps.items !== this.props.items) {
      this.removeMarkers();
      this.setMarkers();
    }
  }

  setMarkerActive = (current, previous) => {
    const toggleMarker = (id, markers) => {
      const marker = markers.find(item => item.id === id);
      if (marker) {
        marker.instance.togglePopup();
      }
    };
    const { markers } = this.state;

    if (current) {
      toggleMarker(current, markers);
    }

    if (previous) {
      toggleMarker(previous, markers);
    }
  };

  render() {
    return (
      <div className="root" id="map">
        <Head>
          <title>My page title 2</title>
        </Head>
        <style jsx>{`
          .root {
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default props => (
  <MainContext.Consumer>
    {({ hoveredItem, items }) => (
      <MapContainer {...props} hoveredItem={hoveredItem} items={items} />
    )}
  </MainContext.Consumer>
);
