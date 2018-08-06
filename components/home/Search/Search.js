import * as React from 'react';
import HomePageContext from '../HomePageContext';
import TagSelector from '../../TagSelector';
import LocationSelector from '../../LocationSelector';

class Search extends React.Component {
  state = {
    tags: [],
    tagsQuery: '',
  };

  setLocation = ({ center }) => {
    this.props.setLocation(center);
  };

  render() {
    const { locationLoading, tags, setTags, getLocation } = this.props;

    return (
      <div className="root">
        <label>
          <h4>Location:</h4>
          <LocationSelector
            isSearch={true}
            loading={locationLoading}
            getLocation={getLocation}
            setLocation={this.setLocation}
          />
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
