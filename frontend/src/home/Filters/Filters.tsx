import React, { useContext } from 'react';
import styled from 'styled-components';

import TagSelector from '../../components/TagSelector';
import CheckboxGroup from '../../components/checkboxGroup/CheckboxGroup';
import {
  categoryOptions,
  intervalOptions,
  regionOptions,
} from './FilterOptions';
import { FiltersContext } from './FiltersContext';

const Wrapper = styled.div`
  padding: 1.5em 0;
`;

const Filters = () => {
  const context = useContext(FiltersContext);
  const {
    state: { categoryValue, regionValue, tagValue },
    functions: { updateTagValue },
  } = context;

  return (
    <Wrapper>
      <h4>Categories</h4>
      <CheckboxGroup
        type="checkbox"
        onChange={() => null}
        value={categoryValue}
      >
        {categoryOptions.map(category => (
          <CheckboxGroup.Option
            key={category.id}
            label={category.label}
            value={category.value}
            disabled={category.disabled}
          />
        ))}
      </CheckboxGroup>

      <h4>Topics</h4>
      <TagSelector
        optionKey="slug"
        value={tagValue}
        onChange={updateTagValue}
      />

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
        value={regionValue}
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
    </Wrapper>
  );

  // public setLocation = ({ center }) => {
  //   this.props.setLocation(center);
  // };

  // public onChange = (name, value) => {
  //   this.setState({ [name]: value });
  // };
};

export default Filters;

// const {
//   // getLocation,
//   // setLocation,
//   // locationLoading,
//   state,
//   updateTags,
//   // updateInterval,
//   // updateRegions,
// } = this.props.context;

// export default props => (
//   <FiltersContext.Consumer>
//     {context => <Search {...props} context={context} />}
//   </FiltersContext.Consumer>
// );

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

//       <div>
//       <RadioGroup
//           title="Time"
//           items={intervalOptions}
//           value={state.interval}
//           onChange={updateInterval}
//         />
//       </div>

//       <div>
//         <Radio.Group style={{ width: '100%' }} onChange={() => null}>
//           <Row>{locationOptions.map(item => renderRadio(item, 8))}</Row>
//         </Radio.Group>
//       </div>
//       or
//       <div>

//         <Checkbox.Group
//           value={state.regions}
//           style={{ width: '100%' }}
//           onChange={updateRegions}
//         >
//           <Row>{regionOptions.map(region => renderCheckbox(region, 8))}</Row>
//         </Checkbox.Group>
//       </div>

// <h4>Language</h4>
// <div className="group-wrapper">
//  <Checkbox.Group style={{ width: '100%' }} onChange={() => null}>
//    <Row>{languagesOptions.map(item => renderCheckbox(item, 6))}</Row>
//  </Checkbox.Group>
// </div>
// <p>Call for papers</p>
