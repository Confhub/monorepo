import { useContext } from 'react';

import {
  useConferencesQuery,
  Region,
  Tag,
} from '../../../codegen/generated/graphql';
import ErrorMessage from '../../../components/ErrorMessage';
import List from '../../../components/list';
import { FiltersContext } from '../../../src/home/Filters/FiltersContext';
import { Wrapper } from './styles';

const Content = () => {
  const {
    state: { tagValue, timePeriodValue, regionValue },
  } = useContext(FiltersContext);

  const { data, loading, error } = useConferencesQuery({
    variables: {
      ...(tagValue && { tags: tagValue.map((tag: Tag) => tag.slug || tag) }),
      ...(timePeriodValue && { interval: +timePeriodValue }),
      ...(regionValue && {
        regions: regionValue.map((region: Region) => region.toUpperCase()),
      }),
    },
  });

  if (error) {
    return <ErrorMessage message="Error loading tags." />;
  }
  if (loading) {
    return <div>Loading</div>;
  }

  if (data) {
    return (
      <Wrapper id="map-wrap">
        {/* <MapContainer items={data} /> */}
        <List.Total totalAmount={data.conferences.length} />

        <List>
          <>
            {data.conferences.map(item => (
              // @ts-ignore
              <List.Item data={item} key={item.id} />
            ))}

            <List.Map />
          </>
        </List>
      </Wrapper>
    );
  }

  return <List.Empty />;
};

export default Content;
