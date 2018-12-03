import * as React from 'react';
import idx from 'idx';
import { Form, Button, Col, Row, Input, DatePicker, Alert } from 'antd';
import Prices from './form/Prices';
import UploadFile from './form/Upload';
import TagSelector from '../TagSelector';
import { parsePrice } from './utils';

import LocationSelector from '../NewLocationSelector';

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
      console.log(values.prices);

      if (this.validateCustomFields() && !err) {
        const {
          name,
          url,
          dateTime,
          description,
          prices,
          // priceDate,
          // priceEarly,
          // priceEarlyDate,
          // priceLate,
          // priceLateDate,
          currency,
          image,
        } = values;
        const { tags: rawTags, location } = this.state;
        const startDate = formatDate(dateTime[0]);
        const endDate = formatDate(dateTime[1]);
        const tags = rawTags.map(t => ({
          id: t.id.startsWith('tmp-') ? null : t.id,
          name: t.name,
        }));

        try {
          this.setState({ loading: true });
          await this.props.onSubmit({
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
            // @TODO: a bit ugly, move it probably inside parse price
            prices: parsePrice(
              prices.map(i => ({
                ...i,
                amount: +i.amount,
                currency: currency.toUpperCase(),
              }))
            ),
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

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
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

          <Prices form={form} data={data && data.prices} />

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
                  />
                )}
              </Form.Item>
            </Col>
          </Row>

          <UploadFile form={form} data={data} />

          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default Form.create()(FormComponent);
