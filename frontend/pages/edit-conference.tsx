import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

// import EditConference from '../components/newConference/EditConference';

const GET_CONFERENCE = gql`
  query conference($id: ID!) {
    conference(id: $id) {
      ...EditConference
    }
  }
  # ${EditConference.fragments.data}
`;

class NewConferencePage extends React.Component {
  public render() {
    const { query } = this.props;
    if (!query && query.id) {
      return 'Please, provide conference ID';
    }

    return (
      <Query query={GET_CONFERENCE} variables={{ id: query.id }}>
        {({ loading, error, data }) => {
          if (loading) {
            return 'Loading...';
          }
          if (error) {
            return 'Error...';
          }
          // return <EditConference data={data.conference} />;
        }}
      </Query>
    );
  }
}

export default NewConferencePage;
