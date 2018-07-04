import React from 'react';
import Search from './Search';
import List from './List';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search />
      <List />
    </div>
  );
};

export default Sidebar;
