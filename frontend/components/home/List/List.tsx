import { List as AntList } from 'antd';
import * as React from 'react';

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
        <h3>No data available :(</h3>
      )}
    </div>
  );
};

export default List;
