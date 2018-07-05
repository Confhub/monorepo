import React from 'react';
import Search from './Search';
import List from './List';

const Sidebar = ({ data }) => {
  return (
    <div className="sidebar">
      <Search />
      <List items={data} />
    </div>
  );
};

export default Sidebar;
