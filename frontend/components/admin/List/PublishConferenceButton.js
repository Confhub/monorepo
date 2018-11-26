import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import remove from 'lodash/remove';
import { message } from 'antd';

const PUBLISH_CONFERENCE = gql`
  mutation publishConference($id: ID!) {
    publishConference(id: $id) {
      id
    }
  }
`;

class PublishConferenceButton extends React.Component {
  onButtonClick = async publishConference => {
    const published = await publishConference({
      variables: { id: this.props.id },
    });

    if (published) {
      message.success('Conference published');
    }
  };

  render() {
    const { query } = this.props;

    return (
      <Mutation
        mutation={PUBLISH_CONFERENCE}
        update={(cache, { data: { publishConference } }) => {
          const data = cache.readQuery(query);
          remove(data.conferences, { id: publishConference.id });
          cache.writeQuery({ ...query, data });
        }}
      >
        {(updateConference, { error }) => {
          if (error) return <p>Error :(</p>;

          return (
            <a onClick={() => this.onButtonClick(updateConference)}>approve</a>
          );
        }}
      </Mutation>
    );
  }
}

export default PublishConferenceButton;
