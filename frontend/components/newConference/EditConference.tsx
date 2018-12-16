import gql from "graphql-tag";
import idx from "idx";
import { isEqual } from "lodash";
import moment from "moment";
import * as React from "react";
import { Mutation } from "react-apollo";

import Form from "./Form";

const EDIT_CONFERENCE = gql`
  mutation UpdateConference(
    $id: ID!
    $name: String
    $url: String
    $startDate: DateTime
    $endDate: DateTime
    $location: ConferenceLocationInput
    $tags: [ConferenceTagInput]
    $description: String
    $image: ConferenceImageInput
    $prices: [PriceInput]
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
        prices: $prices
      }
    ) {
      id
    }
  }
`;

const isTheSameDate = (left, right) => {
  const l = left.split("T")[0];
  const r = right.split("T")[0];

  return l === r;
};

// to check equality we need remove '__typename'
const sanitizeData = ({ __typename, ...data }) => data;

class EditConference extends React.Component {
  public onSubmit = (mutation, data) => {
    const {
      name,
      url,
      startDate,
      endDate,
      description,
      location,
      tags,
      image,
      prices
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
    const sanitizedTags = tags && tags.map(sanitizeData);

    if (!isEqual(sanitizedTags, data.tags)) {
      // console.log(tags, data.tags);
      vars.tags = data.tags;
    }
    if (image.src !== data.image.src) {
      vars.image = data.image;
    }
    const sanitizedPrice = prices && prices.map(sanitizeData);
    if (!isEqual(sanitizedPrice, data.prices)) {
      // console.log(prices, data.prices);
      vars.prices = data.prices;
    }

    mutation({
      variables: {
        id: this.props.data.id,
        ...vars
      }
    });
  };

  public render() {
    const {
      name,
      url,
      startDate,
      endDate,
      tags,
      description,
      image,
      location,
      prices
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
            name: image.alt || "thumbnail",
            status: "done",
            response: {
              secure_url: image.src
            },
            url: image.src
          }
        ]
      }),
      location: {
        country: location.country,
        city: location.city,
        address: location.address,
        coordinates: {
          lng: location.coordinates.longitude,
          lat: location.coordinates.latitude
        }
      },
      prices: prices.map(({ currency, __typename, ...i }) => i),
      currency: idx(prices, _ => _[0].currency)
    };
    return (
      <Mutation mutation={EDIT_CONFERENCE}>
        {(updateConference, { loading, error, data: result }) => (
          <Form
            data={data}
            onSubmit={data => this.onSubmit(updateConference, data)}
            loading={loading}
            error={error}
            result={idx(result, _ => _.createConference.id)}
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
      prices {
        name
        amount
        currency
        expirationDate
      }
    }
  `
};

export default EditConference;
