import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Switch } from "antd";

import ApproveList from "./List";
import { LIST_ITEM_FRAGMENT } from "../../home/List/ListContainer";

const GET_CONFERENCES_LIST = gql`
  query conferences($publishStatus: PublishStatus) {
    conferences(sortBy: { publishStatus: $publishStatus }) {
      ...ListItem
    }
  }
  ${LIST_ITEM_FRAGMENT}
`;

class ListContainer extends React.Component<{}, {}> {
  state = {
    publishStatus: "DRAFT",
  };

  onStatusChange = () => {
    this.state.publishStatus === "DRAFT"
      ? this.setState({ publishStatus: "PUBLISHED" })
      : this.setState({ publishStatus: "DRAFT" });
  }

  render() {
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
            <style jsx>{`
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
