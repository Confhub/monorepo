import { Button, Tag } from 'antd';
import * as React from 'react';

import { THUMBNAILS_OPTIONS } from '../../constants';
import { setImageParams } from '../../helpers';
import ListItemDescription from './ListItemDescription';

const ListItem = ({ item }) => {
  return (
    <div className="list-item-inner">
      <img
        className="thumbnail"
        alt={item.image ? item.image.alt : 'conf logo'}
        src={
          item.image
            ? setImageParams(item.image.src, THUMBNAILS_OPTIONS)
            : 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
        }
      />
      <div>
        <div>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </div>
        <ListItemDescription item={item} />

        <div className="block">{item.description}</div>
        <div className="bottom-line">
          {item.tags.map(tag => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </div>
      </div>
      <div className="button-wrap">
        {/* <Button style={{ marginRight: 8 }}>More info</Button>
            <Button type="primary">Get tickets</Button> */}
        <Button type="primary" href={item.url} target="_blank">
          More info
        </Button>
      </div>

      <style jsx>{`
        .list-item-inner {
          position: relative;
          background: white;
          padding: 1em;
          display: grid;
          grid-template-columns: auto 1fr auto;
          grid-gap: 1.25em;
        }

        .bottom-line {
          margin-top: 0.75em;
        }

        .button-wrap {
          text-align: right;
          margin-top: 0.5em;
          align-self: center;
        }

        .thumbnail {
          width: 100px;
          height: 100px;
          object-fit: cover;
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
