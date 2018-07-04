import React from 'react';
import { Select, Icon } from 'antd';

const Option = Select.Option;

class Search extends React.Component {
  state = {
    location: '',
    tags: [],
  };

  handleLocationChange = location => {
    this.setState({
      location,
    });
  };

  handleTagsChange = value => {
    this.setState;
  };

  render() {
    return (
      <div>
        <Select
          style={{ width: '100%' }}
          showSearch
          placeholder="Select a location"
          optionFilterProp="children"
          onChange={this.handleLocationChange}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          <Option value="jack">
            <Icon type="environment-o" /> My Location
          </Option>
          <Option value="all">Whole world </Option>
          <Option value="lucy">Europe</Option>
          <Option value="tom">US</Option>
        </Select>
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Tags Mode"
          onChange={this.handleTagsChange}
        >
          <Option value="javascript">Javascript</Option>
          <Option value="frontend">Frontend</Option>
          <Option value="graphql">GraphQL</Option>
          <Option value="react">React</Option>
        </Select>
      </div>
    );
  }
}

export default Search;
