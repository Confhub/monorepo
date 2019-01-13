import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    conferences: <T = Array<Conference | null>>(args: { where?: ConferenceWhereInput | null, orderBy?: ConferenceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    images: <T = Array<Image | null>>(args: { where?: ImageWhereInput | null, orderBy?: ImageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    coordinateses: <T = Array<Coordinates | null>>(args: { where?: CoordinatesWhereInput | null, orderBy?: CoordinatesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Array<Location | null>>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Array<Tag | null>>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    conference: <T = Conference | null>(args: { where: ConferenceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    image: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    coordinates: <T = Coordinates | null>(args: { where: CoordinatesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    conferencesConnection: <T = ConferenceConnection>(args: { where?: ConferenceWhereInput | null, orderBy?: ConferenceOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imagesConnection: <T = ImageConnection>(args: { where?: ImageWhereInput | null, orderBy?: ImageOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    coordinatesesConnection: <T = CoordinatesConnection>(args: { where?: CoordinatesWhereInput | null, orderBy?: CoordinatesOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput | null, orderBy?: LocationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput | null, orderBy?: TagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createConference: <T = Conference>(args: { data: ConferenceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createImage: <T = Image>(args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCoordinates: <T = Coordinates>(args: { data: CoordinatesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateConference: <T = Conference | null>(args: { data: ConferenceUpdateInput, where: ConferenceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateImage: <T = Image | null>(args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCoordinates: <T = Coordinates | null>(args: { data: CoordinatesUpdateInput, where: CoordinatesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteConference: <T = Conference | null>(args: { where: ConferenceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteImage: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCoordinates: <T = Coordinates | null>(args: { where: CoordinatesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertConference: <T = Conference>(args: { where: ConferenceWhereUniqueInput, create: ConferenceCreateInput, update: ConferenceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertImage: <T = Image>(args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCoordinates: <T = Coordinates>(args: { where: CoordinatesWhereUniqueInput, create: CoordinatesCreateInput, update: CoordinatesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyConferences: <T = BatchPayload>(args: { data: ConferenceUpdateManyMutationInput, where?: ConferenceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyImages: <T = BatchPayload>(args: { data: ImageUpdateManyMutationInput, where?: ImageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCoordinateses: <T = BatchPayload>(args: { data: CoordinatesUpdateManyMutationInput, where?: CoordinatesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateManyMutationInput, where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateManyMutationInput, where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyConferences: <T = BatchPayload>(args: { where?: ConferenceWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyImages: <T = BatchPayload>(args: { where?: ImageWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCoordinateses: <T = BatchPayload>(args: { where?: CoordinatesWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    conference: <T = ConferenceSubscriptionPayload | null>(args: { where?: ConferenceSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    image: <T = ImageSubscriptionPayload | null>(args: { where?: ImageSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    coordinates: <T = CoordinatesSubscriptionPayload | null>(args: { where?: CoordinatesSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Conference: (where?: ConferenceWhereInput) => Promise<boolean>
  Image: (where?: ImageWhereInput) => Promise<boolean>
  Coordinates: (where?: CoordinatesWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateConference {
  count: Int!
}

type AggregateCoordinates {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Conference implements Node {
  id: ID!
  name: String!
  description: String
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  url: String!
  image: Image
  startDate: DateTime!
  endDate: DateTime!
  location: Location!
  publishStatus: PUBLISH_STATUS
}

"""A connection to a list of items."""
type ConferenceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ConferenceEdge]!
  aggregate: AggregateConference!
}

input ConferenceCreateInput {
  name: String!
  description: String
  url: String!
  startDate: DateTime!
  endDate: DateTime!
  publishStatus: PUBLISH_STATUS
  tags: TagCreateManyInput
  image: ImageCreateOneInput
  location: LocationCreateOneInput!
}

"""An edge in a connection."""
type ConferenceEdge {
  """The item at the end of the edge."""
  node: Conference!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ConferenceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  publishStatus_ASC
  publishStatus_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ConferencePreviousValues {
  id: ID!
  name: String!
  description: String
  url: String!
  startDate: DateTime!
  endDate: DateTime!
  publishStatus: PUBLISH_STATUS
}

type ConferenceSubscriptionPayload {
  mutation: MutationType!
  node: Conference
  updatedFields: [String!]
  previousValues: ConferencePreviousValues
}

input ConferenceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ConferenceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ConferenceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ConferenceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ConferenceWhereInput
}

input ConferenceUpdateInput {
  name: String
  description: String
  url: String
  startDate: DateTime
  endDate: DateTime
  publishStatus: PUBLISH_STATUS
  tags: TagUpdateManyInput
  image: ImageUpdateOneInput
  location: LocationUpdateOneRequiredInput
}

input ConferenceUpdateManyMutationInput {
  name: String
  description: String
  url: String
  startDate: DateTime
  endDate: DateTime
  publishStatus: PUBLISH_STATUS
}

input ConferenceWhereInput {
  """Logical AND on all given filters."""
  AND: [ConferenceWhereInput!]

  """Logical OR on all given filters."""
  OR: [ConferenceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ConferenceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  endDate: DateTime

  """All values that are not equal to given value."""
  endDate_not: DateTime

  """All values that are contained in given list."""
  endDate_in: [DateTime!]

  """All values that are not contained in given list."""
  endDate_not_in: [DateTime!]

  """All values less than the given value."""
  endDate_lt: DateTime

  """All values less than or equal the given value."""
  endDate_lte: DateTime

  """All values greater than the given value."""
  endDate_gt: DateTime

  """All values greater than or equal the given value."""
  endDate_gte: DateTime
  publishStatus: PUBLISH_STATUS

  """All values that are not equal to given value."""
  publishStatus_not: PUBLISH_STATUS

  """All values that are contained in given list."""
  publishStatus_in: [PUBLISH_STATUS!]

  """All values that are not contained in given list."""
  publishStatus_not_in: [PUBLISH_STATUS!]
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  image: ImageWhereInput
  location: LocationWhereInput
}

input ConferenceWhereUniqueInput {
  id: ID
}

type Coordinates implements Node {
  id: ID!
  latitude: Float!
  longitude: Float!
}

"""A connection to a list of items."""
type CoordinatesConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CoordinatesEdge]!
  aggregate: AggregateCoordinates!
}

input CoordinatesCreateInput {
  latitude: Float!
  longitude: Float!
}

input CoordinatesCreateOneInput {
  create: CoordinatesCreateInput
  connect: CoordinatesWhereUniqueInput
}

"""An edge in a connection."""
type CoordinatesEdge {
  """The item at the end of the edge."""
  node: Coordinates!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CoordinatesOrderByInput {
  id_ASC
  id_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CoordinatesPreviousValues {
  id: ID!
  latitude: Float!
  longitude: Float!
}

type CoordinatesSubscriptionPayload {
  mutation: MutationType!
  node: Coordinates
  updatedFields: [String!]
  previousValues: CoordinatesPreviousValues
}

input CoordinatesSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CoordinatesSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CoordinatesSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CoordinatesSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CoordinatesWhereInput
}

input CoordinatesUpdateDataInput {
  latitude: Float
  longitude: Float
}

input CoordinatesUpdateInput {
  latitude: Float
  longitude: Float
}

input CoordinatesUpdateManyMutationInput {
  latitude: Float
  longitude: Float
}

input CoordinatesUpdateOneRequiredInput {
  create: CoordinatesCreateInput
  connect: CoordinatesWhereUniqueInput
  update: CoordinatesUpdateDataInput
  upsert: CoordinatesUpsertNestedInput
}

input CoordinatesUpsertNestedInput {
  update: CoordinatesUpdateDataInput!
  create: CoordinatesCreateInput!
}

input CoordinatesWhereInput {
  """Logical AND on all given filters."""
  AND: [CoordinatesWhereInput!]

  """Logical OR on all given filters."""
  OR: [CoordinatesWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CoordinatesWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  latitude: Float

  """All values that are not equal to given value."""
  latitude_not: Float

  """All values that are contained in given list."""
  latitude_in: [Float!]

  """All values that are not contained in given list."""
  latitude_not_in: [Float!]

  """All values less than the given value."""
  latitude_lt: Float

  """All values less than or equal the given value."""
  latitude_lte: Float

  """All values greater than the given value."""
  latitude_gt: Float

  """All values greater than or equal the given value."""
  latitude_gte: Float
  longitude: Float

  """All values that are not equal to given value."""
  longitude_not: Float

  """All values that are contained in given list."""
  longitude_in: [Float!]

  """All values that are not contained in given list."""
  longitude_not_in: [Float!]

  """All values less than the given value."""
  longitude_lt: Float

  """All values less than or equal the given value."""
  longitude_lte: Float

  """All values greater than the given value."""
  longitude_gt: Float

  """All values greater than or equal the given value."""
  longitude_gte: Float
}

input CoordinatesWhereUniqueInput {
  id: ID
}

scalar DateTime

type Image implements Node {
  id: ID!
  src: String!
  alt: String
}

"""A connection to a list of items."""
type ImageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  src: String!
  alt: String
}

input ImageCreateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
}

"""An edge in a connection."""
type ImageEdge {
  """The item at the end of the edge."""
  node: Image!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  src_ASC
  src_DESC
  alt_ASC
  alt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ImagePreviousValues {
  id: ID!
  src: String!
  alt: String
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ImageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
}

input ImageUpdateDataInput {
  src: String
  alt: String
}

input ImageUpdateInput {
  src: String
  alt: String
}

input ImageUpdateManyMutationInput {
  src: String
  alt: String
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  """Logical AND on all given filters."""
  AND: [ImageWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  src: String

  """All values that are not equal to given value."""
  src_not: String

  """All values that are contained in given list."""
  src_in: [String!]

  """All values that are not contained in given list."""
  src_not_in: [String!]

  """All values less than the given value."""
  src_lt: String

  """All values less than or equal the given value."""
  src_lte: String

  """All values greater than the given value."""
  src_gt: String

  """All values greater than or equal the given value."""
  src_gte: String

  """All values containing the given string."""
  src_contains: String

  """All values not containing the given string."""
  src_not_contains: String

  """All values starting with the given string."""
  src_starts_with: String

  """All values not starting with the given string."""
  src_not_starts_with: String

  """All values ending with the given string."""
  src_ends_with: String

  """All values not ending with the given string."""
  src_not_ends_with: String
  alt: String

  """All values that are not equal to given value."""
  alt_not: String

  """All values that are contained in given list."""
  alt_in: [String!]

  """All values that are not contained in given list."""
  alt_not_in: [String!]

  """All values less than the given value."""
  alt_lt: String

  """All values less than or equal the given value."""
  alt_lte: String

  """All values greater than the given value."""
  alt_gt: String

  """All values greater than or equal the given value."""
  alt_gte: String

  """All values containing the given string."""
  alt_contains: String

  """All values not containing the given string."""
  alt_not_contains: String

  """All values starting with the given string."""
  alt_starts_with: String

  """All values not starting with the given string."""
  alt_not_starts_with: String

  """All values ending with the given string."""
  alt_ends_with: String

  """All values not ending with the given string."""
  alt_not_ends_with: String
}

input ImageWhereUniqueInput {
  id: ID
}

type Location implements Node {
  id: ID!
  venueName: String
  region: REGION!
  country: String!
  city: String!
  address: String!
  coordinates: Coordinates!
}

"""A connection to a list of items."""
type LocationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  venueName: String
  region: REGION!
  country: String!
  city: String!
  address: String!
  coordinates: CoordinatesCreateOneInput!
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

"""An edge in a connection."""
type LocationEdge {
  """The item at the end of the edge."""
  node: Location!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  venueName_ASC
  venueName_DESC
  region_ASC
  region_DESC
  country_ASC
  country_DESC
  city_ASC
  city_DESC
  address_ASC
  address_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocationPreviousValues {
  id: ID!
  venueName: String
  region: REGION!
  country: String!
  city: String!
  address: String!
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
}

input LocationUpdateDataInput {
  venueName: String
  region: REGION
  country: String
  city: String
  address: String
  coordinates: CoordinatesUpdateOneRequiredInput
}

input LocationUpdateInput {
  venueName: String
  region: REGION
  country: String
  city: String
  address: String
  coordinates: CoordinatesUpdateOneRequiredInput
}

input LocationUpdateManyMutationInput {
  venueName: String
  region: REGION
  country: String
  city: String
  address: String
}

input LocationUpdateOneRequiredInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  venueName: String

  """All values that are not equal to given value."""
  venueName_not: String

  """All values that are contained in given list."""
  venueName_in: [String!]

  """All values that are not contained in given list."""
  venueName_not_in: [String!]

  """All values less than the given value."""
  venueName_lt: String

  """All values less than or equal the given value."""
  venueName_lte: String

  """All values greater than the given value."""
  venueName_gt: String

  """All values greater than or equal the given value."""
  venueName_gte: String

  """All values containing the given string."""
  venueName_contains: String

  """All values not containing the given string."""
  venueName_not_contains: String

  """All values starting with the given string."""
  venueName_starts_with: String

  """All values not starting with the given string."""
  venueName_not_starts_with: String

  """All values ending with the given string."""
  venueName_ends_with: String

  """All values not ending with the given string."""
  venueName_not_ends_with: String
  region: REGION

  """All values that are not equal to given value."""
  region_not: REGION

  """All values that are contained in given list."""
  region_in: [REGION!]

  """All values that are not contained in given list."""
  region_not_in: [REGION!]
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  coordinates: CoordinatesWhereInput
}

input LocationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createConference(data: ConferenceCreateInput!): Conference!
  createImage(data: ImageCreateInput!): Image!
  createCoordinates(data: CoordinatesCreateInput!): Coordinates!
  createLocation(data: LocationCreateInput!): Location!
  createTag(data: TagCreateInput!): Tag!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateConference(data: ConferenceUpdateInput!, where: ConferenceWhereUniqueInput!): Conference
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateCoordinates(data: CoordinatesUpdateInput!, where: CoordinatesWhereUniqueInput!): Coordinates
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  deleteUser(where: UserWhereUniqueInput!): User
  deleteConference(where: ConferenceWhereUniqueInput!): Conference
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteCoordinates(where: CoordinatesWhereUniqueInput!): Coordinates
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteTag(where: TagWhereUniqueInput!): Tag
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertConference(where: ConferenceWhereUniqueInput!, create: ConferenceCreateInput!, update: ConferenceUpdateInput!): Conference!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  upsertCoordinates(where: CoordinatesWhereUniqueInput!, create: CoordinatesCreateInput!, update: CoordinatesUpdateInput!): Coordinates!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyConferences(data: ConferenceUpdateManyMutationInput!, where: ConferenceWhereInput): BatchPayload!
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  updateManyCoordinateses(data: CoordinatesUpdateManyMutationInput!, where: CoordinatesWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyConferences(where: ConferenceWhereInput): BatchPayload!
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  deleteManyCoordinateses(where: CoordinatesWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PUBLISH_STATUS {
  DRAFT
  PUBLISHED
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  conferences(where: ConferenceWhereInput, orderBy: ConferenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Conference]!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  coordinateses(where: CoordinatesWhereInput, orderBy: CoordinatesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Coordinates]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  user(where: UserWhereUniqueInput!): User
  conference(where: ConferenceWhereUniqueInput!): Conference
  image(where: ImageWhereUniqueInput!): Image
  coordinates(where: CoordinatesWhereUniqueInput!): Coordinates
  location(where: LocationWhereUniqueInput!): Location
  tag(where: TagWhereUniqueInput!): Tag
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  conferencesConnection(where: ConferenceWhereInput, orderBy: ConferenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConferenceConnection!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  coordinatesesConnection(where: CoordinatesWhereInput, orderBy: CoordinatesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CoordinatesConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum REGION {
  NORTH_AMERICA
  LATIN_AMERICA
  EUROPE
  AFRICA
  MIDDLE_EAST
  ASIA
  OCEANIA
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  conference(where: ConferenceSubscriptionWhereInput): ConferenceSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  coordinates(where: CoordinatesSubscriptionWhereInput): CoordinatesSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
}

type Tag implements Node {
  id: ID!
  name: String!
  slug: String!
}

"""A connection to a list of items."""
type TagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  slug: String!
}

input TagCreateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
}

"""An edge in a connection."""
type TagEdge {
  """The item at the end of the edge."""
  node: Tag!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
  slug: String!
}

input TagScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TagScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TagSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TagWhereInput
}

input TagUpdateDataInput {
  name: String
  slug: String
}

input TagUpdateInput {
  name: String
  slug: String
}

input TagUpdateManyDataInput {
  name: String
  slug: String
}

input TagUpdateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
  set: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
  deleteMany: [TagScalarWhereInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
}

input TagUpdateManyMutationInput {
  name: String
  slug: String
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  data: TagUpdateDataInput!
}

input TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput!
  update: TagUpdateDataInput!
  create: TagCreateInput!
}

input TagWhereInput {
  """Logical AND on all given filters."""
  AND: [TagWhereInput!]

  """Logical OR on all given filters."""
  OR: [TagWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TagWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
}

input TagWhereUniqueInput {
  id: ID
  slug: String
}

type User implements Node {
  id: ID!
  email: String!
  name: String!
  createdAt: DateTime!
  password: String!
  role: USER_ROLE!
}

enum USER_ROLE {
  ATTENDEE
  SPEAKER
  MODERATOR
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  name: String!
  password: String!
  role: USER_ROLE
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  name: String!
  createdAt: DateTime!
  password: String!
  role: USER_ROLE!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  name: String
  password: String
  role: USER_ROLE
}

input UserUpdateManyMutationInput {
  email: String
  name: String
  password: String
  role: USER_ROLE
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  role: USER_ROLE

  """All values that are not equal to given value."""
  role_not: USER_ROLE

  """All values that are contained in given list."""
  role_in: [USER_ROLE!]

  """All values that are not contained in given list."""
  role_not_in: [USER_ROLE!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ConferenceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'url_ASC' |
  'url_DESC' |
  'startDate_ASC' |
  'startDate_DESC' |
  'endDate_ASC' |
  'endDate_DESC' |
  'publishStatus_ASC' |
  'publishStatus_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CoordinatesOrderByInput =   'id_ASC' |
  'id_DESC' |
  'latitude_ASC' |
  'latitude_DESC' |
  'longitude_ASC' |
  'longitude_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ImageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'src_ASC' |
  'src_DESC' |
  'alt_ASC' |
  'alt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'venueName_ASC' |
  'venueName_DESC' |
  'region_ASC' |
  'region_DESC' |
  'country_ASC' |
  'country_DESC' |
  'city_ASC' |
  'city_DESC' |
  'address_ASC' |
  'address_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PUBLISH_STATUS =   'DRAFT' |
  'PUBLISHED'

export type REGION =   'NORTH_AMERICA' |
  'LATIN_AMERICA' |
  'EUROPE' |
  'AFRICA' |
  'MIDDLE_EAST' |
  'ASIA' |
  'OCEANIA'

export type TagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type USER_ROLE =   'ATTENDEE' |
  'SPEAKER' |
  'MODERATOR'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'password_ASC' |
  'password_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface ConferenceCreateInput {
  name: String
  description?: String | null
  url: String
  startDate: DateTime
  endDate: DateTime
  publishStatus?: PUBLISH_STATUS | null
  tags?: TagCreateManyInput | null
  image?: ImageCreateOneInput | null
  location: LocationCreateOneInput
}

export interface ConferenceSubscriptionWhereInput {
  AND?: ConferenceSubscriptionWhereInput[] | ConferenceSubscriptionWhereInput | null
  OR?: ConferenceSubscriptionWhereInput[] | ConferenceSubscriptionWhereInput | null
  NOT?: ConferenceSubscriptionWhereInput[] | ConferenceSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ConferenceWhereInput | null
}

export interface ConferenceUpdateInput {
  name?: String | null
  description?: String | null
  url?: String | null
  startDate?: DateTime | null
  endDate?: DateTime | null
  publishStatus?: PUBLISH_STATUS | null
  tags?: TagUpdateManyInput | null
  image?: ImageUpdateOneInput | null
  location?: LocationUpdateOneRequiredInput | null
}

export interface ConferenceUpdateManyMutationInput {
  name?: String | null
  description?: String | null
  url?: String | null
  startDate?: DateTime | null
  endDate?: DateTime | null
  publishStatus?: PUBLISH_STATUS | null
}

export interface ConferenceWhereInput {
  AND?: ConferenceWhereInput[] | ConferenceWhereInput | null
  OR?: ConferenceWhereInput[] | ConferenceWhereInput | null
  NOT?: ConferenceWhereInput[] | ConferenceWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  startDate?: DateTime | null
  startDate_not?: DateTime | null
  startDate_in?: DateTime[] | DateTime | null
  startDate_not_in?: DateTime[] | DateTime | null
  startDate_lt?: DateTime | null
  startDate_lte?: DateTime | null
  startDate_gt?: DateTime | null
  startDate_gte?: DateTime | null
  endDate?: DateTime | null
  endDate_not?: DateTime | null
  endDate_in?: DateTime[] | DateTime | null
  endDate_not_in?: DateTime[] | DateTime | null
  endDate_lt?: DateTime | null
  endDate_lte?: DateTime | null
  endDate_gt?: DateTime | null
  endDate_gte?: DateTime | null
  publishStatus?: PUBLISH_STATUS | null
  publishStatus_not?: PUBLISH_STATUS | null
  publishStatus_in?: PUBLISH_STATUS[] | PUBLISH_STATUS | null
  publishStatus_not_in?: PUBLISH_STATUS[] | PUBLISH_STATUS | null
  tags_every?: TagWhereInput | null
  tags_some?: TagWhereInput | null
  tags_none?: TagWhereInput | null
  image?: ImageWhereInput | null
  location?: LocationWhereInput | null
}

export interface ConferenceWhereUniqueInput {
  id?: ID_Input | null
}

export interface CoordinatesCreateInput {
  latitude: Float
  longitude: Float
}

export interface CoordinatesCreateOneInput {
  create?: CoordinatesCreateInput | null
  connect?: CoordinatesWhereUniqueInput | null
}

export interface CoordinatesSubscriptionWhereInput {
  AND?: CoordinatesSubscriptionWhereInput[] | CoordinatesSubscriptionWhereInput | null
  OR?: CoordinatesSubscriptionWhereInput[] | CoordinatesSubscriptionWhereInput | null
  NOT?: CoordinatesSubscriptionWhereInput[] | CoordinatesSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CoordinatesWhereInput | null
}

export interface CoordinatesUpdateDataInput {
  latitude?: Float | null
  longitude?: Float | null
}

export interface CoordinatesUpdateInput {
  latitude?: Float | null
  longitude?: Float | null
}

export interface CoordinatesUpdateManyMutationInput {
  latitude?: Float | null
  longitude?: Float | null
}

export interface CoordinatesUpdateOneRequiredInput {
  create?: CoordinatesCreateInput | null
  connect?: CoordinatesWhereUniqueInput | null
  update?: CoordinatesUpdateDataInput | null
  upsert?: CoordinatesUpsertNestedInput | null
}

export interface CoordinatesUpsertNestedInput {
  update: CoordinatesUpdateDataInput
  create: CoordinatesCreateInput
}

export interface CoordinatesWhereInput {
  AND?: CoordinatesWhereInput[] | CoordinatesWhereInput | null
  OR?: CoordinatesWhereInput[] | CoordinatesWhereInput | null
  NOT?: CoordinatesWhereInput[] | CoordinatesWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  latitude?: Float | null
  latitude_not?: Float | null
  latitude_in?: Float[] | Float | null
  latitude_not_in?: Float[] | Float | null
  latitude_lt?: Float | null
  latitude_lte?: Float | null
  latitude_gt?: Float | null
  latitude_gte?: Float | null
  longitude?: Float | null
  longitude_not?: Float | null
  longitude_in?: Float[] | Float | null
  longitude_not_in?: Float[] | Float | null
  longitude_lt?: Float | null
  longitude_lte?: Float | null
  longitude_gt?: Float | null
  longitude_gte?: Float | null
}

export interface CoordinatesWhereUniqueInput {
  id?: ID_Input | null
}

export interface ImageCreateInput {
  src: String
  alt?: String | null
}

export interface ImageCreateOneInput {
  create?: ImageCreateInput | null
  connect?: ImageWhereUniqueInput | null
}

export interface ImageSubscriptionWhereInput {
  AND?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null
  OR?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null
  NOT?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ImageWhereInput | null
}

export interface ImageUpdateDataInput {
  src?: String | null
  alt?: String | null
}

export interface ImageUpdateInput {
  src?: String | null
  alt?: String | null
}

export interface ImageUpdateManyMutationInput {
  src?: String | null
  alt?: String | null
}

export interface ImageUpdateOneInput {
  create?: ImageCreateInput | null
  connect?: ImageWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: ImageUpdateDataInput | null
  upsert?: ImageUpsertNestedInput | null
}

export interface ImageUpsertNestedInput {
  update: ImageUpdateDataInput
  create: ImageCreateInput
}

export interface ImageWhereInput {
  AND?: ImageWhereInput[] | ImageWhereInput | null
  OR?: ImageWhereInput[] | ImageWhereInput | null
  NOT?: ImageWhereInput[] | ImageWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  src?: String | null
  src_not?: String | null
  src_in?: String[] | String | null
  src_not_in?: String[] | String | null
  src_lt?: String | null
  src_lte?: String | null
  src_gt?: String | null
  src_gte?: String | null
  src_contains?: String | null
  src_not_contains?: String | null
  src_starts_with?: String | null
  src_not_starts_with?: String | null
  src_ends_with?: String | null
  src_not_ends_with?: String | null
  alt?: String | null
  alt_not?: String | null
  alt_in?: String[] | String | null
  alt_not_in?: String[] | String | null
  alt_lt?: String | null
  alt_lte?: String | null
  alt_gt?: String | null
  alt_gte?: String | null
  alt_contains?: String | null
  alt_not_contains?: String | null
  alt_starts_with?: String | null
  alt_not_starts_with?: String | null
  alt_ends_with?: String | null
  alt_not_ends_with?: String | null
}

export interface ImageWhereUniqueInput {
  id?: ID_Input | null
}

export interface LocationCreateInput {
  venueName?: String | null
  region: REGION
  country: String
  city: String
  address: String
  coordinates: CoordinatesCreateOneInput
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput | null
  connect?: LocationWhereUniqueInput | null
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LocationWhereInput | null
}

export interface LocationUpdateDataInput {
  venueName?: String | null
  region?: REGION | null
  country?: String | null
  city?: String | null
  address?: String | null
  coordinates?: CoordinatesUpdateOneRequiredInput | null
}

export interface LocationUpdateInput {
  venueName?: String | null
  region?: REGION | null
  country?: String | null
  city?: String | null
  address?: String | null
  coordinates?: CoordinatesUpdateOneRequiredInput | null
}

export interface LocationUpdateManyMutationInput {
  venueName?: String | null
  region?: REGION | null
  country?: String | null
  city?: String | null
  address?: String | null
}

export interface LocationUpdateOneRequiredInput {
  create?: LocationCreateInput | null
  connect?: LocationWhereUniqueInput | null
  update?: LocationUpdateDataInput | null
  upsert?: LocationUpsertNestedInput | null
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput | null
  OR?: LocationWhereInput[] | LocationWhereInput | null
  NOT?: LocationWhereInput[] | LocationWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  venueName?: String | null
  venueName_not?: String | null
  venueName_in?: String[] | String | null
  venueName_not_in?: String[] | String | null
  venueName_lt?: String | null
  venueName_lte?: String | null
  venueName_gt?: String | null
  venueName_gte?: String | null
  venueName_contains?: String | null
  venueName_not_contains?: String | null
  venueName_starts_with?: String | null
  venueName_not_starts_with?: String | null
  venueName_ends_with?: String | null
  venueName_not_ends_with?: String | null
  region?: REGION | null
  region_not?: REGION | null
  region_in?: REGION[] | REGION | null
  region_not_in?: REGION[] | REGION | null
  country?: String | null
  country_not?: String | null
  country_in?: String[] | String | null
  country_not_in?: String[] | String | null
  country_lt?: String | null
  country_lte?: String | null
  country_gt?: String | null
  country_gte?: String | null
  country_contains?: String | null
  country_not_contains?: String | null
  country_starts_with?: String | null
  country_not_starts_with?: String | null
  country_ends_with?: String | null
  country_not_ends_with?: String | null
  city?: String | null
  city_not?: String | null
  city_in?: String[] | String | null
  city_not_in?: String[] | String | null
  city_lt?: String | null
  city_lte?: String | null
  city_gt?: String | null
  city_gte?: String | null
  city_contains?: String | null
  city_not_contains?: String | null
  city_starts_with?: String | null
  city_not_starts_with?: String | null
  city_ends_with?: String | null
  city_not_ends_with?: String | null
  address?: String | null
  address_not?: String | null
  address_in?: String[] | String | null
  address_not_in?: String[] | String | null
  address_lt?: String | null
  address_lte?: String | null
  address_gt?: String | null
  address_gte?: String | null
  address_contains?: String | null
  address_not_contains?: String | null
  address_starts_with?: String | null
  address_not_starts_with?: String | null
  address_ends_with?: String | null
  address_not_ends_with?: String | null
  coordinates?: CoordinatesWhereInput | null
}

export interface LocationWhereUniqueInput {
  id?: ID_Input | null
}

export interface TagCreateInput {
  name: String
  slug: String
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
}

export interface TagScalarWhereInput {
  AND?: TagScalarWhereInput[] | TagScalarWhereInput | null
  OR?: TagScalarWhereInput[] | TagScalarWhereInput | null
  NOT?: TagScalarWhereInput[] | TagScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
}

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: TagWhereInput | null
}

export interface TagUpdateDataInput {
  name?: String | null
  slug?: String | null
}

export interface TagUpdateInput {
  name?: String | null
  slug?: String | null
}

export interface TagUpdateManyDataInput {
  name?: String | null
  slug?: String | null
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput | null
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  set?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput | null
  update?: TagUpdateWithWhereUniqueNestedInput[] | TagUpdateWithWhereUniqueNestedInput | null
  updateMany?: TagUpdateManyWithWhereNestedInput[] | TagUpdateManyWithWhereNestedInput | null
  deleteMany?: TagScalarWhereInput[] | TagScalarWhereInput | null
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | TagUpsertWithWhereUniqueNestedInput | null
}

export interface TagUpdateManyMutationInput {
  name?: String | null
  slug?: String | null
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput
  data: TagUpdateManyDataInput
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput | null
  OR?: TagWhereInput[] | TagWhereInput | null
  NOT?: TagWhereInput[] | TagWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
}

export interface TagWhereUniqueInput {
  id?: ID_Input | null
  slug?: String | null
}

export interface UserCreateInput {
  email: String
  name: String
  password: String
  role?: USER_ROLE | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  email?: String | null
  name?: String | null
  password?: String | null
  role?: USER_ROLE | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  name?: String | null
  password?: String | null
  role?: USER_ROLE | null
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  role?: USER_ROLE | null
  role_not?: USER_ROLE | null
  role_in?: USER_ROLE[] | USER_ROLE | null
  role_not_in?: USER_ROLE[] | USER_ROLE | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateConference {
  count: Int
}

export interface AggregateCoordinates {
  count: Int
}

export interface AggregateImage {
  count: Int
}

export interface AggregateLocation {
  count: Int
}

export interface AggregateTag {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Conference extends Node {
  id: ID_Output
  name: String
  description?: String | null
  tags?: Array<Tag> | null
  url: String
  image?: Image | null
  startDate: DateTime
  endDate: DateTime
  location: Location
  publishStatus?: PUBLISH_STATUS | null
}

/*
 * A connection to a list of items.

 */
export interface ConferenceConnection {
  pageInfo: PageInfo
  edges: Array<ConferenceEdge | null>
  aggregate: AggregateConference
}

/*
 * An edge in a connection.

 */
export interface ConferenceEdge {
  node: Conference
  cursor: String
}

export interface ConferencePreviousValues {
  id: ID_Output
  name: String
  description?: String | null
  url: String
  startDate: DateTime
  endDate: DateTime
  publishStatus?: PUBLISH_STATUS | null
}

export interface ConferenceSubscriptionPayload {
  mutation: MutationType
  node?: Conference | null
  updatedFields?: Array<String> | null
  previousValues?: ConferencePreviousValues | null
}

export interface Coordinates extends Node {
  id: ID_Output
  latitude: Float
  longitude: Float
}

/*
 * A connection to a list of items.

 */
export interface CoordinatesConnection {
  pageInfo: PageInfo
  edges: Array<CoordinatesEdge | null>
  aggregate: AggregateCoordinates
}

/*
 * An edge in a connection.

 */
export interface CoordinatesEdge {
  node: Coordinates
  cursor: String
}

export interface CoordinatesPreviousValues {
  id: ID_Output
  latitude: Float
  longitude: Float
}

export interface CoordinatesSubscriptionPayload {
  mutation: MutationType
  node?: Coordinates | null
  updatedFields?: Array<String> | null
  previousValues?: CoordinatesPreviousValues | null
}

export interface Image extends Node {
  id: ID_Output
  src: String
  alt?: String | null
}

/*
 * A connection to a list of items.

 */
export interface ImageConnection {
  pageInfo: PageInfo
  edges: Array<ImageEdge | null>
  aggregate: AggregateImage
}

/*
 * An edge in a connection.

 */
export interface ImageEdge {
  node: Image
  cursor: String
}

export interface ImagePreviousValues {
  id: ID_Output
  src: String
  alt?: String | null
}

export interface ImageSubscriptionPayload {
  mutation: MutationType
  node?: Image | null
  updatedFields?: Array<String> | null
  previousValues?: ImagePreviousValues | null
}

export interface Location extends Node {
  id: ID_Output
  venueName?: String | null
  region: REGION
  country: String
  city: String
  address: String
  coordinates: Coordinates
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: Array<LocationEdge | null>
  aggregate: AggregateLocation
}

/*
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface LocationPreviousValues {
  id: ID_Output
  venueName?: String | null
  region: REGION
  country: String
  city: String
  address: String
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location | null
  updatedFields?: Array<String> | null
  previousValues?: LocationPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Tag extends Node {
  id: ID_Output
  name: String
  slug: String
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: Array<TagEdge | null>
  aggregate: AggregateTag
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

export interface TagPreviousValues {
  id: ID_Output
  name: String
  slug: String
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag | null
  updatedFields?: Array<String> | null
  previousValues?: TagPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  email: String
  name: String
  createdAt: DateTime
  password: String
  role: USER_ROLE
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  name: String
  createdAt: DateTime
  password: String
  role: USER_ROLE
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string