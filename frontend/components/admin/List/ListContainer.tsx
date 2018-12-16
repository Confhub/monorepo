import { Switch } from 'antd';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

import { LIST_ITEM_FRAGMENT } from '../../home/List/ListContainer';
import ApproveList from './List';

const GET_CONFERENCES_LIST = gql`
  query conferences($publishStatus: PublishStatus) {
    conferences(sortBy: { publishStatus: $publishStatus }) {
      ...ListItem
    }
  }
  ${LIST_ITEM_FRAGMENT}
`;

class ListContainer extends React.Component {
  public state = {
    publishStatus: 'DRAFT',
  };

  public onStatusChange = () => {
    this.state.publishStatus === 'DRAFT'
      ? this.setState({ publishStatus: 'PUBLISHED' })
      : this.setState({ publishStatus: 'DRAFT' });
  };

  public render() {
    const { publishStatus } = this.state;

    const query = {
      query: GET_CONFERENCES_LIST,
      variables: { publishStatus },
    };

    return (
      <Query {...query}>
        {({ loading, error, data }) => (
          <React.Fragment>
            <Switch
              checkedChildren="Published"
              unCheckedChildren="Drafts"
              value={publishStatus}
              onChange={this.onStatusChange}
            />
            <div className="list-wrap">
              <ApproveList
                error={error}
                loading={loading}
                data={data.conferences}
                publishStatus={publishStatus}
                onStatusChange={this.onStatusChange}
                query={query}
                mutation={query}
              />
            </div>
            <style jsx={true}>{`
              .list-wrap {
                margin-top: 1.5em;
              }
            `}</style>
          </React.Fragment>
        )}
      </Query>
    );
  }
}

export default ListContainer;
