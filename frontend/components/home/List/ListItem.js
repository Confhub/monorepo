// @flow

import * as React from 'react';
import Link from 'next/link';
import { List as AntList, Icon, Tag, Divider, Button } from 'antd';

import { parseDateRange } from '../../helpers';

import type { ListItem as ListItemType } from './__generated__/ListItem.js';

type Props = {
  item: ListItemType,
};

const renderDescription = item => {
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

const ListItem = ({ item }: Props) => {
  return (
    <div className="list">
      <AntList.Item
        key={item.id}
        // onMouseEnter={() => onEnter(item.id)}
        // onMouseLeave={() => onLeave(item.id)}
      >
        <div className="list-item-inner">
          <AntList.Item.Meta
            title={
              <Link href="/fake-url">
                <a>{item.name}</a>
              </Link>
            }
            description={renderDescription(item)}
          />
          <div className="block">
            <img
              className="thumbnail"
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
            {item.description}
          </div>
          {/*<div className="bottom-line">
                      {item.categories.map((category, i) => (
                        <Tag key={i}>{category}</Tag>
                      ))}
                    </div>*/}
          <div className="button-wrap">
            <Button style={{ marginRight: 8 }}>More info</Button>
            <Button type="primary">Get tickets</Button>
          </div>
        </div>
      </AntList.Item>

      <style jsx>{`
        .list-item-inner {
          padding: 0 0.75em;
        }

        .bottom-line {
          margin-top: 0.75em;
        }

        .button-wrap {
          text-align: right;
          margin-top: 0.5em;
        }

        .thumbnail {
          width: 100px;
          height: 100px;
          object-fit: cover;
          float: left;
          margin-right: 0.5em;
        }

        .block:after {
          content: '';
          clear: both;
          display: table;
        }
      `}</style>
    </div>
  );
};

export default ListItem;
