import React from 'react';
import Link from 'next/link';
import { List, Icon, Tag, Divider, Button } from 'antd';
import MainContext from '../../context/MainContext';
import { parseDateRange } from '../helpers';

const renderDescription = item => {
  const { city, country, startDate, endDate, price } = item;

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
        <Icon type="shopping-cart" /> {price.eur}€
      </span>
    </>
  );
};

const ListComponent = () => {
  return (
    <MainContext.Consumer>
      {({ onEnter, onLeave, items }) => (
        <div className="list">
          <h3>Found: 3 items</h3>
          <List
            itemLayout="vertical"
            dataSource={items}
            renderItem={item => (
              <List.Item
                key={item.id}
                onMouseEnter={() => onEnter(item.id)}
                onMouseLeave={() => onLeave(item.id)}
              >
                <div className="list-item-inner">
                  <List.Item.Meta
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
                  <div className="bottom-line">
                    {item.categories.map((category, i) => (
                      <Tag key={i}>{category}</Tag>
                    ))}
                  </div>
                  <div className="button-wrap">
                    <Button style={{ marginRight: 8 }}>More info</Button>
                    <Button type="primary">Get tickets</Button>
                  </div>
                </div>
              </List.Item>
            )}
          />
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
      )}
    </MainContext.Consumer>
  );
};

export default ListComponent;
