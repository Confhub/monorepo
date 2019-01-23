import gql from 'graphql-tag';
import * as React from 'react';

import List from './List';

export interface Conference {
  id: string;
  name: string;
  description: string;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  image: {
    src: string;
    alt: string;
  };
  url: string;
  startDate: string;
  endDate: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  publishStatus: 'DRAFT' | 'PUBLISHED';
  location: {
    city: string;
    country: string;
  };
}

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
    # social {
    #   facebook
    #   twitter
    #   instagram
    # }
    publishStatus
    location {
      city
      country
    }
  }
`;

const ListContainer = ({ items }: { items: Conference[] }) => {
  return <List items={items} />;
};

export default ListContainer;
