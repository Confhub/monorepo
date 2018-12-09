import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import idx from 'idx';

import Form from './Form';

const CREATE_CONFERENCE = gql`
  mutation CreateConference(
    $name: String!
    $url: String!
    $startDate: DateTime!
    $endDate: DateTime!
    $location: ConferenceLocationInput!
    $tags: [ConferenceTagInput]
    $description: String
    $image: ConferenceImageInput
    $prices: [PriceInput]
  ) {
    createConference(
      data: {
        name: $name
        url: $url
        startDate: $startDate
        endDate: $endDate
        location: $location
        tags: $tags
        description: $description
        image: $image
        prices: $prices
      }
    ) {
      id
    }
  }
`;

class NewConference extends React.Component {
  onSubmit(mutation, data) {
    mutation({ variables: data });
  }

  render() {
    return (
      <Mutation mutation={CREATE_CONFERENCE}>
        {(createConference, { loading, error, data }) => {
          return (
            <Form
              onSubmit={data => this.onSubmit(createConference, data)}
              loading={loading}
              error={error}
              result={idx(data, _ => _.createConference.id)}
            />
          );
        }}
      </Mutation>
    );
  }
}

export default NewConference;
