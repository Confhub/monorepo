import { List as AntList } from 'antd';
import * as React from 'react';

import ListItem from './ListItem';

const List = ({ items = [] }) => {
  return (
    <div className="list">
      {items.length ? (
        <React.Fragment>
          <h3>Found: {items.length} items</h3>
          <div className="list-grid">
            {items.map(i => (
              <ListItem key={i.id} item={i} />
            ))}
          </div>
          {/* <AntList
            itemLayout="vertical"
            dataSource={items}
            renderItem={item => <ListItem item={item} />}
          /> */}
        </React.Fragment>
      ) : (
        <h3>No data available :(</h3>
      )}
      <style jsx>{`
        .list {
          padding: 1em;
        }

        .list-grid {
          display: grid;
          grid-gap: 1em;
        }
      `}</style>
    </div>
  );
};

export default List;
