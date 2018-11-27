import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import moment from 'moment';
import { isEqual } from 'lodash';

import Form from './Form';

const EDIT_CONFERENCE = gql`
  mutation UpdateConference(
    $id: ID!
    $name: String
    $url: String
    $startDate: DateTime
    $endDate: DateTime
    $location: CreateConferenceLocationInput
    $tags: [CreateConferenceTagInput]
    $description: String
    $image: CreateConferenceImageInput
  ) {
    updateConference(
      id: $id
      data: {
        name: $name
        url: $url
        startDate: $startDate
        endDate: $endDate
        location: $location
        tags: $tags
        description: $description
        image: $image
      }
    ) {
      id
    }
  }
`;

const isTheSameDate = (left, right) => {
  const l = left.split('T')[0];
  const r = right.split('T')[0];

  return l === r;
};

class EditConference extends React.Component {
  onSubmit = (mutation, data) => {
    const {
      name,
      url,
      startDate,
      endDate,
      description,
      location,
      tags,
      image,
    } = this.props.data;
    const vars = {};
    if (name !== data.name) {
      vars.name = data.name;
    }
    if (url !== data.url) {
      vars.url = data.url;
    }
    if (description !== data.description) {
      vars.description = data.description;
    }
    if (!isTheSameDate(startDate, data.startDate)) {
      vars.startDate = data.startDate;
    }
    if (!isTheSameDate(endDate, data.endDate)) {
      vars.endDate = data.endDate;
    }
    if (location.address !== data.location.address) {
      vars.location = data.location;
    }
    if (!isEqual(tags, data.tags)) {
      vars.tags = data.tags;
    }
    if (image.src !== data.image.src) {
      vars.image = data.image;
    }

    mutation({
      variables: {
        id: this.props.data.id,
        ...vars,
      },
    });
  };

  render() {
    const {
      name,
      url,
      startDate,
      endDate,
      tags,
      description,
      image,
      location,
    } = this.props.data;

    const data = {
      name,
      url,
      date: [moment(startDate), moment(endDate)],
      tags,
      description,
      ...(image && {
        image: [
          {
            uid: image.id,
            name: image.alt || 'thumbnail',
            status: 'done',
            response: {
              secure_url: image.src,
            },
            url: image.src,
          },
        ],
      }),
      location: {
        country: location.country,
        city: location.city,
        address: location.address,
        coordinates: {
          lng: location.coordinates.longitude,
          lat: location.coordinates.latitude,
        },
      },
    };
    return (
      <Mutation mutation={EDIT_CONFERENCE}>
        {updateConference => (
          <Form
            data={data}
            onSubmit={data => this.onSubmit(updateConference, data)}
          />
        )}
      </Mutation>
    );
  }
}

EditConference.fragments = {
  data: gql`
    fragment EditConference on Conference {
      id
      name
      url
      startDate
      endDate
      description
      tags {
        id
        name
        slug
      }
      image {
        id
        src
        alt
      }
      location {
        id
        country
        city
        address
        coordinates {
          latitude
          longitude
        }
      }
    }
  `,
};

export default EditConference;
