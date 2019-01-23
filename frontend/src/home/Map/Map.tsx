import debounce from 'lodash/debounce';
import * as React from 'react';
import MapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
// import WebMercatorViewport from 'viewport-mercator-project';

import MarkerIcon from './Marker';
// import PopupComponent from './Popup';

const MAPBOX_STYLE = 'mapbox://styles/mapbox/streets-v9';

const WIDTH_OFFSET = 530;
const HEIGHT_OFFSET = 64;

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();

    // console.log({
    //   ...this.props.context.state.mapViewport,
    //   ...this.props.context.state.mapCenterCoordinates
    // });

    const { width, height } = this.getSize();
    this.props.context.updateMapSize({ width, height });
  }

  public componentDidMount() {
    // this.props.context.updateMapSize(
    //   {
    //     ...this.props.context.state.mapViewport,
    //     ...this.props.context.state.mapCenterCoordinates
    //   },
    //   this.updateBounds()
    // );

    window.onresize = () => {
      const { width, height } = this.getSize();
      this.props.context.updateMapSize({ width, height });
    };
  }

  // componentWillUnmount() {
  //   window.onresize = null;
  // }

  public getSize() {
    const { innerWidth, innerHeight } = window;

    return {
      width: innerWidth >= 576 ? innerWidth - WIDTH_OFFSET : innerWidth,
      height: innerHeight - HEIGHT_OFFSET,
    };
  }

  public updateViewport = (mapViewport, bounds) => {
    this.props.context.updateMapViewport({
      ...mapViewport,
      ...bounds,
    });
  };

  public updateBounds = () => {
    const { _ne, _sw } = this.mapRef.current.getMap().getBounds();

    return {
      neLatitude: _ne.lat,
      neLongitude: _ne.lng,
      swLatitude: _sw.lat,
      swLongitude: _sw.lng,
    };
  };

  public onViewportChange = mapViewport => {
    this.props.context.updateMapPosition({
      latitude: mapViewport.latitude,
      longitude: mapViewport.longitude,
      zoom: mapViewport.zoom,
    });

    this.props.context.state.mapViewportActive &&
      this.updateViewportDebounced(mapViewport, this.updateBounds());
  };

  public updateViewportDebounced = debounce(this.updateViewport, 500);

  public renderMarker = item => {
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

  public render() {
    const { items, context } = this.props;
    const { mapViewport, mapCenterCoordinates } = context.state;

    // const { longitude, latitude, zoom } = new WebMercatorViewport(
    //   mapViewport
    // ).fitBounds(
    //   [
    //     [mapViewport.neLongitude, mapViewport.neLatitude],
    //     [mapViewport.swLongitude, mapViewport.swLatitude]
    //   ],
    //   {
    //     padding: 20,
    //     offset: [0, -100]
    //   }
    // );

    // console.log(longitude, latitude, zoom);
    // console.log({ mapViewport });

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

        <style jsx={true}>{`
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

export default Map;
