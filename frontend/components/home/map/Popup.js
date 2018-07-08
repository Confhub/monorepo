import React, { PureComponent } from 'react';
import { Button, Icon, Divider } from 'antd';
import { parseDateRange } from '../../helpers';

const renderDescription = item => {
  const { place, startDate, endDate, price } = item;
  const { name, location } = place;
  const { country, city, street, zip } = location;

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

export default class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const { name } = info;
    return (
      <div>
        <h4>{name}</h4>
        <div className="button-wrap">{renderDescription(info)}</div>
        <div>
          <Button size="small" style={{ marginRight: 8 }}>
            More info
          </Button>
          <Button size="small" type="primary">
            Get tickets
          </Button>
        </div>
        <style jsx>{`
          .button-wrap {
            margin-bottom: 0.75em;
          }
        `}</style>
      </div>
    );
  }
}
