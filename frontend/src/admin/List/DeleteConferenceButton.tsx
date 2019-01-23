import { message } from "antd";
import gql from "graphql-tag";
import remove from "lodash/remove";
import * as React from "react";
import { Mutation } from "react-apollo";

interface Props {
  id: string;
}

const DELETE_CONFERENCE = gql`
  mutation deleteConference($id: ID!) {
    deleteConference(id: $id) {
      id
    }
  }
`;

class DeleteConferenceButton extends React.Component<Props> {
  public onButtonClick = async deleteConference => {
    const deleted = await deleteConference({
      variables: { id: this.props.id }
    });

    if (deleted) {
      message.success("Conference removed");
    }
  };

  public render() {
    const { query } = this.props;

    return (
      <Mutation
        mutation={DELETE_CONFERENCE}
        update={(cache, { data: { deleteConference } }) => {
          const data = cache.readQuery(query);
          remove(data.conferences, { id: deleteConference.id });
          cache.writeQuery({ ...query, data });
        }}
      >
        {(deleteConference, { error }) => {
          if (error) { return <p>Error :(</p>; }

          return (
            <a onClick={() => this.onButtonClick(deleteConference)}>delete</a>
          );
        }}
      </Mutation>
    );
  }
}

export default DeleteConferenceButton;
