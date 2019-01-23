import filter from 'lodash.filter';
import includes from 'lodash.includes';
import Router, { SingletonRouter } from 'next/router';
import React, { useState } from 'react';

import { Tag } from '../../components/tagSelector/TagSelector';

interface Props {
  router: SingletonRouter;
  children: React.ReactNode;
}

export const FiltersContext = React.createContext({});

const FiltersProvider = ({ router, children }: Props) => {
  const { tags, period, regions } = router.query;
  const [state, setState] = useState({
    categoryValue: ['tech'],
    tagValue: (tags && tags.split(',')) || [],
    timePeriodValue: period || null,
    regionValue: (regions && regions.split(',')) || [],
  });

  const updateCategoryValue = () => null;

  const updateTagValue = (tags: Tag[] | []) => {
    setState({ ...state, tagValue: tags });
  };

  const updateTimePeriodValue = (timePeriodValue: string | null) => {
    if (state.timePeriodValue && state.timePeriodValue === timePeriodValue) {
      const { period: oldPeriod, ...query } = Router.query;

      setState({ ...state, timePeriodValue: null });
      setUrl({
        ...query,
      });
      return;
    }

    setState({ ...state, timePeriodValue });
    setUrl({
      ...Router.query,
      ...(timePeriodValue && {
        period: timePeriodValue,
      }),
    });
  };

  const updateRegionValue = (regionValue: string) => {
    // const { regions: oldRegions, ...query } = Router.query;

    setState({
      ...state,
      regionValue: includes(state.regionValue, regionValue)
        ? filter(state.regionValue, item => item !== regionValue)
        : [...state.regionValue, regionValue],
    });

    setUrl({
      ...Router.query,
      // ...(regionValue.length && {
      //   regions: regions.join(),
      // }),
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        state,
        actions: {
          updateCategoryValue,
          updateTagValue,
          updateTimePeriodValue,
          updateRegionValue,
        },
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

const setUrl = (query: object) => {
  const href = {
    pathname: '/',
    query,
  };

  Router.push(href, href);
};

export default FiltersProvider;

// TODO: Add map to the filters

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

// const updateMapPosition = mapCenterCoordinates => {
//   setState({ ...state, mapCenterCoordinates });
// };

// const updateMapSize = mapSize => {
//   setState({
//     ...state,
//     mapViewport: { ...this.state.mapViewport, ...mapSize },
//   });
// };

// const updateMapViewport = mapViewport => {
//   setState({ ...state, mapViewport });
// };
