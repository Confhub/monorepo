import * as React from 'react';
import idx from 'idx';
import {
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Alert,
  Checkbox,
  Upload,
  Icon,
} from 'antd';
import TagSelector from '../TagSelector';

import LocationSelector from '../NewLocationSelector';
import { customRequest } from '../helpers';

const Option = Select.Option;

const prices = [
  { label: 'Regular', field: 'price', required: true },
  { label: 'Early Bird', field: 'priceEarly' },
  { label: 'Late Bird', field: 'priceLate' },
];

const formatDate = date => date && date.utc().format();

class FormComponent extends React.Component {
  static defaultProps = {
    data: {},
  };
  alerts = React.createRef();

  state = {
    tags: this.props.data.tags,
    location: this.props.data.location,
    locationError: false,
    loading: false,
    error: null,
    success: false,
    priceEarlyDisabled: false,
    priceLateDisabled: false,
  };

  handleTagsChange = tags => {
    this.setState({ tags });
  };

  validateCustomFields = () => {
    let valid = true;
    const { location } = this.state;

    if (!location) {
      valid = false;
      this.setState({ locationError: true });
    }

    return valid;
  };

  handleSubmit = async e => {
    const { form } = this.props;
    e.preventDefault();

    form.validateFieldsAndScroll(async (err, values) => {
      if (this.validateCustomFields() && !err) {
        const {
          name,
          url,
          dateTime,
          description,
          // price,
          // priceDate,
          // priceEarly,
          // priceEarlyDate,
          // priceLate,
          // priceLateDate,
          // currency,
          image,
        } = values;
        const {
          tags: rawTags,
          location,
          // priceEarlyDisabled,
          // priceLateDisabled,
        } = this.state;
        const startDate = formatDate(dateTime[0]);
        const endDate = formatDate(dateTime[1]);
        const tags = rawTags.map(t => ({
          id: t.id.startsWith('tmp-') ? null : t.id,
          name: t.name,
        }));

        // const priceObject = {
        //   regular: {
        //     amount: price,
        //     currency,
        //     expiration: formatDate(priceDate),
        //   },
        //   ...(!priceEarlyDisabled && {
        //     earlyBird: {
        //       amount: priceEarly,
        //       currency,
        //       expiration: formatDate(priceEarlyDate),
        //     },
        //   }),
        //   ...(!priceLateDisabled && {
        //     lateBird: {
        //       amount: priceLate,
        //       currency,
        //       expiration: formatDate(priceLateDate),
        //     },
        //   }),
        // };

        try {
          this.setState({ loading: true });
          const test = await this.props.onSubmit({
            name,
            url,
            startDate,
            endDate,
            location: {
              country: location.country,
              city: location.city,
              address: location.address,
              coordinates: {
                longitude: location.coordinates.lng,
                latitude: location.coordinates.lat,
              },
            },
            tags,
            description,
            ...(!!image && {
              image: {
                src: image[0].response.secure_url,
              },
            }),
          });

          this.setState({
            loading: false,
            error: null,
            success: true,
            location: null,
          });
          form.resetFields();
          this.alerts.current &&
            this.alerts.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
        } catch (err) {
          console.log(err);
          this.setState({ loading: false, success: false, error: err });
          this.alerts.current &&
            this.alerts.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
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
              rules: [{ required: !disabled, message: 'Enter price' }],
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
              rules: [{ required: !disabled, message: 'Enter dateTime' }],
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

  normFile = e => {
    return e && e.fileList && e.fileList.slice(-1);
  };

  render() {
    const { data, form } = this.props;
    const { getFieldDecorator } = form;
    const { loading, success, error, locationError } = this.state;

    return (
      <React.Fragment>
        <div ref={this.alerts}>
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
        </div>
        <Form layout="vertical" hideRequiredMark onSubmit={this.handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Name">
                {getFieldDecorator('name', {
                  initialValue: data.name,
                  rules: [
                    {
                      required: true,
                      message: 'Enter name',
                    },
                  ],
                })(<Input placeholder="GrpahQL Europe" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Url">
                {getFieldDecorator('url', {
                  initialValue: data.url,
                  rules: [
                    {
                      required: true,
                      message: 'Enter url',
                    },
                  ],
                })(<Input type="url" placeholder="GrpahQL Europe" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Location"
                help={locationError ? 'Enter location' : null}
                validateStatus={locationError ? 'error' : null}
              >
                <LocationSelector
                  setLocation={this.setLocation}
                  initialValue={idx(data, _ => _.location.address)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="DateTime">
                {getFieldDecorator('dateTime', {
                  initialValue: data.date,
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
          {/* <Row gutter={16}>
            <Col span={24}>
              <h2>Prices:</h2>
            </Col>
          </Row>
          {prices.map(price => this.renderPrice(price))} */}
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Description">
                {getFieldDecorator('description', {
                  initialValue: data.description,
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

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Upload">
                {getFieldDecorator('image', {
                  initialValue: data.image,
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload
                    name="logo"
                    customRequest={customRequest}
                    listType="picture-card"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>,
                )}
              </Form.Item>
            </Col>
          </Row>

          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default Form.create()(FormComponent);
