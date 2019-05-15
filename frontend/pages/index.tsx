import { withRouter } from 'next/router';
import React, { useContext } from 'react';

import { ConferencesComponent, Tag } from '../codegen/generated/graphql';
import FiltersProvider, {
  FiltersContext,
} from '../src/home/Filters/FiltersContext';
import HomePage from '../src/home/HomePage';

const IndexPage = () => {
  const context = useContext(FiltersContext);
  const {
    // @ts-ignore
    state: { tagValue, timePeriodValue, regionValue },
  } = context;

  return (
    <ConferencesComponent
      variables={{
        tags: tagValue.map((tag: Tag) => tag.slug || tag),
        interval: +timePeriodValue,
        // @ts-ignore
        regions: regionValue.map(region => region.toUpperCase()),
      }}
    >
      {({ loading, error, data }) => {
        return (
          <HomePage
            loading={loading}
            error={error}
            // @ts-ignore
            data={data && data.conferences}
          />
        );
      }}
    </ConferencesComponent>
  );
};

export default withRouter(props => (
  // @ts-ignore
  <FiltersProvider router={props.router}>
    {/* 
    // @ts-ignore */}
    <IndexPage {...props} />
  </FiltersProvider>
));
