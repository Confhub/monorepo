import * as React from 'react';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import WebMercatorViewport from 'viewport-mercator-project';
import debounce from 'lodash/debounce';

import MarkerIcon from './Marker';
import PopupComponent from './Popup';
import { HomePageContext } from '../HomePageContext';

const MAPBOX_STYLE = 'mapbox://styles/mapbox/streets-v9';

const priceOptions = [
  { label: '💵 < $500', value: 'less-than-500' },
  { label: '💵 < $1000', value: 'less-than-1000' },
];

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  // componentDidMount() {
  //   window.addEventListener("resize", this._resize);
  //   this.resize();
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this._resize);
  // }

  // resize = () => {
  //   this.props.context.updateMapViewport({
  //     ...this.props.context.state.mapViewport,
  //     width: this.props.width || window.innerWidth,
  //     height: this.props.height || window.innerHeight
  //   });
  // };

  updateViewport = (mapViewport, bounds) => {
    this.props.context.updateMapViewport({
      ...mapViewport,
      ...bounds,
    });
  };

  onViewportChange = mapViewport => {
    const { _ne, _sw } = this.mapRef.current.getMap().getBounds();
    const bounds = {
      neLatitude: _ne.lat,
      neLongitude: _ne.lng,
      swLatitude: _sw.lat,
      swLongitude: _sw.lng,
    };

    this.props.context.updateMapLocation({
      latitude: mapViewport.latitude,
      longitude: mapViewport.longitude,
      zoom: mapViewport.zoom,
    });

    this.updateViewportDebounced(mapViewport, bounds);
  };

  updateViewportDebounced = debounce(this.updateViewport, 500);

  renderMarker = item => {
    const { id, location } = item;
    const { latitude, longitude } = location.coordinates;
    return (
      <Marker key={id} longitude={longitude} latitude={latitude}>
        <MarkerIcon
          size={20}
          onClick={() => this.setState({ popupInfo: item })}
          onHover={this.onHover}
        />
      </Marker>
    );
  };

  // renderPopup() {
  //   const { popupInfo } = this.state;

  //   if (!popupInfo) {
  //     return;
  //   }
  //   const { latitude, longitude } = popupInfo.place.location.coordinates;
  //   console.log("23234234234234234234", { latitude, longitude });

  //   return (
  //     <Popup
  //       tipSize={5}
  //       anchor="bottom"
  //       offsetTop={-25}
  //       longitude={longitude}
  //       latitude={latitude}
  //       onClose={() => this.setState({ popupInfo: null })}
  //     >
  //       <PopupComponent info={popupInfo} />
  //     </Popup>
  //   );
  // }

  render() {
    const { items, context } = this.props;
    const { mapViewport, mapCenterCoordinates } = context.state;

    const { longitude, latitude, zoom } = new WebMercatorViewport(
      mapViewport,
    ).fitBounds(
      [
        [mapViewport.neLongitude, mapViewport.neLatitude],
        [mapViewport.swLongitude, mapViewport.swLatitude],
      ],
      {
        padding: 20,
        offset: [0, -100],
      },
    );

    console.log(longitude, latitude, zoom);
    console.log({ mapViewport });
    return (
      <MapGL
        {...mapViewport}
        longitude={mapCenterCoordinates.longitude}
        latitude={mapCenterCoordinates.latitude}
        zoom={mapCenterCoordinates.zoom}
        mapStyle={MAPBOX_STYLE}
        onViewportChange={this.onViewportChange}
        mapboxApiAccessToken={process.env.MAPBOX_SECRET}
        ref={this.mapRef}
      >
        {items && items.map(this.renderMarker)}

        {/* {this.renderPopup()} */}

        <div className="nav">
          <NavigationControl
            onViewportChange={this.onViewportChange}
            showCompass={false}
          />
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
    {context => <Map {...props} context={context} />}
  </HomePageContext.Consumer>
);
