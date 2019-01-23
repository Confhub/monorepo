import Router from 'next/router';
import React from 'react';
// import WebMercatorViewport from 'viewport-mercator-project';

export const FiltersContext = React.createContext({});

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

class FiltersProvider extends React.Component {
  constructor(props) {
    super(props);
    const { tags, location, interval, regions } = props.router.query;

    this.state = {
      // mapCenterCoordinates: {
      //   latitude: 46.366870009004,
      //   longitude: 6.662937741235142,
      //   zoom: 4.099026990316624, // The scale of a map
      // },
      // mapViewportActive: location ? false : true,
      // mapViewport: {
      //   neLatitude: 70.25416955053973, // North-East Latitude (The upper-left corner)
      //   neLongitude: 92.56617725833974, // North-East Longitude (The upper-right corner)
      //   swLatitude: 4.726261975313662, // South-West Latitude (The lower-left corner)
      //   swLongitude: -79.24030177586899, // South-East Longitude (The lower-right corner)
      //   bearing: 0,
      //   pitch: 0,
      //   width: 500,
      //   height: 500,
      // },
      // locationLoading: false,

      interval: interval && null,
      categoryValue: ['tech'],
      tagValue: (tags && tags.split(',')) || [],
      regionValue: (regions && regions.split(',')) || [],
    };
  }

  public setUrl(query: object) {
    const href = {
      pathname: '/',
      query,
    };

    Router.push(href, href);
  }

  public render() {
    return (
      <FiltersContext.Provider
        value={{
          state: this.state,
          functions: {
            updateTagValue: (tags: Tag[]) => {
              this.setState({ tags }, () => {
                const { location } = Router.query;
                const href = {
                  pathname: '/',
                  query: {
                    ...(location && { location }),
                    ...(tags.length && {
                      tags: tags.map(tag => tag.slug).join(),
                    }),
                  },
                };

                Router.push(href, href, { shallow: true });
              });
            },
            updateInterval: (interval: string | null) => {
              const { interval: oldInterval, ...query } = Router.query;

              this.setState({ interval });

              this.setUrl({
                ...query,
                ...(interval && {
                  interval,
                }),
              });
            },
            updateRegionValue: (regions: string[]) => {
              const { regions: oldRegions, ...query } = Router.query;

              this.setState({ regions });

              this.setUrl({
                ...query,
                ...(regions.length && {
                  regions: regions.join(),
                }),
              });
            },
            // updateMapPosition: mapCenterCoordinates => {
            //   this.setState({ mapCenterCoordinates });
            // },
            // updateMapSize: mapSize => {
            //   this.setState({
            //     mapViewport: { ...this.state.mapViewport, ...mapSize },
            //   });
            // },
            // updateMapViewport: mapViewport => {
            //   this.setState({ mapViewport });
            // },
          },
        }}
      >
        {this.props.children}
      </FiltersContext.Provider>
    );
  }
}

export default FiltersProvider;
