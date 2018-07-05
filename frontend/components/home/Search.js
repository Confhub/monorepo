import React from 'react';
import { Select, Icon } from 'antd';
import MainContext from '../../context/MainContext';
import { searchCity } from '../helpers';

const Option = Select.Option;

class Search extends React.Component {
  state = {
    location: '',
    tags: [],
    locationList: null,
  };

  handleLocationChange = async location => {
    this.setState({
      location,
    });

    const locationList = await searchCity(location);

    this.setState({ locationList });
  };

  handleLocationSelect = location => {
    if (location === 'my') {
      this.props.getLocation();
      this.setState({
        location: 'My location',
      });
      return;
    }

    const item = this.state.locationList.find(item => item.id === location);

    this.props.setLocation(item.center);
    this.setState({
      location: item.place_name_en,
      locationList: null,
    });
  };

  handleTagsChange = value => {
    // this.setState;
  };

  render() {
    const { locationList, location } = this.state;
    const { locationLoading } = this.props;

    return (
      <div className="root">
        <label>
          <h4>Location:</h4>
          <Select
            disabled={locationLoading}
            mode="combobox"
            value={location}
            filterOption={false}
            defaultActiveFirstOption={false}
            style={{ width: '100%' }}
            placeholder="Select a location"
            onSearch={this.handleLocationChange}
            onSelect={this.handleLocationSelect}
          >
            <Option value="my">
              <Icon type="environment-o" /> My Location
            </Option>
            {locationList &&
              locationList.map(item => (
                <Option key={item.id} value={item.id}>
                  {item.place_name_en}
                </Option>
              ))}
          </Select>
        </label>
        <label>
          <h4>Categories:</h4>
          <Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Choose categories"
            onChange={this.handleTagsChange}
          >
            <Option value="javascript">Javascript</Option>
            <Option value="frontend">Frontend</Option>
            <Option value="graphql">GraphQL</Option>
            <Option value="react">React</Option>
          </Select>
        </label>
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
        `}</style>
      </div>
    );
  }
}

export default props => (
  <MainContext.Consumer>
    {({ getLocation, setLocation, locationLoading }) => (
      <Search
        {...props}
        getLocation={getLocation}
        setLocation={setLocation}
        locationLoading={locationLoading}
      />
    )}
  </MainContext.Consumer>
);
