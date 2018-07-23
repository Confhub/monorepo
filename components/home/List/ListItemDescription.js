// @flow

import * as React from 'react';
import { Icon, Divider } from 'antd';

import { parseDateRange } from '../../helpers';

import type { ListItem as ListItemType } from './__generated__/ListItem';

type Props = {
  item: ListItemType,
};

const ListItemDescription = ({ item }: Props) => {
  const { place, startDate, endDate, price } = item;
  const { location } = place;
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
      <span>
        <Icon type="shopping-cart" /> {price.amount}€
      </span>
    </>
  );
};

export default ListItemDescription;
