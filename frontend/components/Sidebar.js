import React from 'react';
import MainContext from '../context/MainContext';
import Search from './Search';
import { List } from 'antd';

const Sidebar = () => {
  return (
    <MainContext.Consumer>
      {({ onEnter, onLeave, items }) => (
        <div className="sidebar">
          <Search />
          <List
            itemLayout="vertical"
            dataSource={items}
            renderItem={item => (
              <List.Item
                key={item.id}
                onMouseEnter={() => onEnter(item.id)}
                onMouseLeave={() => onLeave(item.id)}
              >
                {item.name}
              </List.Item>
            )}
          />
        </div>
      )}
    </MainContext.Consumer>
  );
};

export default Sidebar;
