import * as React from 'react';
import gql from 'graphql-tag';

import List from './List';

export const LIST_ITEM_FRAGMENT = gql`
  fragment ListItem on Conference {
    id
    name
    description
    tags {
      id
      name
      slug
    }
    image {
      src
      alt
    }
    url
    startDate
    endDate
    social {
      facebook
      twitter
      instagram
    }
    publishStatus
  }
`;

const ListContainer = ({ items }) => {
  return <List items={items} />;
};

export default ListContainer;
