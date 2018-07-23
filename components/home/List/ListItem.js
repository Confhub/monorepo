// @flow

import * as React from 'react';
import { List as AntList, Tag, Button } from 'antd';

import ListItemDescription from './ListItemDescription';

import type { ListItem as ListItemType } from './__generated__/ListItem';

type Props = {
  item: ListItemType,
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
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            }
            description={<ListItemDescription item={item} />}
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
            {item.tags.map(tag => <Tag key={tag.id}>{tag.name}</Tag>)}
          </div>
          <div className="button-wrap">
            {/* <Button style={{ marginRight: 8 }}>More info</Button>
            <Button type="primary">Get tickets</Button> */}
            <Button type="primary" href={item.url} target="_blank">
              More info
            </Button>
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
