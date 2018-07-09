// @flow

import * as React from 'react';
import { List as AntList } from 'antd';

import ListItem from './ListItem';

import type { ListItem as ListItemType } from './__generated__/ListItem.js';

type Props = {
  items: ListItemType[],
};

const List = ({ items }: Props) => {
  return (
    <div className="list">
      <h3>Found: {items.length} items</h3>
      <AntList
        itemLayout="vertical"
        dataSource={items}
        renderItem={item => <ListItem item={item} />}
      />
    </div>
  );
};

export default List;
