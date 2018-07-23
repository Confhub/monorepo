// @flow

import * as React from 'react';
import { List as AntList } from 'antd';

import ListItem from './ListItem';

import type { ListItem as ListItemType } from './__generated__/ListItem';

type Props = {
  items: ListItemType[],
};

const List = ({ items = [] }: Props) => {
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
