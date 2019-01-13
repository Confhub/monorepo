import { Radio, Row } from 'antd';
import React, { Fragment } from 'react';

const renderRadio = (item, onClick) => (
  <Radio.Button
    value={item.value}
    disabled={item.disabled}
    defaultChecked={item.defaultChecked}
    onClick={onClick}
  >
    {item.label}
  </Radio.Button>
);

const RadioGroup = ({ items, value, onChange, title }) => {
  const onItemChange = e => {
    const val = e.target.value;

    onChange(value === val ? null : val);
  };

  return (
    <Fragment>
      <h4>{title}</h4>

      <Radio.Group style={{ width: '100%' }} value={value}>
        <Row>
          {items.map(item => (
            <Fragment key={item.id}>{renderRadio(item, onItemChange)}</Fragment>
          ))}
        </Row>
      </Radio.Group>
    </Fragment>
  );
};

export default RadioGroup;
