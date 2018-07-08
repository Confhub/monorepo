

/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateConference
// ====================================================

export type updateConference_updateConference = {|
  __typename: "Conference",
  id: string,
  publishStatus: ?PUBLISH_STATUS,
|};

export type updateConference = {|
  updateConference: ?updateConference_updateConference
|};

export type updateConferenceVariables = {|
  id: string
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