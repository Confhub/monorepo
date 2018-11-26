import * as React from 'react';
import Link from 'next/link';
import { List, Avatar } from 'antd';

import PublishConferenceButton from './PublishConferenceButton';
import DeleteConferenceButton from './DeleteConferenceButton';
import { setImageParams } from '../../helpers';
import { THUMBNAILS_OPTIONS } from '../../constants';

class ApproveList extends React.Component {
  render() {
    const { publishStatus, query, error, loading, data } = this.props;
    if (loading) {
      return 'Loading...';
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
                <Link
                  key="link"
                  href={{
                    pathname: '/edit-conference',
                    query: { id: item.id },
                  }}
                >
                  <a>edit</a>
                </Link>,
                publishStatus === 'DRAFT' && (
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
                avatar={
                  item.image && (
                    <Avatar
                      src={setImageParams(item.image.src, THUMBNAILS_OPTIONS)}
                    />
                  )
                }
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
