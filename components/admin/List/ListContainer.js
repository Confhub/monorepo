// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ApproveList from './List';
import { LIST_ITEM_FRAGMENT } from '../../home/List/ListContainer';

export const GET_UNPUBLISHED_CONFERENCES_LIST = gql`
  query unpublishedConferences {
    unpublishedConferences {
      ...ListItem
    }
  }
  ${LIST_ITEM_FRAGMENT}
`;

class ListContainer extends React.Component<{}, {}> {
  render() {
    return (
      <Query query={GET_UNPUBLISHED_CONFERENCES_LIST}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return <ApproveList data={data.unpublishedConferences} />;
        }}
      </Query>
    );
  }
}

export default ListContainer;
