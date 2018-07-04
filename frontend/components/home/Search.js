import React from 'react';
import { Select, Icon } from 'antd';
import MainContext from '../../context/MainContext';

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
    if (location === 0) {
      this.props.getLocation();
    }
  };

  handleTagsChange = value => {
    this.setState;
  };

  render() {
    return (
      <div className="root">
        <label>
          <h4>Location:</h4>
          <Select
            style={{ width: '100%' }}
            showSearch
            placeholder="Select a location"
            optionFilterProp="children"
            onChange={this.handleLocationChange}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value={0}>
              <Icon type="environment-o" /> My Location
            </Option>
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
    {({ getLocation }) => <Search {...props} getLocation={getLocation} />}
  </MainContext.Consumer>
);
