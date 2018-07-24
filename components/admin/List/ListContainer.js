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

export const GET_PUBLISHED_CONFERENCES_LIST = gql`
  query publishedConferences {
    publishedConferences {
      ...ListItem
    }
  }
  ${LIST_ITEM_FRAGMENT}
`;

class ListContainer extends React.Component<{}, {}> {
  state = {
    status: false,
  };

  onStatusChange = status => {
    this.setState({ status });
  };

  render() {
    const { status } = this.state;
    const query = status
      ? GET_PUBLISHED_CONFERENCES_LIST
      : GET_UNPUBLISHED_CONFERENCES_LIST;
    return (
      <Query query={query}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <ApproveList
              data={data.publishedConferences || data.unpublishedConferences}
              status={status}
              onStatusChange={this.onStatusChange}
              query={query}
            />
          );
        }}
      </Query>
    );
  }
}

export default ListContainer;
