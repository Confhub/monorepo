import * as React from 'react';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import MarkerIcon from './Marker';
import PopupComponent from './Popup';
import HomePageContext from '../HomePageContext';

class Map extends React.Component {
  state = {
    viewport: {
      zoom: 3,
      bearing: 0,
      pitch: 0,
      width: 400,
      height: 400,
    },
    popupInfo: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
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

  updateViewport = ({ longitude, latitude, ...viewport }) => {
    this.setState({ viewport });
    this.props.setLocation([longitude, latitude]);
  };

  renderMarker = item => {
    const { id, place } = item;
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

  renderPopup() {
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
    const { items, location } = this.props;
    const [longitude, latitude] = location;

    process.env.MAPBOX_SECRET

    return (
      <MapGL
        {...viewport}
        longitude={longitude}
        latitude={latitude}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={this.updateViewport}
        mapboxApiAccessToken={process.env.MAPBOX_SECRET}
      >
        {items && items.map(this.renderMarker)}

        {this.renderPopup()}

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

export default props => (
  <HomePageContext.Consumer>
    {({ location, setLocation }) => (
      <Map {...props} location={location} setLocation={setLocation} />
    )}
  </HomePageContext.Consumer>
);
