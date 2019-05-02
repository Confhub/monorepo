import { AutoComplete, Icon, Select } from 'antd';
import idx from 'idx';
import * as React from 'react';
import { searchCity } from './helpers';

const Option = Select.Option;

class LocationSelector extends React.Component {
  public state = {
    location: '',
    locationList: null,
  };

  public handleLocationChange = async location => {
    const { isSearch } = this.props;
    this.setState({
      location,
    });

    const locationList = await searchCity(location, { search: isSearch });

    this.setState({ locationList });
  };

  public handleLocationSelect = location => {
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

    const city =
      item.context && item.context.find(i => i.id.startsWith('region'));
    const country =
      item.context && item.context.find(i => i.id.startsWith('country'));

    setLocation({
      center: item.center,
      name,
      address: idx(item, _ => _.properties.address) || null,
      city: city ? city.text : null,
      country: country ? country.text : null,
    });

    this.setState({
      location: name,
      locationList: null,
    });
  };

  public render() {
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
