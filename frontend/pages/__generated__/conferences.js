

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: conferences
// ====================================================

export type conferences_conferencesFiltered_place_location_coordinates = {|
  __typename: "Coordinates",
  latitude: number,
  longitude: number,
|};

export type conferences_conferencesFiltered_place_location = {|
  __typename: "Location",
  country: string,
  city: string,
  street: string,
  zip: number,
  coordinates: ?conferences_conferencesFiltered_place_location_coordinates,
|};

export type conferences_conferencesFiltered_place = {|
  __typename: "Place",
  name: string,
  location: conferences_conferencesFiltered_place_location,
|};

export type conferences_conferencesFiltered_image = {|
  __typename: "Image",
  alt: ?string,
  src: string,
|};

export type conferences_conferencesFiltered_topics = {|
  __typename: "Topic",
  id: string,
|};

export type conferences_conferencesFiltered_price = {|
  __typename: "Price",
  amount: number,
|};

export type conferences_conferencesFiltered_tags = {|
  __typename: "Tag",
  id: string,
  name: string,
  slug: string,
|};

export type conferences_conferencesFiltered = {|
  __typename: "Conference",
  publishStatus: ?PUBLISH_STATUS,
  id: string,
  name: string,
  description: ?string,
  startDate: any,
  endDate: any,
  place: ?conferences_conferencesFiltered_place,
  image: ?conferences_conferencesFiltered_image,
  topics: ?Array<conferences_conferencesFiltered_topics>,
  price: ?conferences_conferencesFiltered_price,
  tags: ?Array<conferences_conferencesFiltered_tags>,
|};

export type conferences = {|
  conferencesFiltered: Array<conferences_conferencesFiltered>
|};

export type conferencesVariables = {|
  tags?: ?Array<?string>
|};

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 
 */
export type PUBLISH_STATUS = "DRAFT" | "PUBLISHED";

//==============================================================
// END Enums and Input Objects
//==============================================================