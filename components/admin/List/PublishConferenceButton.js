// @flow

import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import remove from 'lodash/remove';

import { GET_UNPUBLISHED_CONFERENCES_LIST } from './ListContainer';

type Props = {
  id: string,
};

const PUBLISH_CONFERENCE = gql`
  mutation publishConference($id: ID!) {
    publishConference(id: $id) {
      id
    }
  }
`;

class PublishConferenceButton extends React.Component<Props> {
  onButtonClick = async publishConference => {
    const published = await publishConference({
      variables: { id: this.props.id },
    });

    if (published) {
      console.log('Conference published');
    }
  };

  render() {
    return (
      <Mutation
        mutation={PUBLISH_CONFERENCE}
        update={(cache, { data: { publishConference } }) => {
          const data = cache.readQuery({
            query: GET_UNPUBLISHED_CONFERENCES_LIST,
          });
          remove(data.unpublishedConferences, { id: publishConference.id });
          cache.writeQuery({ query: GET_UNPUBLISHED_CONFERENCES_LIST, data });
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
