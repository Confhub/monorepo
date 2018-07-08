// @flow

import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import AdminPage from '../components/admin/AdminPage';
import { LIST_ITEM_FRAGMENT } from '../components/general/List/ListContainer';

const GET_CONFERENCE_LIST = gql`
  query adminConferences($publishStatus: PUBLISH_STATUS!) {
    conferences(where: { publishStatus: $publishStatus }) {
      ...ListItem
    }
  }
  ${LIST_ITEM_FRAGMENT}
`;

class AdminPageContainer extends React.Component<{}> {
  render() {
    return (
      <Query query={GET_CONFERENCE_LIST} variables={{ publishStatus: 'DRAFT' }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return <AdminPage data={data.conferences} />;
        }}
      </Query>
    );
  }
}

export default AdminPageContainer;
