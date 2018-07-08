

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: conferences
// ====================================================

export type conferences_conferences_place_location_coordinates = {|
  __typename: "Coordinates",
  latitude: number,
  longitude: number,
|};

export type conferences_conferences_place_location = {|
  __typename: "Location",
  country: string,
  city: string,
  street: string,
  zip: number,
  coordinates: ?conferences_conferences_place_location_coordinates,
|};

export type conferences_conferences_place = {|
  __typename: "Place",
  name: string,
  location: conferences_conferences_place_location,
|};

export type conferences_conferences_image = {|
  __typename: "Image",
  alt: ?string,
  src: string,
|};

export type conferences_conferences_topics = {|
  __typename: "Topic",
  id: string,
|};

export type conferences_conferences_price = {|
  __typename: "Price",
  amount: number,
|};

export type conferences_conferences = {|
  __typename: "Conference",
  publishStatus: ?PUBLISH_STATUS,
  id: string,
  name: string,
  description: ?string,
  startDate: any,
  endDate: any,
  place: ?conferences_conferences_place,
  image: ?conferences_conferences_image,
  topics: ?Array<conferences_conferences_topics>,
  price: ?conferences_conferences_price,
|};

export type conferences = {|
  conferences: Array<?conferences_conferences>
|};

export type conferencesVariables = {|
  publishStatus: PUBLISH_STATUS
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