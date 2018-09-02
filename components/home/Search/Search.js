import * as React from 'react';
import { Checkbox, Radio } from 'antd';
import { HomePageContext } from '../HomePageContext';
import TagSelector from '../../TagSelector';
import LocationSelector from '../../LocationSelector';

const priceOptions = [
  { id: 0, label: '💵 < $500', value: 'less-than-500' },
  { id: 1, label: '💵 < $1000', value: 'less-than-1000' },
];

const timeOptions = [
  { id: 0, label: '⏰ < 1 month', value: 'january' },
  { id: 1, label: '⏰ < 3 months', value: 'february' },
  { id: 2, label: '⏰ < 6 month', value: 'march' },
  { id: 3, label: '⏰ < 1 year', value: 'april' },
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
  { id: 3, label: '🇨🇳 Chinese', value: 'chenese' },
  { id: 4, label: '🇷🇺 Russian', value: 'russian' },
  { id: 5, label: '🇮🇳 Hindi', value: 'hindi' },
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
            {priceOptions.map(item => (
              <Radio.Button key={item.id} value={item.value}>
                {item.label}
              </Radio.Button>
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
            {timeOptions.map(item => (
              <Radio.Button key={item.id} value={item.value}>
                {item.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div>
          <Radio.Group buttonStyle="solid" size="large">
            {locationOptions.map(item => (
              <Radio.Button key={item.id} value={item.value}>
                {item.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
        or
        <div className="group-wrapper">
          <Radio.Group buttonStyle="solid" size="large">
            {continentOptions.map(item => (
              <Radio.Button key={item.id} value={item.value}>
                {item.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div className="group-wrapper">
          <Radio.Group buttonStyle="solid" size="large">
            {languagesOptions.map(item => (
              <Radio.Button key={item.id} value={item.value}>
                {item.label}
              </Radio.Button>
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
