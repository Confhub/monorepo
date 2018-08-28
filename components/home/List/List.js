import * as React from 'react';
import { List as AntList } from 'antd';

import ListItem from './ListItem';

const List = ({ items = [] }) => {
  return (
    <div className="list">
      {items.length ? (
        <React.Fragment>
          <h3>Found: {items.length} items</h3>
          <AntList
            itemLayout="vertical"
            dataSource={items}
            renderItem={item => <ListItem item={item} />}
          />
        </React.Fragment>
      ) : (
        <h3>
          No data available from the server. Please check what&apos;s wrong!
        </h3>
      )}
    </div>
  );
};

export default List;
