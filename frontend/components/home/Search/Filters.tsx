import React from 'react';
import styled from 'styled-components';

import CheckboxGroup from '../../CheckboxGroup/CheckboxGroup';
import TagSelector from '../../TagSelector';
import { HomePageContext } from '../HomePageContext';

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

// const priceOptions = [
//   { id: 0, label: '💵 > 0', value: 'more-than-0' },
//   { id: 1, label: '💵 < $500', value: 'less-than-500' },
//   { id: 2, label: '💵 < $1000', value: 'less-than-1000' },
// ];

const intervalOptions = [
  { id: 0, label: '⏰ < 1 month', value: '1' },
  { id: 1, label: '⏰ < 3 months', value: '3' },
  { id: 2, label: '⏰ < 6 month', value: '6' },
  { id: 3, label: '⏰ < 1 year', value: '12' },
];

// const locationOptions = [
//   { id: 0, label: '🚴‍ Current city', value: 'europe' },
//   { id: 1, label: '🚗 < 500 Km', value: 'north-america' },
//   { id: 2, label: '✈️ < 1000 Km', value: 'latin-america' },
// ];

const regionOptions = [
  { id: 0, label: '🌎 North America', value: 'north_america' },
  { id: 1, label: '💃🏻 Latin America', value: 'latin_america' },
  { id: 2, label: '🇪🇺 Europe', value: 'europe' },
  { id: 3, label: '🌍 Africa', value: 'africa' },
  { id: 4, label: '🕌 Middle East', value: 'middle_east' },
  { id: 5, label: '⛩ Asia', value: 'asia' },
  { id: 6, label: '🏄 Oceania', value: 'oceania' },
  { id: 7, label: '🖥 Online', value: 'online' },
];

// const languagesOptions = [
//   { id: 0, label: '🇬🇧 English', value: 'english' },
//   { id: 1, label: '🇪🇸 Spanish', value: 'spanish' },
//   { id: 2, label: '🇫🇷 French', value: 'french' },
//   { id: 3, label: '🇨🇳 Сhinese', value: 'chinese' },
//   { id: 4, label: '🇷🇺 Russian', value: 'russian' },
//   { id: 5, label: '🇮🇳 Hindi', value: 'hindi' },
// ];

const GroupWrapper = styled.div`
  margin-bottom: 1.25em;
`;

const Root = styled.div`
  padding: 1.5em 0;
`;

class Search extends React.Component {
  public setLocation = ({ center }) => {
    this.props.setLocation(center);
  };

  public onChange = (name, value) => {
    this.setState({ [name]: value });
  };

  public render() {
    const {
      // getLocation,
      // setLocation,
      // locationLoading,
      state,
      updateTags,
      // updateInterval,
      // updateRegions,
    } = this.props.context;

    return (
      <Root>
        <h4>Categories</h4>
        <GroupWrapper>
          <CheckboxGroup type="checkbox" onChange={() => null} value={['tech']}>
            {categoryOptions.map(category => (
              <CheckboxGroup.Option
                key={category.id}
                label={category.label}
                value={category.value}
              />
            ))}
          </CheckboxGroup>
        </GroupWrapper>

        <h4>Topics</h4>
        <GroupWrapper>
          <TagSelector
            optionKey="slug"
            value={state.tags}
            onChange={updateTags}
          />
        </GroupWrapper>

        <h4>Time</h4>
        <CheckboxGroup type="radio" onChange={() => null} value={null}>
          {intervalOptions.map(interval => (
            <CheckboxGroup.Option
              key={interval.id}
              label={interval.label}
              value={interval.value}
            />
          ))}
        </CheckboxGroup>

        <h4>Region</h4>
        <CheckboxGroup
          type="checkbox"
          groupName="continents"
          value={['europe']}
          elementsPerRow={4}
          onChange={() => null}
        >
          {regionOptions.map(region => (
            <CheckboxGroup.Option
              key={region.id}
              label={region.label}
              value={region.value}
            />
          ))}
        </CheckboxGroup>
      </Root>
    );
  }
}

export default props => (
  <HomePageContext.Consumer>
    {context => <Search {...props} context={context} />}
  </HomePageContext.Consumer>
);

// <div className="group-wrapper">
//         <CheckboxDiv options={categoryOptions} />
//       </div>

//       <h4>Price</h4>
//       <div className="group-wrapper">
//         <Radio.Group style={{ width: '100%' }} onChange={() => null}>
//           <Row>{priceOptions.map(item => renderRadio(item, 8))}</Row>
//         </Radio.Group>
//         <Row>
//           <Col span={24}>
//             <Checkbox onChange={() => null}>🐦 Has Early Bird price</Checkbox>
//           </Col>
//         </Row>
//       </div>

//       <GroupWrapper>
//       <RadioGroup
//           title="Time"
//           items={intervalOptions}
//           value={state.interval}
//           onChange={updateInterval}
//         />
//       </GroupWrapper>

//       <div>
//         <Radio.Group style={{ width: '100%' }} onChange={() => null}>
//           <Row>{locationOptions.map(item => renderRadio(item, 8))}</Row>
//         </Radio.Group>
//       </div>
//       or
//       <GroupWrapper>

//         <Checkbox.Group
//           value={state.regions}
//           style={{ width: '100%' }}
//           onChange={updateRegions}
//         >
//           <Row>{regionOptions.map(region => renderCheckbox(region, 8))}</Row>
//         </Checkbox.Group>
//       </GroupWrapper>

// <h4>Language</h4>
// <div className="group-wrapper">
//  <Checkbox.Group style={{ width: '100%' }} onChange={() => null}>
//    <Row>{languagesOptions.map(item => renderCheckbox(item, 6))}</Row>
//  </Checkbox.Group>
// </div>
// <p>Call for papers</p>
