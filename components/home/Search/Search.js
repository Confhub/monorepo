import * as React from 'react';
import { Select, Icon, AutoComplete } from 'antd';
import HomePageContext from '../HomePageContext';
import { searchCity } from '../../helpers';
import TagSelector from '../../TagSelector';

const Option = Select.Option;

class Search extends React.Component {
  state = {
    location: '',
    tags: [],
    tagsQuery: '',
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

  render() {
    const { locationList, location } = this.state;
    const { locationLoading, tags, setTags } = this.props;

    return (
      <div className="root">
        <label>
          <h4>Location:</h4>
          <AutoComplete
            disabled={locationLoading}
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
          </AutoComplete>
        </label>
        <h4>Categories:</h4>
        <TagSelector optionKey="slug" value={tags} onChange={setTags} />
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
  <HomePageContext.Consumer>
    {({ getLocation, setLocation, locationLoading, tags, setTags }) => (
      <Search
        {...props}
        getLocation={getLocation}
        setLocation={setLocation}
        locationLoading={locationLoading}
        tags={tags}
        setTags={setTags}
      />
    )}
  </HomePageContext.Consumer>
);
