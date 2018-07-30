// @flow

import * as React from 'react';
import { Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';

const Option = Select.Option;

class NewConferenceComponent extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      // @TODO: move to constants
      const timeFormat = 'YYYY-MM-DD';

      if (!err) {
        const {
          name,
          location, // @TODO: location should coordinates? or what?
          dateTime,
          description,
          price,
          currency,
        } = values;
        const startDate = dateTime[0].format(timeFormat);
        const endDate = dateTime[1].format(timeFormat);

        console.log('Received values of form: ', {
          name,
          location,
          startDate,
          endDate,
          price,
          currency,
          description,
        });
      }
    });
  };

  renderCurrencySelect() {
    const { getFieldDecorator } = this.props.form;

    // @TODO: value should be currency id??

    return getFieldDecorator('currency', {
      rules: [{ required: true, message: 'Enter currency' }],
      initialValue: 'eur',
    })(
      <Select style={{ width: 80 }}>
        <Option value="eur">EUR</Option>
        <Option value="usd">USD</Option>
        <Option value="gbp">GBP</Option>
      </Select>,
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="vertical" hideRequiredMark onSubmit={this.handleSubmit}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Enter conference name' }],
              })(<Input placeholder="GrpahQL Europe" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Location">
              {getFieldDecorator('location', {
                rules: [{ required: true, message: 'Enter location' }],
              })(<Input placeholder="Berlin, Germany" />)}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="DateTime">
              {getFieldDecorator('dateTime', {
                rules: [{ required: true, message: 'Enter dateTime' }],
              })(<DatePicker.RangePicker />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Price">
              {getFieldDecorator('price', {
                rules: [{ required: true, message: 'Enter price' }],
              })(
                <Input
                  type="number"
                  placeholder="699"
                  addonAfter={this.renderCurrencySelect()}
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Description">
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: true,
                    message: 'Enter description',
                  },
                ],
              })(
                <Input.TextArea
                  rows={4}
                  placeholder="Few words about conference"
                />,
              )}
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const NewConference = Form.create()(NewConferenceComponent);

export default NewConference;
