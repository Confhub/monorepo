// @flow

import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import remove from 'lodash/remove';
import { message } from 'antd';

type Props = {
  id: string,
};

const DELETE_CONFERENCE = gql`
  mutation deleteConference($id: ID!) {
    deleteConference(id: $id) {
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
      message.success('Conference removed');
    }
  };

  render() {
    const { query } = this.props;

    return (
      <Mutation
        mutation={DELETE_CONFERENCE}
        update={(cache, { data: { deleteConference } }) => {
          const data = cache.readQuery(query);
          remove(data.filteredConferences, { id: deleteConference.id });
          cache.writeQuery({ ...query, data });
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
