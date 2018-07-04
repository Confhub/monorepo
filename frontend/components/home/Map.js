import React from 'react';
import mapboxgl from '../MapboxConstructor';
import MainContext from '../../context/MainContext';
import Head from 'next/head';

const { Map, Marker, Popup } = mapboxgl;

const DFAULT_MARKER_COLOR = '#3FB1CE';
const ACTIVE_MARKER_COLOR = 'red';

class MapContainer extends React.Component {
  state = {
    markers: null,
  };

  setLocation = () => {
    this.map.setCenter(this.props.location);
    this.map.setZoom(5);
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
      center: [30, 55],
      zoom: 3,
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

    if (prevProps.location !== this.props.location) {
      this.setLocation();
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
    {({ hoveredItem, items, location }) => (
      <MapContainer
        {...props}
        overedItem={hoveredItem}
        items={items}
        location={location}
      />
    )}
  </MainContext.Consumer>
);
