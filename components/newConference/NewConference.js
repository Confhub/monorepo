import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {
  Layout,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Alert,
  Checkbox,
} from 'antd';
import TagSelector from '../TagSelector';
import LocationSelector from '../LocationSelector';

const Option = Select.Option;
const { Content } = Layout;

const prices = [
  { label: 'Regular', field: 'price', required: true },
  { label: 'Early Bird', field: 'priceEarly' },
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
    $tags: [CreateConferenceTagInput]
    $description: String
  ) {
    createConference(
      data: {
        name: $name
        url: $url
        startDate: $startDate
        endDate: $endDate
        location: $location
        tags: $tags
        description: $description
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
    loading: false,
    error: null,
    success: false,
    priceEarlyDisabled: false,
    priceLateDisabled: false,
  };

  handleTagsChange = tags => {
    this.setState({ tags });
  };

  handleSubmit = async (e, create) => {
    const { form } = this.props;
    e.preventDefault();

    form.validateFieldsAndScroll(async (err, values) => {
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
        const {
          tags: rawTags,
          location,
          priceEarlyDisabled,
          priceLateDisabled,
        } = this.state;
        const startDate = formatDate(dateTime[0]);
        const endDate = formatDate(dateTime[1]);
        const tags = rawTags.map(t => ({
          id: t.id.startsWith('tmp-') ? null : t.id,
          name: t.name,
        }));

        const priceObject = {
          regular: {
            amount: price,
            currency,
            expiration: formatDate(priceDate),
          },
          ...(!priceEarlyDisabled && {
            earlyBird: {
              amount: priceEarly,
              currency,
              expiration: formatDate(priceEarlyDate),
            },
          }),
          ...(!priceLateDisabled && {
            lateBird: {
              amount: priceLate,
              currency,
              expiration: formatDate(priceLateDate),
            },
          }),
        };

        try {
          this.setState({ loading: true });
          const test = await create({
            variables: {
              name,
              url,
              startDate,
              endDate,
              location: {
                country: location.country,
                city: location.city,
                address: location.address,
                coordinates: {
                  longitude: location.center[0],
                  latitude: location.center[1],
                },
              },
              tags,
              description,
            },
          });

          this.setState({ loading: false, error: null, success: true });
          form.resetFields();
          console.log('success', test);
        } catch (err) {
          console.log(err);
          this.setState({ loading: false, success: false, error: err });
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

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  renderPrice({ label, field, required }) {
    const { getFieldDecorator } = this.props.form;

    const checkboxValue = this.state[field + 'Disabled'];
    const disabled = typeof checkboxValue === 'boolean' ? checkboxValue : false;

    return (
      <Row type="flex" gutter={16} key={field} align="bottom">
        <Col span={8}>
          <Form.Item label={label}>
            {getFieldDecorator(field, {
              rules: [{ required: disabled, message: 'Enter price' }],
            })(
              <Input
                type="number"
                placeholder="699"
                addonAfter={this.renderCurrencySelect()}
                disabled={disabled}
              />,
            )}
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item label="Expires on">
            {getFieldDecorator(field + 'Date', {
              rules: [{ required: disabled, message: 'Enter dateTime' }],
            })(<DatePicker disabled={disabled} />)}
          </Form.Item>
        </Col>
        {!required && (
          <Col span={3}>
            <Form.Item>
              <Checkbox
                name={field + 'Disabled'}
                value={field + 'Disabled'}
                onChange={this.handleChange}
              >
                disable
              </Checkbox>
              ,
            </Form.Item>
          </Col>
        )}
      </Row>
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading, success, error } = this.state;

    return (
      <Layout>
        {success && (
          <Alert
            message="Conference created!"
            description="Thank you for creating conference. It will be visible, after it'll pass validation"
            type="success"
            showIcon
          />
        )}
        {error && (
          <Alert
            message="Conference was not created"
            description="We've encountered some problem on server"
            type="warning"
            showIcon
          />
        )}
        <Content style={{ margin: '24px 16px' }}>
          <div style={{ padding: 24, background: '#fff' }}>
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
                            {
                              required: true,
                              message: 'Enter conference name',
                            },
                          ],
                        })(<Input placeholder="GrpahQL Europe" />)}
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Url">
                        {getFieldDecorator('url', {
                          rules: [
                            {
                              required: true,
                              message: 'Enter conference name',
                            },
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
                          rules: [
                            { required: true, message: 'Enter dateTime' },
                          ],
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

                  <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                  </Button>
                </Form>
              )}
            </Mutation>
          </div>
        </Content>
      </Layout>
    );
  }
}

const NewConference = Form.create()(NewConferenceComponent);

export default NewConference;
