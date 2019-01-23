import Router from 'next/router';
import React, { useState } from 'react';

import { Tag } from '../../components/tagSelector/TagSelector';

export const FiltersContext = React.createContext({});

const FiltersProvider = ({ router, children }) => {
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
      setState({ ...state, timePeriodValue: null });
      setUrl({
        ...Router.query,
        period,
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

  const updateRegionValue = (regions: string[] | []) => {
    const { regions: oldRegions, ...query } = Router.query;

    this.setState({ regions });

    this.setUrl({
      ...query,
      ...(regions.length && {
        regions: regions.join(),
      }),
    });
  };

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
