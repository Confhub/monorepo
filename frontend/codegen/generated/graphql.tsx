export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  DateTime: any;
};

export type AuthPayload = {
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Conference = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  image?: Maybe<Image>;
  url: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  location: Location;
  publishStatus: PublishStatus;
};

export type ConferenceImageInput = {
  id?: Maybe<Scalars['ID']>;
  src?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
};

export type ConferenceLocationInput = {
  country: Scalars['String'];
  city: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
};

export type ConferenceSortByInput = {
  publishStatus?: Maybe<PublishStatus>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  interval?: Maybe<Scalars['Int']>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type ConferenceTagInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type CreateConferenceInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<ConferenceTagInput>>>;
  image?: Maybe<ConferenceImageInput>;
  url: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  location: ConferenceLocationInput;
};

export type Image = {
  id: Scalars['ID'];
  src: Scalars['String'];
  alt?: Maybe<Scalars['String']>;
};

export type Location = {
  id: Scalars['ID'];
  country?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
};

export enum PublishStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export enum Region {
  NorthAmerica = 'NORTH_AMERICA',
  LatinAmerica = 'LATIN_AMERICA',
  Europe = 'EUROPE',
  Africa = 'AFRICA',
  MiddleEast = 'MIDDLE_EAST',
  Asia = 'ASIA',
  Oceania = 'OCEANIA',
}

/** Root Mutation */
export type RootMutation = {
  logIn?: Maybe<AuthPayload>;
  signUp?: Maybe<AuthPayload>;
  changeUserRole?: Maybe<User>;
  createConference?: Maybe<Conference>;
  publishConference?: Maybe<Conference>;
  deleteConference?: Maybe<Conference>;
  createTag?: Maybe<Tag>;
  deleteTag?: Maybe<Tag>;
  updateTag?: Maybe<Tag>;
};

/** Root Mutation */
export type RootMutationLogInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** Root Mutation */
export type RootMutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};

/** Root Mutation */
export type RootMutationChangeUserRoleArgs = {
  id: Scalars['ID'];
  newRole: UserRole;
};

/** Root Mutation */
export type RootMutationCreateConferenceArgs = {
  data: CreateConferenceInput;
};

/** Root Mutation */
export type RootMutationPublishConferenceArgs = {
  id: Scalars['ID'];
};

/** Root Mutation */
export type RootMutationDeleteConferenceArgs = {
  id: Scalars['ID'];
};

/** Root Mutation */
export type RootMutationCreateTagArgs = {
  name: Scalars['String'];
};

/** Root Mutation */
export type RootMutationDeleteTagArgs = {
  id: Scalars['ID'];
};

/** Root Mutation */
export type RootMutationUpdateTagArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Root Query */
export type RootQuery = {
  conference?: Maybe<Conference>;
  conferences?: Maybe<Array<Maybe<Conference>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  me?: Maybe<User>;
};

/** Root Query */
export type RootQueryConferenceArgs = {
  id: Scalars['ID'];
};

/** Root Query */
export type RootQueryConferencesArgs = {
  sortBy?: Maybe<ConferenceSortByInput>;
};

