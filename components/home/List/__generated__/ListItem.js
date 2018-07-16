/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ListItem
// ====================================================

export type ListItem_place_location = {|
  __typename: "Location",
  country: string,
  city: string,
  street: string,
  zip: number,
|};

export type ListItem_place = {|
  __typename: "Place",
  name: string,
  location: ListItem_place_location,
|};

export type ListItem_image = {|
  __typename: "Image",
  alt: ?string,
  src: string,
|};

export type ListItem_topics = {|
  __typename: "Topic",
  id: string,
|};

export type ListItem_price = {|
  __typename: "Price",
  amount: number,
|};

export type ListItem_tags = {|
  __typename: "Tag",
  id: string,
  name: string,
  slug: string,
|};

export type ListItem = {|
  __typename: "Conference",
  publishStatus: ?PUBLISH_STATUS,
  id: string,
  name: string,
  description: ?string,
  startDate: any,
  endDate: any,
  place: ?ListItem_place,
  image: ?ListItem_image,
  topics: ?Array<ListItem_topics>,
  price: ?ListItem_price,
  tags: ?Array<ListItem_tags>,
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