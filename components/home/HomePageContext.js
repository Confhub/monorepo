import * as React from 'react';
import Router from 'next/router';
import WebMercatorViewport from 'viewport-mercator-project';

export const HomePageContext = React.createContext();

export default class HomePageProvider extends React.Component {
  constructor(props) {
    super(props);
    const {
      tags,
      ne_lat, // North-East Latitude (The upper-left corner)
      ne_lng, // North-East Longitude (The upper-right corner)
      sw_lat, // South-West Latitude (The lower-left corner)
      sw_lng, // South-East Longitude (The lower-right corner)
      zoom, // The scale of a map
    } = props.router.query;

    this.state = {
      tags: (tags && tags.split(',')) || [],
      mapCenterCoordinates: {
        latitude: 46.366870009004,
        longitude: 6.662937741235142,
        zoom: 1.8809936544603247,
      },
      mapViewport: {
        neLatitude:
          (ne_lat && ne_lng && sw_lat && sw_lng && parseFloat(ne_lat)) ||
          70.25416955053973,
        neLongitude:
          (ne_lat && ne_lng && sw_lat && sw_lng && parseFloat(ne_lng)) ||
          92.56617725833974,
        swLatitude:
          (ne_lat && ne_lng && sw_lat && sw_lng && parseFloat(sw_lat)) ||
          4.726261975313662,
        swLongitude:
          (ne_lat && ne_lng && sw_lat && sw_lng && parseFloat(sw_lng)) ||
          -79.24030177586899,
        bearing: 0,
        pitch: 0,
        width: 900,
        height: 500,
      },
      locationLoading: false,
    };
  }

  render() {
    return (
      <HomePageContext.Provider
        value={{
          state: this.state,
          updateTags: tags => {
            this.setState({ tags }, () => {
              const { ne_lat, ne_lng, sw_lat, sw_lng } = Router.query;
              const href = {
                pathname: '/',
                query: {
                  ...(ne_lat &&
                    ne_lng &&
                    sw_lat &&
                    sw_lng && { ne_lat, ne_lng, sw_lat, sw_lng }),
                  ...(tags.length && {
                    tags: tags.map(tag => tag.slug).join(),
                  }),
                },
              };

              Router.push(href, href, { shallow: true });
            });
          },
          updateMapLocation: mapCenterCoordinates => {
            this.setState({ mapCenterCoordinates });
          },
          updateMapViewport: mapViewport => {
            this.setState({ mapViewport }, () => {
              const { tags } = Router.query;
              const href = {
                pathname: '/',
                query: {
                  ne_lat: mapViewport.neLatitude,
                  ne_lng: mapViewport.neLongitude,
                  sw_lat: mapViewport.swLatitude,
                  sw_lng: mapViewport.swLongitude,
                  zoom: mapViewport.zoom,
                  ...(tags && { tags }),
                },
              };

              Router.push(href, href, { shallow: true });
            });
          },
        }}
      >
        {this.props.children}
      </HomePageContext.Provider>
    );
  }
}
