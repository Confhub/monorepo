// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Switch } from 'antd';

import ApproveList from './List';
import { LIST_ITEM_FRAGMENT } from '../../home/List/ListContainer';

const GET_CONFERENCES_LIST = gql`
  query conferencesFiltered($published: Boolean) {
    conferencesFiltered(published: $published) {
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

    const query = {
      query: GET_CONFERENCES_LIST,
      variables: { published: status },
    };

    return (
      <Query {...query}>
        {({ loading, error, data }) => {
          return (
            <React.Fragment>
              <Switch
                checkedChildren="Published"
                unCheckedChildren="Unpublished"
                value={status}
                onChange={this.onStatusChange}
              />
              <div className="list-wrap">
                <ApproveList
                  error={error}
                  loading={loading}
                  data={data.conferencesFiltered}
                  status={status}
                  onStatusChange={this.onStatusChange}
                  query={query}
                  mutation={query}
                />
              </div>
              <style jsx>{`
                .list-wrap {
                  margin-top: 1.5em;
                }
              `}</style>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default ListContainer;
