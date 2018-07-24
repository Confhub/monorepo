// @flow

import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import remove from 'lodash/remove';

type Props = {
  id: string,
};

const DELETE_CONFERENCE = gql`
  mutation deleteConference($id: ID!) {
    deleteConference(where: { id: $id }) {
      id
    }
  }
`;

class DeleteConferenceButton extends React.Component<Props> {
  onButtonClick = async deleteConference => {
    const deleted = await deleteConference({
      variables: { id: this.props.id },
    });

    if (deleted) {
      console.log('Conference deleted');
    }
  };

  render() {
    const { status, query } = this.props;

    return (
      <Mutation
        mutation={DELETE_CONFERENCE}
        update={(cache, { data: { deleteConference } }) => {
          const data = cache.readQuery({
            query,
          });
          remove(
            status ? data.publishedConferences : data.unpublishedConferences,
            { id: deleteConference.id },
          );
          cache.writeQuery({ query, data });
        }}
      >
        {(deleteConference, { error }) => {
          if (error) return <p>Error :(</p>;

          return (
            <a onClick={() => this.onButtonClick(deleteConference)}>delete</a>
          );
        }}
      </Mutation>
    );
  }
}

export default DeleteConferenceButton;
