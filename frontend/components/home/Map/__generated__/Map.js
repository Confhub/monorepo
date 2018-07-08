

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Map
// ====================================================

export type Map_place_location_coordinates = {|
  __typename: "Coordinates",
  latitude: number,
  longitude: number,
|};

export type Map_place_location = {|
  __typename: "Location",
  coordinates: ?Map_place_location_coordinates,
|};

export type Map_place = {|
  __typename: "Place",
  location: Map_place_location,
|};

export type Map = {|
  __typename: "Conference",
  name: string,
  place: ?Map_place,
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