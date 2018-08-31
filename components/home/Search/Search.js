import * as React from 'react';
import { Checkbox, Radio } from 'antd';
import { HomePageContext } from '../HomePageContext';
import TagSelector from '../../TagSelector';
import LocationSelector from '../../LocationSelector';

const priceOptions = [
  { label: '💵 < $500', value: 'less-than-500' },
  { label: '💵 < $1000', value: 'less-than-1000' },
];

const timeOptions = [
  { label: '⏰ < 1 month', value: 'january' },
  { label: '⏰ < 3 months', value: 'february' },
  { label: '⏰ < 6 month', value: 'march' },
  { label: '⏰ < 1 year', value: 'april' },
];

const locationOptions = [
  { label: '🚴‍ Current city', value: 'europe' },
  { label: '🚗 < 500 Km', value: 'north-america' },
  { label: '✈️ < 1000 Km', value: 'latin-america' },
];

const continentOptions = [
  { label: '🌎 North America', value: 'north-america' },
  { label: '☀️ Latin America', value: 'latin-america' },
  { label: '🇪🇺 Europe', value: 'europe' },
  { label: '🌍 Africa', value: 'africa' },
  { label: '🕌 Middle East', value: 'middle-east' },
  { label: '⛩ Asia', value: 'asia' },
  { label: '🏄 Oceania', value: 'oceania' },
];

const monthOptions = [
  { label: 'Jan', value: 'january' },
  { label: 'Feb', value: 'february' },
  { label: 'Mar', value: 'march' },
  { label: 'Apr', value: 'april' },
  { label: 'May', value: 'may' },
  { label: 'Jun', value: 'june' },
  { label: 'Jul', value: 'july' },
  { label: 'Aug', value: 'august' },
  { label: 'Sep', value: 'september' },
  { label: 'Oct', value: 'october' },
  { label: 'Nov', value: 'november' },
  { label: 'Dec', value: 'december' },
];

const languagesOptions = [
  { label: '🇬🇧 English', value: 'english' },
  { label: '🇪🇸 Spanish', value: 'spanish' },
  { label: '🇫🇷 French', value: 'french' },
  { label: '🇨🇳 Chinese', value: 'chenese' },
  { label: '🇷🇺 Russian', value: 'russian' },
  { label: '🇮🇳 Hindi', value: 'hindi' },
];

class Search extends React.Component {
  setLocation = ({ center }) => {
    this.props.setLocation(center);
  };

  render() {
    const {
      getLocation,
      setLocation,
      locationLoading,
      state,
      updateTags,
    } = this.props.context;

    return (
      <div className="root">
        {/* <label>
          <h4>Location:</h4>
          <LocationSelector
            isSearch={true}
            loading={locationLoading}
            getLocation={getLocation}
            setLocation={this.setLocation}
          />
        </label> */}
        <h4>Categories:</h4>
        <TagSelector
          optionKey="slug"
          value={state.tags}
          onChange={updateTags}
        />
        <div className="group-wrapper first">
          <Radio.Group buttonStyle="solid" size="large">
            {priceOptions.map((item, id) => (
              <Radio.Button value={item.value}>{item.label}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div className="group-wrapper">
          <Radio.Group buttonStyle="solid" size="large">
            <Radio.Button onChange={() => console.log('updated')}>
              🐦 Has Early bird price
            </Radio.Button>
          </Radio.Group>
        </div>
        <div className="group-wrapper">
          <Radio.Group buttonStyle="solid" size="large">
            {timeOptions.map((item, id) => (
              <Radio.Button value={item.value}>{item.label}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div>
          <Radio.Group buttonStyle="solid" size="large">
            {locationOptions.map((item, id) => (
              <Radio.Button value={item.value}>{item.label}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        or
        <div className="group-wrapper">
          <Radio.Group buttonStyle="solid" size="large">
            {continentOptions.map((item, id) => (
              <Radio.Button value={item.value}>{item.label}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div className="group-wrapper">
          <Radio.Group buttonStyle="solid" size="large">
            {languagesOptions.map((item, id) => (
              <Radio.Button value={item.value}>{item.label}</Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <style jsx>{`
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
