import * as React from "react";
import { List, Avatar } from "antd";

import PublishConferenceButton from "./PublishConferenceButton";
import DeleteConferenceButton from "./DeleteConferenceButton";

type Props = {
  data: Object,
};

class ApproveList extends React.Component<Props> {
  render() {
    const { publishStatus, query, error, loading, data } = this.props;
    if (loading) {
      return "Loading...";
    }

    if (error) {
      return `Error! ${error.message}`;
    }

    return (
      <div>
        <h3>Found {data.length} new conferences to review:</h3>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[
                <a key="link">edit</a>,
                publishStatus === "DRAFT" && (
                  <PublishConferenceButton
                    key="button"
                    id={item.id}
                    query={query}
                  />
                ),
                <DeleteConferenceButton
                  key="button"
                  id={item.id}
                  query={query}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={item.image && <Avatar src={item.image.src} />}
                title={<a href={item.url}>{item.name}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default ApproveList;
