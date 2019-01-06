import { Button, Col, Form, Icon, Row, Upload } from 'antd';
import * as React from 'react';
import { customRequest } from '../../helpers';

class UploadFile extends React.Component {
  public normFile = e => {
    return e && e.fileList && e.fileList.slice(-1);
  };

  public render() {
    const { data, form } = this.props;

    const { getFieldDecorator } = form;
    return (
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Upload">
            {getFieldDecorator('image', {
              initialValue: data.image,
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload
                accept="image/*"
                name="logo"
                customRequest={customRequest}
                listType="picture-card"
              >
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>
        </Col>
      </Row>
    );
  }
}

export default UploadFile;
