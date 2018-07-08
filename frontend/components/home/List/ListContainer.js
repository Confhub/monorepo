// @flow

import * as React from 'react';
import gql from 'graphql-tag';

import List from './List';

export const LIST_FRAGMENT = gql`
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
`;

const ListContainer = ({ items }) => {
  return <List items={items} />;
};

export default ListContainer;
