import * as React from 'react';
import { Col, Row, Form, Input, DatePicker, Select, Button, Icon } from 'antd';

const Option = Select.Option;

const PRICE_NAME = 'prices';
const PRICE_KEYS = 'prices_keys';
let KEY_INDEX = 1;

class Prices extends React.Component {
  renderCurrencySelect() {
    const { getFieldDecorator } = this.props.form;

    // @TODO: value should be currency id??
    // @TODO: add currency

    return getFieldDecorator('currency', {
      rules: [{ required: true, message: 'Enter currency' }],
      initialValue: 'eur',
    })(
      <Select style={{ width: 80 }}>
        <Option value="eur">EUR</Option>
        <Option value="usd">USD</Option>
        <Option value="gbp">GBP</Option>
      </Select>
    );
  }

  renderPrices = prices => {
    const { data, form } = this.props;
    const { getFieldDecorator } = form;
    // enable extra fields (name, exp. date) only in the're more then 1 item
    const extraEnabled = prices.length <= 1;

    return prices.map((price, index) => {
      const formName = `${PRICE_NAME}[${price}]`;
      const item = data && data[price];

      return (
        <Row key={price} type="flex" gutter={16} align="bottom">
          <Col span={8}>
            <Form.Item label={index === 0 ? 'Price' : ''}>
              {getFieldDecorator(`${formName}.amount`, {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message:
                      "Please input passenger's name or delete this field.",
                  },
                ],
                initialValue: item && item.amount,
              })(
                <Input
                  type="number"
                  placeholder="699"
                  addonAfter={this.renderCurrencySelect(price)}
                />
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={index === 0 ? 'Name' : ''}>
              {getFieldDecorator(`${formName}.name`, {
                rules: [
                  {
                    required: !extraEnabled,
                    whitespace: true,
                    message: 'Please input price name.',
                  },
                ],
                initialValue: item && item.name,
              })(<Input disabled={extraEnabled} placeholder="Name" />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={index === 0 ? 'Expiration' : ''}>
              {getFieldDecorator(`${formName}.expirationDate`, {
                rules: [
                  { required: !extraEnabled, message: 'Expiration time' },
                ],
                initialValue: item && item.expirationDate, // @TODO: make it moment??
              })(<DatePicker disabled={extraEnabled} />)}
            </Form.Item>
          </Col>
          {prices.length > 1 ? (
            <Col span={2}>
              <Form.Item>
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  disabled={prices.length === 1}
                  onClick={() => this.remove(price)}
                />
              </Form.Item>
            </Col>
          ) : null}
        </Row>
      );
    });
  };

  add = () => {
    const { form } = this.props;
    const prices = form.getFieldValue(PRICE_KEYS);
    const nextPrices = prices.concat(KEY_INDEX++);

    form.setFieldsValue({
      [PRICE_KEYS]: nextPrices,
    });
  };

  remove = price => {
    const { form } = this.props;
    const prices = form.getFieldValue(PRICE_KEYS);

    if (prices.length === 1) {
      return;
    }

    form.setFieldsValue({
      [PRICE_KEYS]: prices.filter(p => p !== price),
    });
  };

  // componentDidMount() {
  //   const { data, form } = this.props;
  //   const { setFieldsValue } = form;

  //   if (data) {
  //     setFieldsValue({ [PRICE_NAME]: data });
  //   }
  // }

  render() {
    const { form, data } = this.props;
    const { getFieldValue, getFieldDecorator, setFieldsValue } = form;
    getFieldDecorator(PRICE_KEYS, {
      initialValue: data ? [...Array(data.length).keys()] : [0],
    });
    const prices = getFieldValue(PRICE_KEYS);

    return (
      <React.Fragment>
        <Row gutter={16}>
          <Col span={24}>
            <h2>Prices:</h2>
          </Col>
        </Row>
        {this.renderPrices(prices)}
        <Row gutter={16}>
          <Col span={24}>
            <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
              <Icon type="plus" /> Add field
            </Button>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Prices;
