

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: adminConferences
// ====================================================

export type adminConferences_conferences_place_location = {|
  __typename: "Location",
  country: string,
  city: string,
  street: string,
  zip: number,
|};

export type adminConferences_conferences_place = {|
  __typename: "Place",
  name: string,
  location: adminConferences_conferences_place_location,
|};

export type adminConferences_conferences_image = {|
  __typename: "Image",
  alt: ?string,
  src: string,
|};

export type adminConferences_conferences_topics = {|
  __typename: "Topic",
  id: string,
|};

export type adminConferences_conferences_price = {|
  __typename: "Price",
  amount: number,
|};

export type adminConferences_conferences_tags = {|
  __typename: "Tag",
  id: string,
  name: string,
  slug: string,
|};

export type adminConferences_conferences = {|
  __typename: "Conference",
  publishStatus: ?PUBLISH_STATUS,
  id: string,
  name: string,
  description: ?string,
  startDate: any,
  endDate: any,
  place: ?adminConferences_conferences_place,
  image: ?adminConferences_conferences_image,
  topics: ?Array<adminConferences_conferences_topics>,
  price: ?adminConferences_conferences_price,
  tags: ?Array<adminConferences_conferences_tags>,
|};

export type adminConferences = {|
  conferences: Array<?adminConferences_conferences>
|};

export type adminConferencesVariables = {|
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