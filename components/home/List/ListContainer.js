// @flow

import * as React from 'react';
import gql from 'graphql-tag';

import List from './List';

import type { ListItem as ListItemType } from './__generated__/ListItem';

type Props = {
  items: ListItemType[],
};

export const LIST_ITEM_FRAGMENT = gql`
  fragment ListItem on Conference {
    publishStatus
    id
    name
    description
    startDate
    endDate
    url
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
    tags {
      id
      name
      slug
    }
  }
`;

const ListContainer = ({ items }: Props) => {
  return <List items={items} />;
};

export default ListContainer;
