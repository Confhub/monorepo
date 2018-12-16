import { AutoComplete, Icon, Select } from 'antd';
import idx from 'idx';
import throttle from 'lodash/throttle';
import * as React from 'react';
import { getPlaceAutocomplete, getPlaceDetails } from './helpers';

const Option = Select.Option;

class LocationSelector extends React.Component {
  public state = {
    location: this.props.initialValue || '',
    locationList: null,
  };

  public getLocationListThrottled = throttle(this.getLocationList, 600, {
    leading: false,
  });

  public handleLocationChange = async location => {
    this.setState({
      location,
    });

    this.getLocationListThrottled(location);
  };

  public getLocationList = async location => {
    const locationList = await getPlaceAutocomplete(location);

    this.setState({ locationList });
  };

  public handleLocationSelect = async location => {
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

    const placeDetails = await getPlaceDetails(item.place_id);

    const name = idx(placeDetails, _ => _.formatted_address) || null;

    const city =
      (placeDetails.address_components &&
        placeDetails.address_components.find(i =>
          i.types.includes('locality')
        )) ||
      placeDetails.address_components.find(i =>
        i.types.includes('administrative_area_level_1')
      );
    const country =
      placeDetails.address_components &&
      placeDetails.address_components.find(i => i.types.includes('country'));

    setLocation({
      coordinates: idx(placeDetails, _ => _.geometry.location) || null,
      name,
      address: name,
      city: city ? city.long_name : null,
      country: country ? country.long_name : null,
      countryCode: country ? country.short_name : null,
    });

    this.setState({
      location: name,
      locationList: null,
    });
  };

  public reset = () => {
    this.setState({
      location: '',
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
              {item.description}
            </Option>
          ))}
      </AutoComplete>
    );
  }
}

export default LocationSelector;
