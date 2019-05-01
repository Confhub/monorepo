import { Select } from 'antd';
import React from 'react';
import { TagsComponent } from '../../generated/graphql';

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

const Option = Select.Option;

// @TODO: reuse it in two places

class TagSelector extends React.Component {
  public handleChange = values => {
    const { data, onChange, optionKey } = this.props;
    const tags = data.tags;
    const items = values.map(
      item =>
        tags.find(tag => (tag[optionKey] || tag) === item) || {
          id: 'tmp-' + item,
          name: item,
        },
    );

    onChange(items);
  };

  public componentDidMount() {
    // On first page load tags might be just list of slug,
    // we need to change it to a proper list of objects
    const { tags, data, optionKey, onChange } = this.props;
    if (tags && tags.length && typeof tags[0] === 'string') {
      const items = tags.map(i => data.tags.find(t => t[optionKey] === i));
      onChange(items);
    }
  }

  public render() {
    const { value, data, edit, optionKey } = this.props;
    const sanitizedValues = value ? value.map(i => i[optionKey] || i) : [];

    return (
      <Select
        mode={edit ? 'tags' : 'multiple'}
        style={{ width: '100%' }}
        placeholder="Choose categories"
        value={sanitizedValues}
        onChange={this.handleChange}
        optionFilterProp="children"
        tokenSeparators={[',']}
        // size="large"
      >
        {data &&
          data.tags &&
          data.tags.map(item => (
            <Option key={item.id} value={item[optionKey]}>
              {item.name}
            </Option>
          ))}
      </Select>
    );
  }
}

export default props => (
  <TagsComponent>
    {({ data, loading, error }) => {
      if (error) {
        return `Error: ${error.message}`;
      }

      if (loading) {
        return 'Loading...';
      }

      return <TagSelector {...props} data={data} />;
    }}
  </TagsComponent>
);
