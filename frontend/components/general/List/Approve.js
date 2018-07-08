// @flow

import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button } from 'antd';

import { GET_CONFERENCE_LIST } from '../../../pages/admin';

type Props = {
  id: string,
};

const PUBLISH_CONFERENCE = gql`
  mutation updateConference($id: ID!) {
    updateConference(where: { id: $id }, data: { publishStatus: PUBLISHED }) {
      id
      publishStatus
    }
  }
`;

class Approve extends React.Component<Props> {
  onButtonClick = async updateConference => {
    const publishConference = await updateConference({
      variables: { id: this.props.id },
    });

    if (publishConference) {
      console.log('Conference published');
    }
  };

  render() {
    return (
      <Mutation
        mutation={PUBLISH_CONFERENCE}
        update={async (cache, { data }) => {
          const { conferences } = cache.readQuery({
            query: GET_CONFERENCE_LIST,
            variables: { publishStatus: 'DRAFT' },
          });

          console.log({ conferences });

          cache.writeQuery({
            query: GET_CONFERENCE_LIST,
            data: conferences,
          });
        }}
      >
        {(updateConference, { error }) => {
          if (error) return <p>Error :(</p>;

          return (
            <Button
              type="primary"
              onClick={() => this.onButtonClick(updateConference)}
            >
              Approve
            </Button>
          );
        }}
      </Mutation>
    );
  }
}

export default Approve;
