import * as React from 'react';
import { Icon, Divider } from 'antd';

import { parseDateRange } from '../../helpers';

const ListItemDescription = ({ item }) => {
  const { location, startDate, endDate } = item;
  const { country, city } = location;

  return (
    <>
      <span>
        <Icon type="environment-o" /> {city}, {country}
      </span>
      <Divider type="vertical" />
      <span>
        <Icon type="calendar" /> {parseDateRange(startDate, endDate)}
      </span>
      <Divider type="vertical" />
      <span>{/*<Icon type="shopping-cart" /> {price.amount}€*/}</span>
    </>
  );
};

export default ListItemDescription;
