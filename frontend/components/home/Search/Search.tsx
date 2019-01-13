import { Checkbox, Col, Radio, Row } from 'antd';
import * as React from 'react';
import styled from 'styled-components';
import TagSelector from '../../TagSelector';
import { HomePageContext } from '../HomePageContext';
import RadioGroup from './RadioGroup';

const categoryOptions = [
  {
    id: 0,
    label: '💻 Tech',
    value: 'tech',
    disabled: false,
  },
  {
    id: 1,
    label: '💊 Medicine',
    value: 'medicine',
    disabled: true,
  },
  {
    id: 2,
    label: '👔 Business',
    value: 'business',
    disabled: true,
  },
  {
    id: 3,
    label: '👩‍💼 Law',
    value: 'law',
    disabled: true,
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
    <Checkbox value={item.value} disabled={item.disabled}>
      {item.label}
    </Checkbox>
  </Col>
);

const GroupWrapper = styled.div`
  margin-bottom: 1.25em;
`;

const Root = styled.div`
  padding: 1.5em 0.75em;
  border-bottom: 1px solid #e8e8e8;
`;

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
      <Root>
        {/* <div className="group-wrapper">
          <CheckboxDiv options={categoryOptions} />
        </div> */}
        <GroupWrapper>
          <h4>Categories</h4>
          <Checkbox.Group
            style={{ width: '100%' }}
            onChange={() => null}
            value={['tech']}
          >
            <Row>{categoryOptions.map(item => renderCheckbox(item, 6))}</Row>
          </Checkbox.Group>
        </GroupWrapper>

        <GroupWrapper>
          <h4>Topics</h4>
          <TagSelector
            optionKey="slug"
            value={state.tags}
            onChange={updateTags}
          />
        </GroupWrapper>
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
        <GroupWrapper>
          <RadioGroup
            title="Time"
            items={timeOptions}
            value={state.time}
            onChange={updateTime}
          />
        </GroupWrapper>

        {/* <div>
          <Radio.Group style={{ width: '100%' }} onChange={() => null}>
            <Row>{locationOptions.map(item => renderRadio(item, 8))}</Row>
          </Radio.Group>
        </div>
        or */}
        <GroupWrapper>
          <h4>Region</h4>
          <Checkbox.Group
            value={state.region}
            style={{ width: '100%' }}
            onChange={updateRegion}
          >
            <Row>{continentOptions.map(item => renderCheckbox(item, 8))}</Row>
          </Checkbox.Group>
        </GroupWrapper>

        {/* <h4>Language</h4>
        <div className="group-wrapper">
          <Checkbox.Group style={{ width: '100%' }} onChange={() => null}>
            <Row>{languagesOptions.map(item => renderCheckbox(item, 6))}</Row>
          </Checkbox.Group>
        </div> */}
        {/* <p>Call for papers</p> */}
      </Root>
    );
  }
}

export default props => (
  <HomePageContext.Consumer>
    {context => <Search {...props} context={context} />}
  </HomePageContext.Consumer>
);
