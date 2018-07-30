// @flow

import * as React from 'react';
import { List, Avatar } from 'antd';

import PublishConferenceButton from './PublishConferenceButton';
import DeleteConferenceButton from './DeleteConferenceButton';

type Props = {
  data: Object,
};

class ApproveList extends React.Component<Props> {
  render() {
    const { status, query, error, loading } = this.props;
    if (loading) {
      return 'Loading...';
    }
    if (error) {
      return `Error! ${error.message}`;
    }
    return (
      <div>
        <h3>Found {this.props.data.length} new conferences to review:</h3>
        <List
          itemLayout="horizontal"
          dataSource={this.props.data}
          renderItem={item => (
            <List.Item
              actions={[
                <a key="link">edit</a>,
                !status && (
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
                avatar={<Avatar src={item.image.src} />}
                title={<a href="https://ant.design">{item.name}</a>}
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
