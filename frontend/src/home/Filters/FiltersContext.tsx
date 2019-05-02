import filter from 'lodash/filter';
import includes from 'lodash/includes';
import Router, { SingletonRouter } from 'next/router';
import React, { useState } from 'react';

import { Tag } from '../../../components/tagSelector/TagSelector';
import { setUrl } from './helpers';

interface Props {
  router: SingletonRouter;
  children: React.ReactNode;
}

interface Context {
  state: {
    categoryValue: string[];
    tagValue: string[];
    timePeriodValue: string;
    regionValue: string[];
  };
  actions: {
    updateCategoryValue: () => void;
    updateTagValue: (tagValue: Tag[] | []) => void;
    updateTimePeriodValue: (timePeriodValue: string | null) => void;
    updateRegionValue: (regionValue: string) => void;
  };
}

export const FiltersContext = React.createContext<Context>(null);

const FiltersProvider = ({ router, children }: Props) => {
  const { tags, period, regions } = router.query;
  const [state, setState] = useState({
    categoryValue: ['tech'],
    tagValue: (tags && typeof tags === 'string' && tags.split(',')) || [],
    timePeriodValue: (typeof period === 'string' && period) || null,
    regionValue:
      (regions && typeof regions === 'string' && regions.split(',')) || [],
  });

  const updateCategoryValue = () => null;

  const updateTagValue = (tagValue: Tag[] | []) => {
    // console.log({ tagValue });
    setState({ ...state, tagValue });
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
    const { regions: oldRegions, ...query } = Router.query;
    const updatedRegionValue = includes(state.regionValue, regionValue)
      ? filter(state.regionValue, item => item !== regionValue)
      : [...state.regionValue, regionValue];

    setState({
      ...state,
      regionValue: updatedRegionValue,
    });

    setUrl({
      ...query,
      ...(updatedRegionValue.length && {
        regions: updatedRegionValue.join(),
      }),
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
