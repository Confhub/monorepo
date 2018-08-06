import * as React from 'react';
import { AutoComplete, Icon, Select } from 'antd';
import { searchCity } from './helpers';

const Option = Select.Option;

class LocationSelector extends React.Component {
  state = {
    location: '',
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
    const { getLocation, setLocation } = this.props;
    const { locationList } = this.state;

    if (location === 'my') {
      getLocation();
      this.setState({
        location: 'My location',
      });
      return;
    }

    const item = locationList.find(item => item.id === location);

    const name = item.place_name_en;

    setLocation({ center: item.center, name });

    this.setState({
      location: name,
      locationList: null,
    });
  };

  render() {
    const { loading, isSearch } = this.props;
    const { locationList, location } = this.state;

    return (
      <AutoComplete
        disabled={loading}
        value={location}
        filterOption={false}
        defaultActiveFirstOption={false}
        style={{ width: '100%' }}
        placeholder="Select a location"
        onSearch={this.handleLocationChange}
        onSelect={this.handleLocationSelect}
      >
        {isSearch && (
          <Option value="my">
            <Icon type="environment-o" /> My Location
          </Option>
        )}
        {locationList &&
          locationList.map(item => (
            <Option key={item.id} value={item.id}>
              {item.place_name_en}
            </Option>
          ))}
      </AutoComplete>
    );
  }
}

export default LocationSelector;
