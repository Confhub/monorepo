import { Checkbox, Col, Radio, Row } from 'antd';
import * as React from 'react';
import TagSelector from '../../TagSelector';
import { HomePageContext } from '../HomePageContext';
import RadioGroup from './RadioGroup';
import { stat } from 'fs';

const categoryOptions = [
  {
    id: 0,
    label: '💻 Tech',
    value: 'tech',
    disabled: false,
    defaultChecked: true,
  },
  {
    id: 1,
    label: '💊 Medicine',
    value: 'medicine',
    disabled: true,
    defaultChecked: false,
  },
  {
    id: 2,
    label: '👔 Business',
    value: 'business',
    disabled: true,
    defaultChecked: false,
  },
  {
    id: 3,
    label: '👩‍💼 Law',
    value: 'law',
    disabled: true,
    defaultChecked: false,
  },
];

const priceOptions = [
  { id: 0, label: '💵 > 0', value: 'more-than-0' },
  { id: 1, label: '💵 < $500', value: 'less-than-500' },
  { id: 2, label: '💵 < $1000', value: 'less-than-1000' },
];

const timeOptions = [
  { id: 0, label: '⏰ < 1 month', value: '1' },
  { id: 1, label: '⏰ < 3 months', value: '3' },
  { id: 2, label: '⏰ < 6 month', value: '6' },
  { id: 3, label: '⏰ < 1 year', value: '12' },
];

const locationOptions = [
  { id: 0, label: '🚴‍ Current city', value: 'europe' },
  { id: 1, label: '🚗 < 500 Km', value: 'north-america' },
  { id: 2, label: '✈️ < 1000 Km', value: 'latin-america' },
];

const continentOptions = [
  { id: 0, label: '🌎 North America', value: 'north-america' },
  { id: 1, label: '💃🏻 Latin America', value: 'latin-america' },
  { id: 2, label: '🇪🇺 Europe', value: 'europe' },
  { id: 3, label: '🌍 Africa', value: 'africa' },
  { id: 4, label: '🕌 Middle East', value: 'middle-east' },
  { id: 5, label: '⛩ Asia', value: 'asia' },
  { id: 6, label: '🏄 Oceania', value: 'oceania' },
];

const languagesOptions = [
  { id: 0, label: '🇬🇧 English', value: 'english' },
  { id: 1, label: '🇪🇸 Spanish', value: 'spanish' },
  { id: 2, label: '🇫🇷 French', value: 'french' },
  { id: 3, label: '🇨🇳 Сhinese', value: 'chinese' },
  { id: 4, label: '🇷🇺 Russian', value: 'russian' },
  { id: 5, label: '🇮🇳 Hindi', value: 'hindi' },
];

const renderCheckbox = (item, colSpan) => (
  <Col span={colSpan} key={item.id}>
    <Checkbox
      value={item.value}
      disabled={item.disabled}
      defaultChecked={item.defaultChecked}
    >
      {item.label}
    </Checkbox>
  </Col>
);

// const renderRadio = (item, colSpan) => (
//   <Col span={colSpan} key={item.id}>
//     <Radio
//       value={item.value}
//       disabled={item.disabled}
//       defaultChecked={item.defaultChecked}
//     >
//       {item.label}
//     </Radio>
//   </Col>
// );

class Search extends React.Component {
  public state = {
    time: null,
  };

  public setLocation = ({ center }) => {
    this.props.setLocation(center);
  };

  public onChange = (name, value) => {
    this.setState({ [name]: value });
  };

  public render() {
    const {
      getLocation,
      setLocation,
      locationLoading,
      state,
      updateTags,
      updateTime,
      updateRegion,
    } = this.props.context;

    return (
      <div className="root">
        {/* <div className="group-wrapper">
          <CheckboxDiv options={categoryOptions} />
        </div> */}
        <h4>Categories</h4>
        <div className="group-wrapper">
          <Checkbox.Group style={{ width: '100%' }} onChange={() => null}>
            <Row>{categoryOptions.map(item => renderCheckbox(item, 6))}</Row>
          </Checkbox.Group>
        </div>
        <h4>Topics</h4>
        <div className="group-wrapper">
          <TagSelector
            optionKey="slug"
            value={state.tags}
            onChange={updateTags}
          />
        </div>
        {/* <h4>Price</h4>
        <div className="group-wrapper">
          <Radio.Group style={{ width: '100%' }} onChange={() => null}>
            <Row>{priceOptions.map(item => renderRadio(item, 8))}</Row>
          </Radio.Group>
          <Row>
            <Col span={24}>
              <Checkbox onChange={() => null}>🐦 Has Early Bird price</Checkbox>
            </Col>
          </Row>
        </div> */}
        <RadioGroup
          items={timeOptions}
          value={state.time}
          onChange={updateTime}
        />
        <h4>Region</h4>
        {/* <div>
          <Radio.Group style={{ width: '100%' }} onChange={() => null}>
            <Row>{locationOptions.map(item => renderRadio(item, 8))}</Row>
          </Radio.Group>
        </div>
        or */}
        <div className="group-wrapper">
          <Checkbox.Group
            value={state.region}
            style={{ width: '100%' }}
            onChange={updateRegion}
          >
            <Row>{continentOptions.map(item => renderCheckbox(item, 8))}</Row>
          </Checkbox.Group>
        </div>
        {/* <h4>Language</h4>
        <div className="group-wrapper">
          <Checkbox.Group style={{ width: '100%' }} onChange={() => null}>
            <Row>{languagesOptions.map(item => renderCheckbox(item, 6))}</Row>
          </Checkbox.Group>
        </div> */}
        {/* <p>Call for papers</p> */}
        <style jsx={true}>{`
          .root {
            padding: 1.5em 0.75em;
            border-bottom: 1px solid #e8e8e8;
          }

          label {
            display: block;
          }

          label:not(:last-child) {
            margin-bottom: 0.75em;
          }

          .group-wrapper {
            margin-bottom: 20px;

            &.first {
              margin-top: 20px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default props => (
  <HomePageContext.Consumer>
    {context => <Search {...props} context={context} />}
  </HomePageContext.Consumer>
);
