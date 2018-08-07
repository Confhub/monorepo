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

const ListContainer = ({ items }: Props) => {
  return <List items={items} />;
};

export default ListContainer;
