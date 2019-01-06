import React from 'react';
import { Col, Radio, Row } from 'antd';

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

const RadioGroup = ({ items, value, onChange }) => {
  const onItemChange = e => {
    const val = e.target.value;

    onChange(value === val ? null : val);
  };

  return (
    <>
      <h4>Time</h4>
      <div className="group-wrapper">
        <Radio.Group style={{ width: '100%' }} value={value}>
          <Row>{items.map(item => renderRadio(item, onItemChange))}</Row>
        </Radio.Group>
      </div>
    </>
  );
};

export default RadioGroup;
