import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Layout } from 'antd';

import List from '../components/home/List';

import ListComponent from '../components/home/List';

const GET_CONFERENCE_LIST = gql`
  query conferences($publishStatus: PUBLISH_STATUS!) {
    conferences(where: { publishStatus: $publishStatus }) {
      ...List
    }
  }
  ${ListComponent.fragments.items}
`;

export default class Hello extends React.Component {
  render() {
    return (
      <Query query={GET_CONFERENCE_LIST} variables={{ publishStatus: 'DRAFT' }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <Layout.Content style={{ padding: '0 20px', marginTop: 20 }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <List items={data.conferences} />
              </div>
            </Layout.Content>
          );
        }}
      </Query>
    );
  }
}