export type Tag = {
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type User = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export enum UserRole {
  Attendee = 'ATTENDEE',
  Speaker = 'SPEAKER',
  Moderator = 'MODERATOR',
  Admin = 'ADMIN',
}
export type ConferencePartsFragment = { __typename?: 'Conference' } & Pick<
  Conference,
  | 'id'
  | 'name'
  | 'description'
  | 'url'
  | 'startDate'
  | 'endDate'
  | 'publishStatus'
> & {
    tags: Maybe<
      Array<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'name' | 'slug'>>
    >;
    image: Maybe<{ __typename?: 'Image' } & Pick<Image, 'src' | 'alt'>>;
    location: { __typename?: 'Location' } & Pick<Location, 'city' | 'country'>;
  };

export type ConferencesQueryVariables = {
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  interval?: Maybe<Scalars['Int']>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

export type ConferencesQuery = { __typename?: 'RootQuery' } & {
  conferences: Maybe<
    Array<Maybe<{ __typename?: 'Conference' } & ConferencePartsFragment>>
  >;
};

export type ConferenceQueryVariables = {
  id: Scalars['ID'];
};

export type ConferenceQuery = { __typename?: 'RootQuery' } & {
  conference: Maybe<{ __typename?: 'Conference' } & ConferencePartsFragment>;
};

export type TagsQueryVariables = {};

export type TagsQuery = { __typename?: 'RootQuery' } & {
  tags: Maybe<
    Array<Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'id' | 'name' | 'slug'>>>
  >;
};

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const ConferencePartsFragmentDoc = gql`
  fragment ConferenceParts on Conference {
    id
    name
    description
    tags {
      id
      name
      slug
    }
    image {
      src
      alt
    }
    url
    startDate
    endDate
    publishStatus
    location {
      city
      country
    }
  }
`;
export const ConferencesDocument = gql`
  query conferences($tags: [String], $interval: Int, $regions: [Region]) {
    conferences(
      sortBy: {
        publishStatus: PUBLISHED
        tags: $tags
        regions: $regions
        interval: $interval
      }
    ) {
      ...ConferenceParts
    }
  }
  ${ConferencePartsFragmentDoc}
`;

export const ConferencesComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<ConferencesQuery, ConferencesQueryVariables>,
      'query'
    >,
    'variables'
  > & { variables?: ConferencesQueryVariables },
) => (
  <ReactApollo.Query<ConferencesQuery, ConferencesQueryVariables>
    query={ConferencesDocument}
    {...props}
  />
);

export type ConferencesProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ConferencesQuery, ConferencesQueryVariables>
> &
  TChildProps;
export function withConferences<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ConferencesQuery,
    ConferencesQueryVariables,
    ConferencesProps<TChildProps>
  >,
) {
  return ReactApollo.withQuery<
    TProps,
    ConferencesQuery,
    ConferencesQueryVariables,
    ConferencesProps<TChildProps>
  >(ConferencesDocument, {
    alias: 'withConferences',
    ...operationOptions,
  });
}
export const ConferenceDocument = gql`
  query conference($id: ID!) {
    conference(id: $id) {
      ...ConferenceParts
    }
  }
  ${ConferencePartsFragmentDoc}
`;

export const ConferenceComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<ConferenceQuery, ConferenceQueryVariables>,
      'query'
    >,
    'variables'
  > & { variables: ConferenceQueryVariables },
) => (
  <ReactApollo.Query<ConferenceQuery, ConferenceQueryVariables>
    query={ConferenceDocument}
    {...props}
  />
);

export type ConferenceProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ConferenceQuery, ConferenceQueryVariables>
> &
  TChildProps;
export function withConference<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ConferenceQuery,
    ConferenceQueryVariables,
    ConferenceProps<TChildProps>
  >,
) {
  return ReactApollo.withQuery<
    TProps,
    ConferenceQuery,
    ConferenceQueryVariables,
    ConferenceProps<TChildProps>
  >(ConferenceDocument, {
    alias: 'withConference',
    ...operationOptions,
  });
}
export const TagsDocument = gql`
  query tags {
    tags {
      id
      name
      slug
    }
  }
`;

export const TagsComponent = (
  props: Omit<
    Omit<ReactApollo.QueryProps<TagsQuery, TagsQueryVariables>, 'query'>,
    'variables'
  > & { variables?: TagsQueryVariables },
) => (
  <ReactApollo.Query<TagsQuery, TagsQueryVariables>
    query={TagsDocument}
    {...props}
  />
);

export type TagsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<TagsQuery, TagsQueryVariables>
> &
  TChildProps;
export function withTags<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    TagsQuery,
    TagsQueryVariables,
    TagsProps<TChildProps>
  >,
) {
  return ReactApollo.withQuery<
    TProps,
    TagsQuery,
    TagsQueryVariables,
    TagsProps<TChildProps>
  >(TagsDocument, {
    alias: 'withTags',
    ...operationOptions,
  });
}
