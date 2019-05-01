import { withRouter } from 'next/router';
import React, { useContext } from 'react';

import { ConferencesComponent } from '../src/generated/graphql';
import FiltersProvider, {
  FiltersContext,
} from '../src/home/Filters/FiltersContext';
import HomePage from '../src/home/HomePage';

const IndexPage = () => {
  const context = useContext(FiltersContext);
  const {
    state: { tagValue, timePeriodValue, regionValue },
  } = context;

  return (
    <ConferencesComponent
      variables={{
        tags: tagValue.map(tag => tag.slug || tag),
        interval: +timePeriodValue,
        regions: regionValue.map(region => region.toUpperCase()),
      }}
    >
      {({ loading, error, data }) => {
        return (
          <HomePage
            loading={loading}
            error={error}
            data={data && data.conferences}
          />
        );
      }}
    </ConferencesComponent>
  );
};

export default withRouter(props => (
  <FiltersProvider router={props.router}>
    <IndexPage {...props} />
  </FiltersProvider>
));
