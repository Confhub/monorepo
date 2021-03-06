import { Select } from 'antd';
import React from 'react';
import { useTagsQuery } from '../../codegen/generated/graphql';
import ErrorMessage from '../ErrorMessage';

const Option = Select.Option;

// @TODO: reuse it in two places

const TagSelector = () => {
  const { data, loading, error } = useTagsQuery();

  if (error) {
    return <ErrorMessage message="Error loading tags." />;
  }
  if (loading) {
    return <div>Loading</div>;
  }

  return <div>some tags here</div>;
};

// class TagSelector extends React.Component {
//   // @ts-ignore
//   public handleChange = values => {
//     // @ts-ignore
//     const { data, onChange, optionKey } = this.props;
//     const tags = data.tags;
//     const items = values.map(
//       // @ts-ignore
//       item =>
//         // @ts-ignore
//         tags.find(tag => (tag[optionKey] || tag) === item) || {
//           id: 'tmp-' + item,
//           name: item,
//         },
//     );

//     onChange(items);
//   };

//   public componentDidMount() {
//     // On first page load tags might be just list of slug,
//     // we need to change it to a proper list of objects
//     // @ts-ignore
//     const { tags, data, optionKey, onChange } = this.props;
//     if (tags && tags.length && typeof tags[0] === 'string') {
//       // @ts-ignore
//       const items = tags.map(i => data.tags.find(t => t[optionKey] === i));
//       onChange(items);
//     }
//   }

//   public render() {
//     // @ts-ignore
//     const { value, data, edit, optionKey } = this.props;
//     // @ts-ignore
//     const sanitizedValues = value ? value.map(i => i[optionKey] || i) : [];

//     return (
//       <Select
//         mode={edit ? 'tags' : 'multiple'}
//         style={{ width: '100%' }}
//         placeholder="Choose categories"
//         value={sanitizedValues}
//         onChange={this.handleChange}
//         optionFilterProp="children"
//         tokenSeparators={[',']}
//         // size="large"
//       >
//         {data &&
//           data.tags &&
//           // @ts-ignore
//           data.tags.map(item => (
//             <Option key={item.id} value={item[optionKey]}>
//               {item.name}
//             </Option>
//           ))}
//       </Select>
//     );
//   }
// }

export default TagSelector;
