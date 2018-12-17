export const typeDefs = /* GraphQL */ `type AggregateConference {
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

type AggregatePrice {
  count: Int!
}

type AggregateSocial {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Conference {
  id: ID!
  name: String!
  description: String
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  url: String!
  image: Image
  startDate: DateTime!
  endDate: DateTime!
  location: Location!
  social: Social
  publishStatus: PUBLISH_STATUS
  prices(where: PriceWhereInput, orderBy: PriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Price!]
}

type ConferenceConnection {
  pageInfo: PageInfo!
  edges: [ConferenceEdge]!
  aggregate: AggregateConference!
}

input ConferenceCreateInput {
  name: String!
  description: String
  tags: TagCreateManyInput
  url: String!
  image: ImageCreateOneInput
  startDate: DateTime!
  endDate: DateTime!
  location: LocationCreateOneInput!
  social: SocialCreateOneInput
  publishStatus: PUBLISH_STATUS
  prices: PriceCreateManyInput
}

type ConferenceEdge {
  node: Conference!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ConferenceWhereInput
  AND: [ConferenceSubscriptionWhereInput!]
  OR: [ConferenceSubscriptionWhereInput!]
  NOT: [ConferenceSubscriptionWhereInput!]
}

input ConferenceUpdateInput {
  name: String
  description: String
  tags: TagUpdateManyInput
  url: String
  image: ImageUpdateOneInput
  startDate: DateTime
  endDate: DateTime
  location: LocationUpdateOneRequiredInput
  social: SocialUpdateOneInput
  publishStatus: PUBLISH_STATUS
  prices: PriceUpdateManyInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  image: ImageWhereInput
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  endDate: DateTime
  endDate_not: DateTime
  endDate_in: [DateTime!]
  endDate_not_in: [DateTime!]
  endDate_lt: DateTime
  endDate_lte: DateTime
  endDate_gt: DateTime
  endDate_gte: DateTime
  location: LocationWhereInput
  social: SocialWhereInput
  publishStatus: PUBLISH_STATUS
  publishStatus_not: PUBLISH_STATUS
  publishStatus_in: [PUBLISH_STATUS!]
  publishStatus_not_in: [PUBLISH_STATUS!]
  prices_every: PriceWhereInput
  prices_some: PriceWhereInput
  prices_none: PriceWhereInput
  AND: [ConferenceWhereInput!]
  OR: [ConferenceWhereInput!]
  NOT: [ConferenceWhereInput!]
}

input ConferenceWhereUniqueInput {
  id: ID
}

type Coordinates {
  id: ID!
  latitude: Float!
  longitude: Float!
}

type CoordinatesConnection {
  pageInfo: PageInfo!
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

type CoordinatesEdge {
  node: Coordinates!
  cursor: String!
}

enum CoordinatesOrderByInput {
  id_ASC
  id_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CoordinatesWhereInput
  AND: [CoordinatesSubscriptionWhereInput!]
  OR: [CoordinatesSubscriptionWhereInput!]
  NOT: [CoordinatesSubscriptionWhereInput!]
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
  update: CoordinatesUpdateDataInput
  upsert: CoordinatesUpsertNestedInput
  connect: CoordinatesWhereUniqueInput
}

input CoordinatesUpsertNestedInput {
  update: CoordinatesUpdateDataInput!
  create: CoordinatesCreateInput!
}

input CoordinatesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  AND: [CoordinatesWhereInput!]
  OR: [CoordinatesWhereInput!]
  NOT: [CoordinatesWhereInput!]
}

input CoordinatesWhereUniqueInput {
  id: ID
}

enum CURRENCY {
  USD
  EUR
}

scalar DateTime

type Image {
  id: ID!
  src: String!
  alt: String
}

type ImageConnection {
  pageInfo: PageInfo!
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

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  src_ASC
  src_DESC
  alt_ASC
  alt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
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
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ImageWhereUniqueInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  src: String
  src_not: String
  src_in: [String!]
  src_not_in: [String!]
  src_lt: String
  src_lte: String
  src_gt: String
  src_gte: String
  src_contains: String
  src_not_contains: String
  src_starts_with: String
  src_not_starts_with: String
  src_ends_with: String
  src_not_ends_with: String
  alt: String
  alt_not: String
  alt_in: [String!]
  alt_not_in: [String!]
  alt_lt: String
  alt_lte: String
  alt_gt: String
  alt_gte: String
  alt_contains: String
  alt_not_contains: String
  alt_starts_with: String
  alt_not_starts_with: String
  alt_ends_with: String
  alt_not_ends_with: String
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  venueName: String
  continent: String!
  country: String!
  city: String!
  address: String!
  coordinates: Coordinates!
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  venueName: String
  continent: String!
  country: String!
  city: String!
  address: String!
  coordinates: CoordinatesCreateOneInput!
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  venueName_ASC
  venueName_DESC
  continent_ASC
  continent_DESC
  country_ASC
  country_DESC
  city_ASC
  city_DESC
  address_ASC
  address_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocationPreviousValues {
  id: ID!
  venueName: String
  continent: String!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateDataInput {
  venueName: String
  continent: String
  country: String
  city: String
  address: String
  coordinates: CoordinatesUpdateOneRequiredInput
}

input LocationUpdateInput {
  venueName: String
  continent: String
  country: String
  city: String
  address: String
  coordinates: CoordinatesUpdateOneRequiredInput
}

input LocationUpdateManyMutationInput {
  venueName: String
  continent: String
  country: String
  city: String
  address: String
}

input LocationUpdateOneRequiredInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  connect: LocationWhereUniqueInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  venueName: String
  venueName_not: String
  venueName_in: [String!]
  venueName_not_in: [String!]
  venueName_lt: String
  venueName_lte: String
  venueName_gt: String
  venueName_gte: String
  venueName_contains: String
  venueName_not_contains: String
  venueName_starts_with: String
  venueName_not_starts_with: String
  venueName_ends_with: String
  venueName_not_ends_with: String
  continent: String
  continent_not: String
  continent_in: [String!]
  continent_not_in: [String!]
  continent_lt: String
  continent_lte: String
  continent_gt: String
  continent_gte: String
  continent_contains: String
  continent_not_contains: String
  continent_starts_with: String
  continent_not_starts_with: String
  continent_ends_with: String
  continent_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  coordinates: CoordinatesWhereInput
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createConference(data: ConferenceCreateInput!): Conference!
  updateConference(data: ConferenceUpdateInput!, where: ConferenceWhereUniqueInput!): Conference
  updateManyConferences(data: ConferenceUpdateManyMutationInput!, where: ConferenceWhereInput): BatchPayload!
  upsertConference(where: ConferenceWhereUniqueInput!, create: ConferenceCreateInput!, update: ConferenceUpdateInput!): Conference!
  deleteConference(where: ConferenceWhereUniqueInput!): Conference
  deleteManyConferences(where: ConferenceWhereInput): BatchPayload!
  createCoordinates(data: CoordinatesCreateInput!): Coordinates!
  updateCoordinates(data: CoordinatesUpdateInput!, where: CoordinatesWhereUniqueInput!): Coordinates
  updateManyCoordinateses(data: CoordinatesUpdateManyMutationInput!, where: CoordinatesWhereInput): BatchPayload!
  upsertCoordinates(where: CoordinatesWhereUniqueInput!, create: CoordinatesCreateInput!, update: CoordinatesUpdateInput!): Coordinates!
  deleteCoordinates(where: CoordinatesWhereUniqueInput!): Coordinates
  deleteManyCoordinateses(where: CoordinatesWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateManyMutationInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createPrice(data: PriceCreateInput!): Price!
  updatePrice(data: PriceUpdateInput!, where: PriceWhereUniqueInput!): Price
  updateManyPrices(data: PriceUpdateManyMutationInput!, where: PriceWhereInput): BatchPayload!
  upsertPrice(where: PriceWhereUniqueInput!, create: PriceCreateInput!, update: PriceUpdateInput!): Price!
  deletePrice(where: PriceWhereUniqueInput!): Price
  deleteManyPrices(where: PriceWhereInput): BatchPayload!
  createSocial(data: SocialCreateInput!): Social!
  updateSocial(data: SocialUpdateInput!, where: SocialWhereUniqueInput!): Social
  updateManySocials(data: SocialUpdateManyMutationInput!, where: SocialWhereInput): BatchPayload!
  upsertSocial(where: SocialWhereUniqueInput!, create: SocialCreateInput!, update: SocialUpdateInput!): Social!
  deleteSocial(where: SocialWhereUniqueInput!): Social
  deleteManySocials(where: SocialWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Price {
  id: ID!
  name: String
  amount: Float!
  currency: CURRENCY
  expirationDate: DateTime
}

type PriceConnection {
  pageInfo: PageInfo!
  edges: [PriceEdge]!
  aggregate: AggregatePrice!
}

input PriceCreateInput {
  name: String
  amount: Float!
  currency: CURRENCY
  expirationDate: DateTime
}

input PriceCreateManyInput {
  create: [PriceCreateInput!]
  connect: [PriceWhereUniqueInput!]
}

type PriceEdge {
  node: Price!
  cursor: String!
}

enum PriceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  amount_ASC
  amount_DESC
  currency_ASC
  currency_DESC
  expirationDate_ASC
  expirationDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PricePreviousValues {
  id: ID!
  name: String
  amount: Float!
  currency: CURRENCY
  expirationDate: DateTime
}

input PriceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  currency: CURRENCY
  currency_not: CURRENCY
  currency_in: [CURRENCY!]
  currency_not_in: [CURRENCY!]
  expirationDate: DateTime
  expirationDate_not: DateTime
  expirationDate_in: [DateTime!]
  expirationDate_not_in: [DateTime!]
  expirationDate_lt: DateTime
  expirationDate_lte: DateTime
  expirationDate_gt: DateTime
  expirationDate_gte: DateTime
  AND: [PriceScalarWhereInput!]
  OR: [PriceScalarWhereInput!]
  NOT: [PriceScalarWhereInput!]
}

type PriceSubscriptionPayload {
  mutation: MutationType!
  node: Price
  updatedFields: [String!]
  previousValues: PricePreviousValues
}

input PriceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PriceWhereInput
  AND: [PriceSubscriptionWhereInput!]
  OR: [PriceSubscriptionWhereInput!]
  NOT: [PriceSubscriptionWhereInput!]
}

input PriceUpdateDataInput {
  name: String
  amount: Float
  currency: CURRENCY
  expirationDate: DateTime
}

input PriceUpdateInput {
  name: String
  amount: Float
  currency: CURRENCY
  expirationDate: DateTime
}

input PriceUpdateManyDataInput {
  name: String
  amount: Float
  currency: CURRENCY
  expirationDate: DateTime
}

input PriceUpdateManyInput {
  create: [PriceCreateInput!]
  update: [PriceUpdateWithWhereUniqueNestedInput!]
  upsert: [PriceUpsertWithWhereUniqueNestedInput!]
  delete: [PriceWhereUniqueInput!]
  connect: [PriceWhereUniqueInput!]
  disconnect: [PriceWhereUniqueInput!]
  deleteMany: [PriceScalarWhereInput!]
  updateMany: [PriceUpdateManyWithWhereNestedInput!]
}

input PriceUpdateManyMutationInput {
  name: String
  amount: Float
  currency: CURRENCY
  expirationDate: DateTime
}

input PriceUpdateManyWithWhereNestedInput {
  where: PriceScalarWhereInput!
  data: PriceUpdateManyDataInput!
}

input PriceUpdateWithWhereUniqueNestedInput {
  where: PriceWhereUniqueInput!
  data: PriceUpdateDataInput!
}

input PriceUpsertWithWhereUniqueNestedInput {
  where: PriceWhereUniqueInput!
  update: PriceUpdateDataInput!
  create: PriceCreateInput!
}

input PriceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  currency: CURRENCY
  currency_not: CURRENCY
  currency_in: [CURRENCY!]
  currency_not_in: [CURRENCY!]
  expirationDate: DateTime
  expirationDate_not: DateTime
  expirationDate_in: [DateTime!]
  expirationDate_not_in: [DateTime!]
  expirationDate_lt: DateTime
  expirationDate_lte: DateTime
  expirationDate_gt: DateTime
  expirationDate_gte: DateTime
  AND: [PriceWhereInput!]
  OR: [PriceWhereInput!]
  NOT: [PriceWhereInput!]
}

input PriceWhereUniqueInput {
  id: ID
}

enum PUBLISH_STATUS {
  DRAFT
  PUBLISHED
}

type Query {
  conference(where: ConferenceWhereUniqueInput!): Conference
  conferences(where: ConferenceWhereInput, orderBy: ConferenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Conference]!
  conferencesConnection(where: ConferenceWhereInput, orderBy: ConferenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConferenceConnection!
  coordinates(where: CoordinatesWhereUniqueInput!): Coordinates
  coordinateses(where: CoordinatesWhereInput, orderBy: CoordinatesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Coordinates]!
  coordinatesesConnection(where: CoordinatesWhereInput, orderBy: CoordinatesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CoordinatesConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  price(where: PriceWhereUniqueInput!): Price
  prices(where: PriceWhereInput, orderBy: PriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Price]!
  pricesConnection(where: PriceWhereInput, orderBy: PriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PriceConnection!
  social(where: SocialWhereUniqueInput!): Social
  socials(where: SocialWhereInput, orderBy: SocialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Social]!
  socialsConnection(where: SocialWhereInput, orderBy: SocialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SocialConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Social {
  id: ID!
  facebook: String
  twitter: String
  instagram: String
}

type SocialConnection {
  pageInfo: PageInfo!
  edges: [SocialEdge]!
  aggregate: AggregateSocial!
}

input SocialCreateInput {
  facebook: String
  twitter: String
  instagram: String
}

input SocialCreateOneInput {
  create: SocialCreateInput
  connect: SocialWhereUniqueInput
}

type SocialEdge {
  node: Social!
  cursor: String!
}

enum SocialOrderByInput {
  id_ASC
  id_DESC
  facebook_ASC
  facebook_DESC
  twitter_ASC
  twitter_DESC
  instagram_ASC
  instagram_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SocialPreviousValues {
  id: ID!
  facebook: String
  twitter: String
  instagram: String
}

type SocialSubscriptionPayload {
  mutation: MutationType!
  node: Social
  updatedFields: [String!]
  previousValues: SocialPreviousValues
}

input SocialSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SocialWhereInput
  AND: [SocialSubscriptionWhereInput!]
  OR: [SocialSubscriptionWhereInput!]
  NOT: [SocialSubscriptionWhereInput!]
}

input SocialUpdateDataInput {
  facebook: String
  twitter: String
  instagram: String
}

input SocialUpdateInput {
  facebook: String
  twitter: String
  instagram: String
}

input SocialUpdateManyMutationInput {
  facebook: String
  twitter: String
  instagram: String
}

input SocialUpdateOneInput {
  create: SocialCreateInput
  update: SocialUpdateDataInput
  upsert: SocialUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: SocialWhereUniqueInput
}

input SocialUpsertNestedInput {
  update: SocialUpdateDataInput!
  create: SocialCreateInput!
}

input SocialWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  facebook: String
  facebook_not: String
  facebook_in: [String!]
  facebook_not_in: [String!]
  facebook_lt: String
  facebook_lte: String
  facebook_gt: String
  facebook_gte: String
  facebook_contains: String
  facebook_not_contains: String
  facebook_starts_with: String
  facebook_not_starts_with: String
  facebook_ends_with: String
  facebook_not_ends_with: String
  twitter: String
  twitter_not: String
  twitter_in: [String!]
  twitter_not_in: [String!]
  twitter_lt: String
  twitter_lte: String
  twitter_gt: String
  twitter_gte: String
  twitter_contains: String
  twitter_not_contains: String
  twitter_starts_with: String
  twitter_not_starts_with: String
  twitter_ends_with: String
  twitter_not_ends_with: String
  instagram: String
  instagram_not: String
  instagram_in: [String!]
  instagram_not_in: [String!]
  instagram_lt: String
  instagram_lte: String
  instagram_gt: String
  instagram_gte: String
  instagram_contains: String
  instagram_not_contains: String
  instagram_starts_with: String
  instagram_not_starts_with: String
  instagram_ends_with: String
  instagram_not_ends_with: String
  AND: [SocialWhereInput!]
  OR: [SocialWhereInput!]
  NOT: [SocialWhereInput!]
}

input SocialWhereUniqueInput {
  id: ID
}

type Subscription {
  conference(where: ConferenceSubscriptionWhereInput): ConferenceSubscriptionPayload
  coordinates(where: CoordinatesSubscriptionWhereInput): CoordinatesSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  price(where: PriceSubscriptionWhereInput): PriceSubscriptionPayload
  social(where: SocialSubscriptionWhereInput): SocialSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
  slug: String!
}

type TagConnection {
  pageInfo: PageInfo!
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

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
  slug: String!
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
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
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
  slug: String
}

type User {
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

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  name: String!
  password: String!
  role: USER_ROLE
}

type UserEdge {
  node: User!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: USER_ROLE
  role_not: USER_ROLE
  role_in: [USER_ROLE!]
  role_not_in: [USER_ROLE!]
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`