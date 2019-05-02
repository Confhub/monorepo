import React, { useContext } from 'react';
import styled from 'styled-components';

import CheckboxGroup from 'components/checkboxGroup';
import TagSelector from 'components/tagSelector';
import {
  categoryOptions,
  intervalOptions,
  regionOptions,
} from './FilterOptions';
import { FiltersContext } from './FiltersContext';

const Wrapper = styled.div`
  padding: 1.5em 0;
`;

const Filters = () => {
  const context = useContext(FiltersContext);
  const {
    state: { categoryValue, tagValue, timePeriodValue, regionValue },
    actions: {
      updateCategoryValue,
      updateTagValue,
      updateTimePeriodValue,
      updateRegionValue,
    },
  } = context;

  return (
    <Wrapper>
      <h4>Categories</h4>
      <CheckboxGroup
        type="checkbox"
        onChange={updateCategoryValue}
        value={categoryValue}
      >
        {categoryOptions.map(category => (
          <CheckboxGroup.Option
            key={category.id}
            label={category.label}
            value={category.value}
            disabled={category.disabled}
          />
        ))}
      </CheckboxGroup>

      <h4>Tags</h4>
      <TagSelector
        optionKey="slug"
        value={tagValue}
        onChange={updateTagValue}
      />

      {/* <h4>Tags</h4>
      <CheckboxGroup
        type="checkbox"
        onChange={updateTimePeriodValue}
        value={timePeriodValue}
      >
        {intervalOptions.map(interval => (
          <CheckboxGroup.Option
            key={interval.id}
            label={interval.label}
            value={interval.value}
          />
        ))}
      </CheckboxGroup> */}

      <h4>Time period</h4>
      <CheckboxGroup
        type="radio"
        onChange={updateTimePeriodValue}
        value={timePeriodValue}
      >
        {intervalOptions.map(interval => (
          <CheckboxGroup.Option
            key={interval.id}
            label={interval.label}
            value={interval.value}
          />
        ))}
      </CheckboxGroup>

      <h4>Region</h4>
      <CheckboxGroup
        type="checkbox"
        value={regionValue}
        onChange={updateRegionValue}
      >
        {regionOptions.map(region => (
          <CheckboxGroup.Option
            key={region.id}
            label={region.label}
            value={region.value}
          />
        ))}
      </CheckboxGroup>
    </Wrapper>
  );
};

export default Filters;
