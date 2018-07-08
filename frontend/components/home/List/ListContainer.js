import React from 'react';
import gql from 'graphql-tag';

import List from './List';

const ListContainer = ({ items }) => {
  return <List items={items} />;
};

ListContainer.fragments = {
  items: gql`
    fragment List on Conference {
      publishStatus
      id
      name
      description
      startDate
      endDate
      place {
        name
        location {
          country
          city
          street
          zip
        }
      }
      image {
        alt
        src
      }
      topics {
        id
      }
      price {
        amount
      }
    }
  `,
};

export default ListContainer;
