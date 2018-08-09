import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import TagSelector from '../TagSelector';
import LocationSelector from '../LocationSelector';

const Option = Select.Option;

const prices = [
  { label: 'Early Bird', field: 'priceEarly' },
  { label: 'Regular', field: 'price' },
  { label: 'Late Bird', field: 'priceLate' },
];

const formatDate = date => date && date.utc().format();

const CREATE_CONFERENCE = gql`
  mutation CreateConference(
    $name: String!
    $url: String!
    $startDate: DateTime!
    $endDate: DateTime!
    $location: CreateConferenceLocationInput!
  ) {
    createConference(
      data: {
        name: $name
        url: $url
        startDate: $startDate
        endDate: $endDate
        location: $location
      }
    ) {
      id
    }
  }
`;

class NewConferenceComponent extends React.Component {
  state = {
    tags: [],
    location: null,
  };

  handleTagsChange = tags => {
    this.setState({ tags });
  };

  handleSubmit = async (e, create) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const {
          name,
          url,
          dateTime,
          description,
          price,
          priceDate,
          priceEarly,
          priceEarlyDate,
          priceLate,
          priceLateDate,
          currency,
        } = values;
        const { tags: rawTags, location } = this.state;
        const startDate = formatDate(dateTime[0]);
        const endDate = formatDate(dateTime[1]);
        const tags = rawTags.map(t => ({
          id: t.id.startsWith('tmp-') ? null : t.id,
          name: t.name,
        }));

        const priceObject = {
          earlyBird: {
            amount: priceEarly,
            currency,
            expiration: formatDate(priceEarlyDate),
          },
          regular: {
            amount: price,
            currency,
            expiration: formatDate(priceDate),
          },
          lateBird: {
            amount: priceLate,
            currency,
            expiration: formatDate(priceLateDate),
          },
        };

        console.log('Received values of form: ', {
          name,
          url,
          location,
          startDate,
          endDate,
          price,
          currency,
          description,
          tags,
          priceObject,
        });

        try {
          const test = await create({
            variables: {
              name,
              url,
              startDate,
              endDate,
              location: {
                country: location.country,
                city: location.city,
                street: location.address,
                coordinates: {
                  longitude: location.center[0],
                  latitude: location.center[1],
                },
              },
            },
          });

          console.log('success', test);
        } catch (err) {
          console.log(err);
        }
      }
    });
  };

  setLocation = location => {
    this.setState({ location });
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

  renderPrice({ label, field }) {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row gutter={16} key={field}>
        <Col span={12}>
          <Form.Item label={label}>
            {getFieldDecorator(field, {
              rules: [{ required: false, message: 'Enter price' }],
            })(
              <Input
                type="number"
                placeholder="699"
                addonAfter={this.renderCurrencySelect()}
              />,
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Expires on">
            {getFieldDecorator(field + 'Date', {
              rules: [{ required: false, message: 'Enter dateTime' }],
            })(<DatePicker />)}
          </Form.Item>
        </Col>
      </Row>
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Mutation mutation={CREATE_CONFERENCE}>
        {(createConference, { data }) => (
          <Form
            layout="vertical"
            hideRequiredMark
            onSubmit={e => this.handleSubmit(e, createConference)}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [
                      { required: true, message: 'Enter conference name' },
                    ],
                  })(<Input placeholder="GrpahQL Europe" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Url">
                  {getFieldDecorator('url', {
                    rules: [
                      { required: true, message: 'Enter conference name' },
                    ],
                  })(<Input type="url" placeholder="GrpahQL Europe" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Location">
                  <LocationSelector setLocation={this.setLocation} />
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
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Categories">
                  <TagSelector
                    edit={true}
                    value={this.state.tags}
                    onChange={this.handleTagsChange}
                    optionKey="name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <h2>Prices:</h2>
              </Col>
            </Row>
            {prices.map(price => this.renderPrice(price))}
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Description">
                  {getFieldDecorator('description', {
                    rules: [
                      {
                        required: false,
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
        )}
      </Mutation>
    );
  }
}

const NewConference = Form.create()(NewConferenceComponent);

export default NewConference;
