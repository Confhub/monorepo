import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    conferences: <T = Conference[]>(args: { where?: ConferenceWhereInput, orderBy?: ConferenceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    coordinateses: <T = Coordinates[]>(args: { where?: CoordinatesWhereInput, orderBy?: CoordinatesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    conferencePrices: <T = ConferencePrice[]>(args: { where?: ConferencePriceWhereInput, orderBy?: ConferencePriceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    socials: <T = Social[]>(args: { where?: SocialWhereInput, orderBy?: SocialOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tags: <T = Tag[]>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locations: <T = Location[]>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    images: <T = Image[]>(args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    prices: <T = Price[]>(args: { where?: PriceWhereInput, orderBy?: PriceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currencies: <T = Currency[]>(args: { where?: CurrencyWhereInput, orderBy?: CurrencyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    conference: <T = Conference | null>(args: { where: ConferenceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    coordinates: <T = Coordinates | null>(args: { where: CoordinatesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    conferencePrice: <T = ConferencePrice | null>(args: { where: ConferencePriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    social: <T = Social | null>(args: { where: SocialWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    location: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    image: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    price: <T = Price | null>(args: { where: PriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currency: <T = Currency | null>(args: { where: CurrencyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    conferencesConnection: <T = ConferenceConnection>(args: { where?: ConferenceWhereInput, orderBy?: ConferenceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    coordinatesesConnection: <T = CoordinatesConnection>(args: { where?: CoordinatesWhereInput, orderBy?: CoordinatesOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    conferencePricesConnection: <T = ConferencePriceConnection>(args: { where?: ConferencePriceWhereInput, orderBy?: ConferencePriceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    socialsConnection: <T = SocialConnection>(args: { where?: SocialWhereInput, orderBy?: SocialOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tagsConnection: <T = TagConnection>(args: { where?: TagWhereInput, orderBy?: TagOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    locationsConnection: <T = LocationConnection>(args: { where?: LocationWhereInput, orderBy?: LocationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imagesConnection: <T = ImageConnection>(args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pricesConnection: <T = PriceConnection>(args: { where?: PriceWhereInput, orderBy?: PriceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    currenciesConnection: <T = CurrencyConnection>(args: { where?: CurrencyWhereInput, orderBy?: CurrencyOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createConference: <T = Conference>(args: { data: ConferenceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCoordinates: <T = Coordinates>(args: { data: CoordinatesCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createConferencePrice: <T = ConferencePrice>(args: { data: ConferencePriceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSocial: <T = Social>(args: { data: SocialCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTag: <T = Tag>(args: { data: TagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocation: <T = Location>(args: { data: LocationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createImage: <T = Image>(args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPrice: <T = Price>(args: { data: PriceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCurrency: <T = Currency>(args: { data: CurrencyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateConference: <T = Conference | null>(args: { data: ConferenceUpdateInput, where: ConferenceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCoordinates: <T = Coordinates | null>(args: { data: CoordinatesUpdateInput, where: CoordinatesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateConferencePrice: <T = ConferencePrice | null>(args: { data: ConferencePriceUpdateInput, where: ConferencePriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSocial: <T = Social | null>(args: { data: SocialUpdateInput, where: SocialWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTag: <T = Tag | null>(args: { data: TagUpdateInput, where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocation: <T = Location | null>(args: { data: LocationUpdateInput, where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateImage: <T = Image | null>(args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePrice: <T = Price | null>(args: { data: PriceUpdateInput, where: PriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCurrency: <T = Currency | null>(args: { data: CurrencyUpdateInput, where: CurrencyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteConference: <T = Conference | null>(args: { where: ConferenceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCoordinates: <T = Coordinates | null>(args: { where: CoordinatesWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteConferencePrice: <T = ConferencePrice | null>(args: { where: ConferencePriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSocial: <T = Social | null>(args: { where: SocialWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTag: <T = Tag | null>(args: { where: TagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocation: <T = Location | null>(args: { where: LocationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteImage: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePrice: <T = Price | null>(args: { where: PriceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCurrency: <T = Currency | null>(args: { where: CurrencyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertConference: <T = Conference>(args: { where: ConferenceWhereUniqueInput, create: ConferenceCreateInput, update: ConferenceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCoordinates: <T = Coordinates>(args: { where: CoordinatesWhereUniqueInput, create: CoordinatesCreateInput, update: CoordinatesUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertConferencePrice: <T = ConferencePrice>(args: { where: ConferencePriceWhereUniqueInput, create: ConferencePriceCreateInput, update: ConferencePriceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSocial: <T = Social>(args: { where: SocialWhereUniqueInput, create: SocialCreateInput, update: SocialUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTag: <T = Tag>(args: { where: TagWhereUniqueInput, create: TagCreateInput, update: TagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocation: <T = Location>(args: { where: LocationWhereUniqueInput, create: LocationCreateInput, update: LocationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertImage: <T = Image>(args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPrice: <T = Price>(args: { where: PriceWhereUniqueInput, create: PriceCreateInput, update: PriceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCurrency: <T = Currency>(args: { where: CurrencyWhereUniqueInput, create: CurrencyCreateInput, update: CurrencyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyConferences: <T = BatchPayload>(args: { data: ConferenceUpdateInput, where?: ConferenceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCoordinateses: <T = BatchPayload>(args: { data: CoordinatesUpdateInput, where?: CoordinatesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyConferencePrices: <T = BatchPayload>(args: { data: ConferencePriceUpdateInput, where?: ConferencePriceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySocials: <T = BatchPayload>(args: { data: SocialUpdateInput, where?: SocialWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTags: <T = BatchPayload>(args: { data: TagUpdateInput, where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocations: <T = BatchPayload>(args: { data: LocationUpdateInput, where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyImages: <T = BatchPayload>(args: { data: ImageUpdateInput, where?: ImageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPrices: <T = BatchPayload>(args: { data: PriceUpdateInput, where?: PriceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCurrencies: <T = BatchPayload>(args: { data: CurrencyUpdateInput, where?: CurrencyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyConferences: <T = BatchPayload>(args: { where?: ConferenceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCoordinateses: <T = BatchPayload>(args: { where?: CoordinatesWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyConferencePrices: <T = BatchPayload>(args: { where?: ConferencePriceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySocials: <T = BatchPayload>(args: { where?: SocialWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTags: <T = BatchPayload>(args: { where?: TagWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocations: <T = BatchPayload>(args: { where?: LocationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyImages: <T = BatchPayload>(args: { where?: ImageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPrices: <T = BatchPayload>(args: { where?: PriceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCurrencies: <T = BatchPayload>(args: { where?: CurrencyWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    conference: <T = ConferenceSubscriptionPayload | null>(args: { where?: ConferenceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    coordinates: <T = CoordinatesSubscriptionPayload | null>(args: { where?: CoordinatesSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    conferencePrice: <T = ConferencePriceSubscriptionPayload | null>(args: { where?: ConferencePriceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    social: <T = SocialSubscriptionPayload | null>(args: { where?: SocialSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tag: <T = TagSubscriptionPayload | null>(args: { where?: TagSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    location: <T = LocationSubscriptionPayload | null>(args: { where?: LocationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    image: <T = ImageSubscriptionPayload | null>(args: { where?: ImageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    price: <T = PriceSubscriptionPayload | null>(args: { where?: PriceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    currency: <T = CurrencySubscriptionPayload | null>(args: { where?: CurrencySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Conference: (where?: ConferenceWhereInput) => Promise<boolean>
  Coordinates: (where?: CoordinatesWhereInput) => Promise<boolean>
  ConferencePrice: (where?: ConferencePriceWhereInput) => Promise<boolean>
  Social: (where?: SocialWhereInput) => Promise<boolean>
  Tag: (where?: TagWhereInput) => Promise<boolean>
  Location: (where?: LocationWhereInput) => Promise<boolean>
  Image: (where?: ImageWhereInput) => Promise<boolean>
  Price: (where?: PriceWhereInput) => Promise<boolean>
  Currency: (where?: CurrencyWhereInput) => Promise<boolean>
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

type AggregateConferencePrice {
  count: Int!
}

type AggregateCoordinates {
  count: Int!
}

type AggregateCurrency {
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
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Conference implements Node {
  id: ID!
  name: String!
  description: String
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  url: String!
  image(where: ImageWhereInput): Image
  startDate: DateTime!
  endDate: DateTime!
  location(where: LocationWhereInput): Location!
  social(where: SocialWhereInput): Social
  publishStatus: PUBLISH_STATUS
  price(where: ConferencePriceWhereInput): ConferencePrice
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
  social: SocialCreateOneInput
  price: ConferencePriceCreateOneInput
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

type ConferencePrice implements Node {
  id: ID!
  regular(where: PriceWhereInput): Price
  earlyBird(where: PriceWhereInput): Price
  lateBird(where: PriceWhereInput): Price
}

"""A connection to a list of items."""
type ConferencePriceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ConferencePriceEdge]!
  aggregate: AggregateConferencePrice!
}

input ConferencePriceCreateInput {
  regular: PriceCreateOneInput
  earlyBird: PriceCreateOneInput
  lateBird: PriceCreateOneInput
}

input ConferencePriceCreateOneInput {
  create: ConferencePriceCreateInput
  connect: ConferencePriceWhereUniqueInput
}

"""An edge in a connection."""
type ConferencePriceEdge {
  """The item at the end of the edge."""
  node: ConferencePrice!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ConferencePriceOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ConferencePricePreviousValues {
  id: ID!
}

type ConferencePriceSubscriptionPayload {
  mutation: MutationType!
  node: ConferencePrice
  updatedFields: [String!]
  previousValues: ConferencePricePreviousValues
}

input ConferencePriceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ConferencePriceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ConferencePriceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ConferencePriceSubscriptionWhereInput!]

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
  node: ConferencePriceWhereInput
}

input ConferencePriceUpdateDataInput {
  regular: PriceUpdateOneInput
  earlyBird: PriceUpdateOneInput
  lateBird: PriceUpdateOneInput
}

input ConferencePriceUpdateInput {
  regular: PriceUpdateOneInput
  earlyBird: PriceUpdateOneInput
  lateBird: PriceUpdateOneInput
}

input ConferencePriceUpdateOneInput {
  create: ConferencePriceCreateInput
  connect: ConferencePriceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ConferencePriceUpdateDataInput
  upsert: ConferencePriceUpsertNestedInput
}

input ConferencePriceUpsertNestedInput {
  update: ConferencePriceUpdateDataInput!
  create: ConferencePriceCreateInput!
}

input ConferencePriceWhereInput {
  """Logical AND on all given filters."""
  AND: [ConferencePriceWhereInput!]

  """Logical OR on all given filters."""
  OR: [ConferencePriceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ConferencePriceWhereInput!]
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
  regular: PriceWhereInput
  earlyBird: PriceWhereInput
  lateBird: PriceWhereInput
  _MagicalBackRelation_ConferenceToConferencePrice_every: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToConferencePrice_some: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToConferencePrice_none: ConferenceWhereInput
}

input ConferencePriceWhereUniqueInput {
  id: ID
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
  location: LocationUpdateOneInput
  social: SocialUpdateOneInput
  price: ConferencePriceUpdateOneInput
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
  social: SocialWhereInput
  price: ConferencePriceWhereInput
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

input CoordinatesUpdateOneInput {
  create: CoordinatesCreateInput
  connect: CoordinatesWhereUniqueInput
  delete: Boolean
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
  _MagicalBackRelation_CoordinatesToLocation_every: LocationWhereInput
  _MagicalBackRelation_CoordinatesToLocation_some: LocationWhereInput
  _MagicalBackRelation_CoordinatesToLocation_none: LocationWhereInput
}

input CoordinatesWhereUniqueInput {
  id: ID
}

type Currency implements Node {
  id: ID!
  name: String!
  value: String!
}

"""A connection to a list of items."""
type CurrencyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CurrencyEdge]!
  aggregate: AggregateCurrency!
}

input CurrencyCreateInput {
  name: String!
  value: String!
}

input CurrencyCreateOneInput {
  create: CurrencyCreateInput
  connect: CurrencyWhereUniqueInput
}

"""An edge in a connection."""
type CurrencyEdge {
  """The item at the end of the edge."""
  node: Currency!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CurrencyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CurrencyPreviousValues {
  id: ID!
  name: String!
  value: String!
}

type CurrencySubscriptionPayload {
  mutation: MutationType!
  node: Currency
  updatedFields: [String!]
  previousValues: CurrencyPreviousValues
}

input CurrencySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CurrencySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CurrencySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CurrencySubscriptionWhereInput!]

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
  node: CurrencyWhereInput
}

input CurrencyUpdateDataInput {
  name: String
  value: String
}

input CurrencyUpdateInput {
  name: String
  value: String
}

input CurrencyUpdateOneInput {
  create: CurrencyCreateInput
  connect: CurrencyWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CurrencyUpdateDataInput
  upsert: CurrencyUpsertNestedInput
}

input CurrencyUpsertNestedInput {
  update: CurrencyUpdateDataInput!
  create: CurrencyCreateInput!
}

input CurrencyWhereInput {
  """Logical AND on all given filters."""
  AND: [CurrencyWhereInput!]

  """Logical OR on all given filters."""
  OR: [CurrencyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CurrencyWhereInput!]
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
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
  _MagicalBackRelation_CurrencyToPrice_every: PriceWhereInput
  _MagicalBackRelation_CurrencyToPrice_some: PriceWhereInput
  _MagicalBackRelation_CurrencyToPrice_none: PriceWhereInput
}

input CurrencyWhereUniqueInput {
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
  _MagicalBackRelation_ConferenceToImage_every: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToImage_some: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToImage_none: ConferenceWhereInput
}

input ImageWhereUniqueInput {
  id: ID
}

type Location implements Node {
  id: ID!
  venueName: String
  continent: String!
  country: String!
  city: String!
  address: String!
  coordinates(where: CoordinatesWhereInput): Coordinates!
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
  continent_ASC
  continent_DESC
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
  continent: String
  country: String
  city: String
  address: String
  coordinates: CoordinatesUpdateOneInput
}

input LocationUpdateInput {
  venueName: String
  continent: String
  country: String
  city: String
  address: String
  coordinates: CoordinatesUpdateOneInput
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
  delete: Boolean
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
  continent: String

  """All values that are not equal to given value."""
  continent_not: String

  """All values that are contained in given list."""
  continent_in: [String!]

  """All values that are not contained in given list."""
  continent_not_in: [String!]

  """All values less than the given value."""
  continent_lt: String

  """All values less than or equal the given value."""
  continent_lte: String

  """All values greater than the given value."""
  continent_gt: String

  """All values greater than or equal the given value."""
  continent_gte: String

  """All values containing the given string."""
  continent_contains: String

  """All values not containing the given string."""
  continent_not_contains: String

  """All values starting with the given string."""
  continent_starts_with: String

  """All values not starting with the given string."""
  continent_not_starts_with: String

  """All values ending with the given string."""
  continent_ends_with: String

  """All values not ending with the given string."""
  continent_not_ends_with: String
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
  _MagicalBackRelation_ConferenceToLocation_every: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToLocation_some: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToLocation_none: ConferenceWhereInput
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
  createCoordinates(data: CoordinatesCreateInput!): Coordinates!
  createConferencePrice(data: ConferencePriceCreateInput!): ConferencePrice!
  createSocial(data: SocialCreateInput!): Social!
  createTag(data: TagCreateInput!): Tag!
  createLocation(data: LocationCreateInput!): Location!
  createImage(data: ImageCreateInput!): Image!
  createPrice(data: PriceCreateInput!): Price!
  createCurrency(data: CurrencyCreateInput!): Currency!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateConference(data: ConferenceUpdateInput!, where: ConferenceWhereUniqueInput!): Conference
  updateCoordinates(data: CoordinatesUpdateInput!, where: CoordinatesWhereUniqueInput!): Coordinates
  updateConferencePrice(data: ConferencePriceUpdateInput!, where: ConferencePriceWhereUniqueInput!): ConferencePrice
  updateSocial(data: SocialUpdateInput!, where: SocialWhereUniqueInput!): Social
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updatePrice(data: PriceUpdateInput!, where: PriceWhereUniqueInput!): Price
  updateCurrency(data: CurrencyUpdateInput!, where: CurrencyWhereUniqueInput!): Currency
  deleteUser(where: UserWhereUniqueInput!): User
  deleteConference(where: ConferenceWhereUniqueInput!): Conference
  deleteCoordinates(where: CoordinatesWhereUniqueInput!): Coordinates
  deleteConferencePrice(where: ConferencePriceWhereUniqueInput!): ConferencePrice
  deleteSocial(where: SocialWhereUniqueInput!): Social
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteImage(where: ImageWhereUniqueInput!): Image
  deletePrice(where: PriceWhereUniqueInput!): Price
  deleteCurrency(where: CurrencyWhereUniqueInput!): Currency
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertConference(where: ConferenceWhereUniqueInput!, create: ConferenceCreateInput!, update: ConferenceUpdateInput!): Conference!
  upsertCoordinates(where: CoordinatesWhereUniqueInput!, create: CoordinatesCreateInput!, update: CoordinatesUpdateInput!): Coordinates!
  upsertConferencePrice(where: ConferencePriceWhereUniqueInput!, create: ConferencePriceCreateInput!, update: ConferencePriceUpdateInput!): ConferencePrice!
  upsertSocial(where: SocialWhereUniqueInput!, create: SocialCreateInput!, update: SocialUpdateInput!): Social!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  upsertPrice(where: PriceWhereUniqueInput!, create: PriceCreateInput!, update: PriceUpdateInput!): Price!
  upsertCurrency(where: CurrencyWhereUniqueInput!, create: CurrencyCreateInput!, update: CurrencyUpdateInput!): Currency!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyConferences(data: ConferenceUpdateInput!, where: ConferenceWhereInput): BatchPayload!
  updateManyCoordinateses(data: CoordinatesUpdateInput!, where: CoordinatesWhereInput): BatchPayload!
  updateManyConferencePrices(data: ConferencePriceUpdateInput!, where: ConferencePriceWhereInput): BatchPayload!
  updateManySocials(data: SocialUpdateInput!, where: SocialWhereInput): BatchPayload!
  updateManyTags(data: TagUpdateInput!, where: TagWhereInput): BatchPayload!
  updateManyLocations(data: LocationUpdateInput!, where: LocationWhereInput): BatchPayload!
  updateManyImages(data: ImageUpdateInput!, where: ImageWhereInput): BatchPayload!
  updateManyPrices(data: PriceUpdateInput!, where: PriceWhereInput): BatchPayload!
  updateManyCurrencies(data: CurrencyUpdateInput!, where: CurrencyWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyConferences(where: ConferenceWhereInput): BatchPayload!
  deleteManyCoordinateses(where: CoordinatesWhereInput): BatchPayload!
  deleteManyConferencePrices(where: ConferencePriceWhereInput): BatchPayload!
  deleteManySocials(where: SocialWhereInput): BatchPayload!
  deleteManyTags(where: TagWhereInput): BatchPayload!
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  deleteManyPrices(where: PriceWhereInput): BatchPayload!
  deleteManyCurrencies(where: CurrencyWhereInput): BatchPayload!
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

type Price implements Node {
  id: ID!
  amount: String
  currency(where: CurrencyWhereInput): Currency
  expirationDate: DateTime
}

"""A connection to a list of items."""
type PriceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PriceEdge]!
  aggregate: AggregatePrice!
}

input PriceCreateInput {
  amount: String
  expirationDate: DateTime
  currency: CurrencyCreateOneInput
}

input PriceCreateOneInput {
  create: PriceCreateInput
  connect: PriceWhereUniqueInput
}

"""An edge in a connection."""
type PriceEdge {
  """The item at the end of the edge."""
  node: Price!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PriceOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  expirationDate_ASC
  expirationDate_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PricePreviousValues {
  id: ID!
  amount: String
  expirationDate: DateTime
}

type PriceSubscriptionPayload {
  mutation: MutationType!
  node: Price
  updatedFields: [String!]
  previousValues: PricePreviousValues
}

input PriceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PriceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PriceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PriceSubscriptionWhereInput!]

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
  node: PriceWhereInput
}

input PriceUpdateDataInput {
  amount: String
  expirationDate: DateTime
  currency: CurrencyUpdateOneInput
}

input PriceUpdateInput {
  amount: String
  expirationDate: DateTime
  currency: CurrencyUpdateOneInput
}

input PriceUpdateOneInput {
  create: PriceCreateInput
  connect: PriceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PriceUpdateDataInput
  upsert: PriceUpsertNestedInput
}

input PriceUpsertNestedInput {
  update: PriceUpdateDataInput!
  create: PriceCreateInput!
}

input PriceWhereInput {
  """Logical AND on all given filters."""
  AND: [PriceWhereInput!]

  """Logical OR on all given filters."""
  OR: [PriceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PriceWhereInput!]
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
  amount: String

  """All values that are not equal to given value."""
  amount_not: String

  """All values that are contained in given list."""
  amount_in: [String!]

  """All values that are not contained in given list."""
  amount_not_in: [String!]

  """All values less than the given value."""
  amount_lt: String

  """All values less than or equal the given value."""
  amount_lte: String

  """All values greater than the given value."""
  amount_gt: String

  """All values greater than or equal the given value."""
  amount_gte: String

  """All values containing the given string."""
  amount_contains: String

  """All values not containing the given string."""
  amount_not_contains: String

  """All values starting with the given string."""
  amount_starts_with: String

  """All values not starting with the given string."""
  amount_not_starts_with: String

  """All values ending with the given string."""
  amount_ends_with: String

  """All values not ending with the given string."""
  amount_not_ends_with: String
  expirationDate: DateTime

  """All values that are not equal to given value."""
  expirationDate_not: DateTime

  """All values that are contained in given list."""
  expirationDate_in: [DateTime!]

  """All values that are not contained in given list."""
  expirationDate_not_in: [DateTime!]

  """All values less than the given value."""
  expirationDate_lt: DateTime

  """All values less than or equal the given value."""
  expirationDate_lte: DateTime

  """All values greater than the given value."""
  expirationDate_gt: DateTime

  """All values greater than or equal the given value."""
  expirationDate_gte: DateTime
  currency: CurrencyWhereInput
  _MagicalBackRelation_EarlyBirdPrice_every: ConferencePriceWhereInput
  _MagicalBackRelation_EarlyBirdPrice_some: ConferencePriceWhereInput
  _MagicalBackRelation_EarlyBirdPrice_none: ConferencePriceWhereInput
  _MagicalBackRelation_RegularPrice_every: ConferencePriceWhereInput
  _MagicalBackRelation_RegularPrice_some: ConferencePriceWhereInput
  _MagicalBackRelation_RegularPrice_none: ConferencePriceWhereInput
  _MagicalBackRelation_LateBirdPrice_every: ConferencePriceWhereInput
  _MagicalBackRelation_LateBirdPrice_some: ConferencePriceWhereInput
  _MagicalBackRelation_LateBirdPrice_none: ConferencePriceWhereInput
}

input PriceWhereUniqueInput {
  id: ID
}

enum PUBLISH_STATUS {
  DRAFT
  PUBLISHED
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  conferences(where: ConferenceWhereInput, orderBy: ConferenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Conference]!
  coordinateses(where: CoordinatesWhereInput, orderBy: CoordinatesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Coordinates]!
  conferencePrices(where: ConferencePriceWhereInput, orderBy: ConferencePriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ConferencePrice]!
  socials(where: SocialWhereInput, orderBy: SocialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Social]!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  prices(where: PriceWhereInput, orderBy: PriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Price]!
  currencies(where: CurrencyWhereInput, orderBy: CurrencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Currency]!
  user(where: UserWhereUniqueInput!): User
  conference(where: ConferenceWhereUniqueInput!): Conference
  coordinates(where: CoordinatesWhereUniqueInput!): Coordinates
  conferencePrice(where: ConferencePriceWhereUniqueInput!): ConferencePrice
  social(where: SocialWhereUniqueInput!): Social
  tag(where: TagWhereUniqueInput!): Tag
  location(where: LocationWhereUniqueInput!): Location
  image(where: ImageWhereUniqueInput!): Image
  price(where: PriceWhereUniqueInput!): Price
  currency(where: CurrencyWhereUniqueInput!): Currency
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  conferencesConnection(where: ConferenceWhereInput, orderBy: ConferenceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConferenceConnection!
  coordinatesesConnection(where: CoordinatesWhereInput, orderBy: CoordinatesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CoordinatesConnection!
  conferencePricesConnection(where: ConferencePriceWhereInput, orderBy: ConferencePriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConferencePriceConnection!
  socialsConnection(where: SocialWhereInput, orderBy: SocialOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SocialConnection!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  pricesConnection(where: PriceWhereInput, orderBy: PriceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PriceConnection!
  currenciesConnection(where: CurrencyWhereInput, orderBy: CurrencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CurrencyConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Social implements Node {
  id: ID!
  facebook: String
  twitter: String
  instagram: String
}

"""A connection to a list of items."""
type SocialConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type SocialEdge {
  """The item at the end of the edge."""
  node: Social!

  """A cursor for use in pagination."""
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [SocialSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SocialSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SocialSubscriptionWhereInput!]

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
  node: SocialWhereInput
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

input SocialUpdateOneInput {
  create: SocialCreateInput
  connect: SocialWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SocialUpdateDataInput
  upsert: SocialUpsertNestedInput
}

input SocialUpsertNestedInput {
  update: SocialUpdateDataInput!
  create: SocialCreateInput!
}

input SocialWhereInput {
  """Logical AND on all given filters."""
  AND: [SocialWhereInput!]

  """Logical OR on all given filters."""
  OR: [SocialWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SocialWhereInput!]
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
  facebook: String

  """All values that are not equal to given value."""
  facebook_not: String

  """All values that are contained in given list."""
  facebook_in: [String!]

  """All values that are not contained in given list."""
  facebook_not_in: [String!]

  """All values less than the given value."""
  facebook_lt: String

  """All values less than or equal the given value."""
  facebook_lte: String

  """All values greater than the given value."""
  facebook_gt: String

  """All values greater than or equal the given value."""
  facebook_gte: String

  """All values containing the given string."""
  facebook_contains: String

  """All values not containing the given string."""
  facebook_not_contains: String

  """All values starting with the given string."""
  facebook_starts_with: String

  """All values not starting with the given string."""
  facebook_not_starts_with: String

  """All values ending with the given string."""
  facebook_ends_with: String

  """All values not ending with the given string."""
  facebook_not_ends_with: String
  twitter: String

  """All values that are not equal to given value."""
  twitter_not: String

  """All values that are contained in given list."""
  twitter_in: [String!]

  """All values that are not contained in given list."""
  twitter_not_in: [String!]

  """All values less than the given value."""
  twitter_lt: String

  """All values less than or equal the given value."""
  twitter_lte: String

  """All values greater than the given value."""
  twitter_gt: String

  """All values greater than or equal the given value."""
  twitter_gte: String

  """All values containing the given string."""
  twitter_contains: String

  """All values not containing the given string."""
  twitter_not_contains: String

  """All values starting with the given string."""
  twitter_starts_with: String

  """All values not starting with the given string."""
  twitter_not_starts_with: String

  """All values ending with the given string."""
  twitter_ends_with: String

  """All values not ending with the given string."""
  twitter_not_ends_with: String
  instagram: String

  """All values that are not equal to given value."""
  instagram_not: String

  """All values that are contained in given list."""
  instagram_in: [String!]

  """All values that are not contained in given list."""
  instagram_not_in: [String!]

  """All values less than the given value."""
  instagram_lt: String

  """All values less than or equal the given value."""
  instagram_lte: String

  """All values greater than the given value."""
  instagram_gt: String

  """All values greater than or equal the given value."""
  instagram_gte: String

  """All values containing the given string."""
  instagram_contains: String

  """All values not containing the given string."""
  instagram_not_contains: String

  """All values starting with the given string."""
  instagram_starts_with: String

  """All values not starting with the given string."""
  instagram_not_starts_with: String

  """All values ending with the given string."""
  instagram_ends_with: String

  """All values not ending with the given string."""
  instagram_not_ends_with: String
  _MagicalBackRelation_ConferenceToSocial_every: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToSocial_some: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToSocial_none: ConferenceWhereInput
}

input SocialWhereUniqueInput {
  id: ID
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  conference(where: ConferenceSubscriptionWhereInput): ConferenceSubscriptionPayload
  coordinates(where: CoordinatesSubscriptionWhereInput): CoordinatesSubscriptionPayload
  conferencePrice(where: ConferencePriceSubscriptionWhereInput): ConferencePriceSubscriptionPayload
  social(where: SocialSubscriptionWhereInput): SocialSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  price(where: PriceSubscriptionWhereInput): PriceSubscriptionPayload
  currency(where: CurrencySubscriptionWhereInput): CurrencySubscriptionPayload
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

input TagUpdateManyInput {
  create: [TagCreateInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  delete: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueNestedInput!]
  upsert: [TagUpsertWithWhereUniqueNestedInput!]
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
  _MagicalBackRelation_ConferenceToTag_every: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToTag_some: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToTag_none: ConferenceWhereInput
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

export type LocationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'venueName_ASC' |
  'venueName_DESC' |
  'continent_ASC' |
  'continent_DESC' |
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

export type SocialOrderByInput =   'id_ASC' |
  'id_DESC' |
  'facebook_ASC' |
  'facebook_DESC' |
  'twitter_ASC' |
  'twitter_DESC' |
  'instagram_ASC' |
  'instagram_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CurrencyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type ConferencePriceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PUBLISH_STATUS =   'DRAFT' |
  'PUBLISHED'

export type USER_ROLE =   'ATTENDEE' |
  'SPEAKER' |
  'MODERATOR'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

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

export type PriceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'expirationDate_ASC' |
  'expirationDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export interface TagCreateInput {
  name: String
  slug: String
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  role?: USER_ROLE
  role_not?: USER_ROLE
  role_in?: USER_ROLE[] | USER_ROLE
  role_not_in?: USER_ROLE[] | USER_ROLE
}

export interface CurrencyUpdateDataInput {
  name?: String
  value?: String
}

export interface CurrencyCreateInput {
  name: String
  value: String
}

export interface CurrencyUpdateOneInput {
  create?: CurrencyCreateInput
  connect?: CurrencyWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CurrencyUpdateDataInput
  upsert?: CurrencyUpsertNestedInput
}

export interface SocialCreateOneInput {
  create?: SocialCreateInput
  connect?: SocialWhereUniqueInput
}

export interface PriceUpdateDataInput {
  amount?: String
  expirationDate?: DateTime
  currency?: CurrencyUpdateOneInput
}

export interface PriceWhereInput {
  AND?: PriceWhereInput[] | PriceWhereInput
  OR?: PriceWhereInput[] | PriceWhereInput
  NOT?: PriceWhereInput[] | PriceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  amount?: String
  amount_not?: String
  amount_in?: String[] | String
  amount_not_in?: String[] | String
  amount_lt?: String
  amount_lte?: String
  amount_gt?: String
  amount_gte?: String
  amount_contains?: String
  amount_not_contains?: String
  amount_starts_with?: String
  amount_not_starts_with?: String
  amount_ends_with?: String
  amount_not_ends_with?: String
  expirationDate?: DateTime
  expirationDate_not?: DateTime
  expirationDate_in?: DateTime[] | DateTime
  expirationDate_not_in?: DateTime[] | DateTime
  expirationDate_lt?: DateTime
  expirationDate_lte?: DateTime
  expirationDate_gt?: DateTime
  expirationDate_gte?: DateTime
  currency?: CurrencyWhereInput
  _MagicalBackRelation_EarlyBirdPrice_every?: ConferencePriceWhereInput
  _MagicalBackRelation_EarlyBirdPrice_some?: ConferencePriceWhereInput
  _MagicalBackRelation_EarlyBirdPrice_none?: ConferencePriceWhereInput
  _MagicalBackRelation_RegularPrice_every?: ConferencePriceWhereInput
  _MagicalBackRelation_RegularPrice_some?: ConferencePriceWhereInput
  _MagicalBackRelation_RegularPrice_none?: ConferencePriceWhereInput
  _MagicalBackRelation_LateBirdPrice_every?: ConferencePriceWhereInput
  _MagicalBackRelation_LateBirdPrice_some?: ConferencePriceWhereInput
  _MagicalBackRelation_LateBirdPrice_none?: ConferencePriceWhereInput
}

export interface PriceUpdateOneInput {
  create?: PriceCreateInput
  connect?: PriceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PriceUpdateDataInput
  upsert?: PriceUpsertNestedInput
}

export interface CoordinatesWhereInput {
  AND?: CoordinatesWhereInput[] | CoordinatesWhereInput
  OR?: CoordinatesWhereInput[] | CoordinatesWhereInput
  NOT?: CoordinatesWhereInput[] | CoordinatesWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  latitude?: Float
  latitude_not?: Float
  latitude_in?: Float[] | Float
  latitude_not_in?: Float[] | Float
  latitude_lt?: Float
  latitude_lte?: Float
  latitude_gt?: Float
  latitude_gte?: Float
  longitude?: Float
  longitude_not?: Float
  longitude_in?: Float[] | Float
  longitude_not_in?: Float[] | Float
  longitude_lt?: Float
  longitude_lte?: Float
  longitude_gt?: Float
  longitude_gte?: Float
  _MagicalBackRelation_CoordinatesToLocation_every?: LocationWhereInput
  _MagicalBackRelation_CoordinatesToLocation_some?: LocationWhereInput
  _MagicalBackRelation_CoordinatesToLocation_none?: LocationWhereInput
}

export interface ConferencePriceUpdateDataInput {
  regular?: PriceUpdateOneInput
  earlyBird?: PriceUpdateOneInput
  lateBird?: PriceUpdateOneInput
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | LocationWhereInput
  OR?: LocationWhereInput[] | LocationWhereInput
  NOT?: LocationWhereInput[] | LocationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  venueName?: String
  venueName_not?: String
  venueName_in?: String[] | String
  venueName_not_in?: String[] | String
  venueName_lt?: String
  venueName_lte?: String
  venueName_gt?: String
  venueName_gte?: String
  venueName_contains?: String
  venueName_not_contains?: String
  venueName_starts_with?: String
  venueName_not_starts_with?: String
  venueName_ends_with?: String
  venueName_not_ends_with?: String
  continent?: String
  continent_not?: String
  continent_in?: String[] | String
  continent_not_in?: String[] | String
  continent_lt?: String
  continent_lte?: String
  continent_gt?: String
  continent_gte?: String
  continent_contains?: String
  continent_not_contains?: String
  continent_starts_with?: String
  continent_not_starts_with?: String
  continent_ends_with?: String
  continent_not_ends_with?: String
  country?: String
  country_not?: String
  country_in?: String[] | String
  country_not_in?: String[] | String
  country_lt?: String
  country_lte?: String
  country_gt?: String
  country_gte?: String
  country_contains?: String
  country_not_contains?: String
  country_starts_with?: String
  country_not_starts_with?: String
  country_ends_with?: String
  country_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  coordinates?: CoordinatesWhereInput
  _MagicalBackRelation_ConferenceToLocation_every?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToLocation_some?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToLocation_none?: ConferenceWhereInput
}

export interface ConferencePriceUpdateOneInput {
  create?: ConferencePriceCreateInput
  connect?: ConferencePriceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ConferencePriceUpdateDataInput
  upsert?: ConferencePriceUpsertNestedInput
}

export interface ImageSubscriptionWhereInput {
  AND?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  OR?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  NOT?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ImageWhereInput
}

export interface SocialUpsertNestedInput {
  update: SocialUpdateDataInput
  create: SocialCreateInput
}

export interface TagSubscriptionWhereInput {
  AND?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  OR?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  NOT?: TagSubscriptionWhereInput[] | TagSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TagWhereInput
}

export interface SocialUpdateDataInput {
  facebook?: String
  twitter?: String
  instagram?: String
}

export interface ConferencePriceSubscriptionWhereInput {
  AND?: ConferencePriceSubscriptionWhereInput[] | ConferencePriceSubscriptionWhereInput
  OR?: ConferencePriceSubscriptionWhereInput[] | ConferencePriceSubscriptionWhereInput
  NOT?: ConferencePriceSubscriptionWhereInput[] | ConferencePriceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ConferencePriceWhereInput
}

export interface SocialUpdateOneInput {
  create?: SocialCreateInput
  connect?: SocialWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SocialUpdateDataInput
  upsert?: SocialUpsertNestedInput
}

export interface ConferenceSubscriptionWhereInput {
  AND?: ConferenceSubscriptionWhereInput[] | ConferenceSubscriptionWhereInput
  OR?: ConferenceSubscriptionWhereInput[] | ConferenceSubscriptionWhereInput
  NOT?: ConferenceSubscriptionWhereInput[] | ConferenceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ConferenceWhereInput
}

export interface LocationUpsertNestedInput {
  update: LocationUpdateDataInput
  create: LocationCreateInput
}

export interface TagWhereInput {
  AND?: TagWhereInput[] | TagWhereInput
  OR?: TagWhereInput[] | TagWhereInput
  NOT?: TagWhereInput[] | TagWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  _MagicalBackRelation_ConferenceToTag_every?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToTag_some?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToTag_none?: ConferenceWhereInput
}

export interface CoordinatesUpsertNestedInput {
  update: CoordinatesUpdateDataInput
  create: CoordinatesCreateInput
}

export interface CurrencyUpdateInput {
  name?: String
  value?: String
}

export interface CoordinatesUpdateDataInput {
  latitude?: Float
  longitude?: Float
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface CoordinatesUpdateOneInput {
  create?: CoordinatesCreateInput
  connect?: CoordinatesWhereUniqueInput
  delete?: Boolean
  update?: CoordinatesUpdateDataInput
  upsert?: CoordinatesUpsertNestedInput
}

export interface CoordinatesWhereUniqueInput {
  id?: ID_Input
}

export interface LocationUpdateDataInput {
  venueName?: String
  continent?: String
  country?: String
  city?: String
  address?: String
  coordinates?: CoordinatesUpdateOneInput
}

export interface SocialWhereUniqueInput {
  id?: ID_Input
}

export interface LocationUpdateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
  delete?: Boolean
  update?: LocationUpdateDataInput
  upsert?: LocationUpsertNestedInput
}

export interface LocationWhereUniqueInput {
  id?: ID_Input
}

export interface ImageUpsertNestedInput {
  update: ImageUpdateDataInput
  create: ImageCreateInput
}

export interface PriceWhereUniqueInput {
  id?: ID_Input
}

export interface ImageUpdateDataInput {
  src?: String
  alt?: String
}

export interface ImageUpdateInput {
  src?: String
  alt?: String
}

export interface ImageUpdateOneInput {
  create?: ImageCreateInput
  connect?: ImageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ImageUpdateDataInput
  upsert?: ImageUpsertNestedInput
}

export interface TagUpdateInput {
  name?: String
  slug?: String
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  update: TagUpdateDataInput
  create: TagCreateInput
}

export interface ConferencePriceUpdateInput {
  regular?: PriceUpdateOneInput
  earlyBird?: PriceUpdateOneInput
  lateBird?: PriceUpdateOneInput
}

export interface TagUpdateDataInput {
  name?: String
  slug?: String
}

export interface ConferencePriceUpsertNestedInput {
  update: ConferencePriceUpdateDataInput
  create: ConferencePriceCreateInput
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput
  data: TagUpdateDataInput
}

export interface CurrencyUpsertNestedInput {
  update: CurrencyUpdateDataInput
  create: CurrencyCreateInput
}

export interface TagUpdateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  disconnect?: TagWhereUniqueInput[] | TagWhereUniqueInput
  delete?: TagWhereUniqueInput[] | TagWhereUniqueInput
  update?: TagUpdateWithWhereUniqueNestedInput[] | TagUpdateWithWhereUniqueNestedInput
  upsert?: TagUpsertWithWhereUniqueNestedInput[] | TagUpsertWithWhereUniqueNestedInput
}

export interface CurrencyWhereInput {
  AND?: CurrencyWhereInput[] | CurrencyWhereInput
  OR?: CurrencyWhereInput[] | CurrencyWhereInput
  NOT?: CurrencyWhereInput[] | CurrencyWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  _MagicalBackRelation_CurrencyToPrice_every?: PriceWhereInput
  _MagicalBackRelation_CurrencyToPrice_some?: PriceWhereInput
  _MagicalBackRelation_CurrencyToPrice_none?: PriceWhereInput
}

export interface ConferenceUpdateInput {
  name?: String
  description?: String
  url?: String
  startDate?: DateTime
  endDate?: DateTime
  publishStatus?: PUBLISH_STATUS
  tags?: TagUpdateManyInput
  image?: ImageUpdateOneInput
  location?: LocationUpdateOneInput
  social?: SocialUpdateOneInput
  price?: ConferencePriceUpdateOneInput
}

export interface PriceSubscriptionWhereInput {
  AND?: PriceSubscriptionWhereInput[] | PriceSubscriptionWhereInput
  OR?: PriceSubscriptionWhereInput[] | PriceSubscriptionWhereInput
  NOT?: PriceSubscriptionWhereInput[] | PriceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PriceWhereInput
}

export interface UserCreateInput {
  email: String
  name: String
  password: String
  role?: USER_ROLE
}

export interface SocialSubscriptionWhereInput {
  AND?: SocialSubscriptionWhereInput[] | SocialSubscriptionWhereInput
  OR?: SocialSubscriptionWhereInput[] | SocialSubscriptionWhereInput
  NOT?: SocialSubscriptionWhereInput[] | SocialSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SocialWhereInput
}

export interface ConferenceCreateInput {
  name: String
  description?: String
  url: String
  startDate: DateTime
  endDate: DateTime
  publishStatus?: PUBLISH_STATUS
  tags?: TagCreateManyInput
  image?: ImageCreateOneInput
  location: LocationCreateOneInput
  social?: SocialCreateOneInput
  price?: ConferencePriceCreateOneInput
}

export interface ImageWhereInput {
  AND?: ImageWhereInput[] | ImageWhereInput
  OR?: ImageWhereInput[] | ImageWhereInput
  NOT?: ImageWhereInput[] | ImageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  src?: String
  src_not?: String
  src_in?: String[] | String
  src_not_in?: String[] | String
  src_lt?: String
  src_lte?: String
  src_gt?: String
  src_gte?: String
  src_contains?: String
  src_not_contains?: String
  src_starts_with?: String
  src_not_starts_with?: String
  src_ends_with?: String
  src_not_ends_with?: String
  alt?: String
  alt_not?: String
  alt_in?: String[] | String
  alt_not_in?: String[] | String
  alt_lt?: String
  alt_lte?: String
  alt_gt?: String
  alt_gte?: String
  alt_contains?: String
  alt_not_contains?: String
  alt_starts_with?: String
  alt_not_starts_with?: String
  alt_ends_with?: String
  alt_not_ends_with?: String
  _MagicalBackRelation_ConferenceToImage_every?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToImage_some?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToImage_none?: ConferenceWhereInput
}

export interface TagCreateManyInput {
  create?: TagCreateInput[] | TagCreateInput
  connect?: TagWhereUniqueInput[] | TagWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateInput {
  email?: String
  name?: String
  password?: String
  role?: USER_ROLE
}

export interface ConferenceWhereUniqueInput {
  id?: ID_Input
}

export interface ImageCreateOneInput {
  create?: ImageCreateInput
  connect?: ImageWhereUniqueInput
}

export interface TagWhereUniqueInput {
  id?: ID_Input
  slug?: String
}

export interface ImageCreateInput {
  src: String
  alt?: String
}

export interface CurrencyWhereUniqueInput {
  id?: ID_Input
}

export interface LocationCreateOneInput {
  create?: LocationCreateInput
  connect?: LocationWhereUniqueInput
}

export interface SocialUpdateInput {
  facebook?: String
  twitter?: String
  instagram?: String
}

export interface LocationCreateInput {
  venueName?: String
  continent: String
  country: String
  city: String
  address: String
  coordinates: CoordinatesCreateOneInput
}

export interface PriceUpsertNestedInput {
  update: PriceUpdateDataInput
  create: PriceCreateInput
}

export interface CoordinatesCreateOneInput {
  create?: CoordinatesCreateInput
  connect?: CoordinatesWhereUniqueInput
}

export interface CurrencySubscriptionWhereInput {
  AND?: CurrencySubscriptionWhereInput[] | CurrencySubscriptionWhereInput
  OR?: CurrencySubscriptionWhereInput[] | CurrencySubscriptionWhereInput
  NOT?: CurrencySubscriptionWhereInput[] | CurrencySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CurrencyWhereInput
}

export interface CoordinatesCreateInput {
  latitude: Float
  longitude: Float
}

export interface CoordinatesSubscriptionWhereInput {
  AND?: CoordinatesSubscriptionWhereInput[] | CoordinatesSubscriptionWhereInput
  OR?: CoordinatesSubscriptionWhereInput[] | CoordinatesSubscriptionWhereInput
  NOT?: CoordinatesSubscriptionWhereInput[] | CoordinatesSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CoordinatesWhereInput
}

export interface SocialWhereInput {
  AND?: SocialWhereInput[] | SocialWhereInput
  OR?: SocialWhereInput[] | SocialWhereInput
  NOT?: SocialWhereInput[] | SocialWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  facebook?: String
  facebook_not?: String
  facebook_in?: String[] | String
  facebook_not_in?: String[] | String
  facebook_lt?: String
  facebook_lte?: String
  facebook_gt?: String
  facebook_gte?: String
  facebook_contains?: String
  facebook_not_contains?: String
  facebook_starts_with?: String
  facebook_not_starts_with?: String
  facebook_ends_with?: String
  facebook_not_ends_with?: String
  twitter?: String
  twitter_not?: String
  twitter_in?: String[] | String
  twitter_not_in?: String[] | String
  twitter_lt?: String
  twitter_lte?: String
  twitter_gt?: String
  twitter_gte?: String
  twitter_contains?: String
  twitter_not_contains?: String
  twitter_starts_with?: String
  twitter_not_starts_with?: String
  twitter_ends_with?: String
  twitter_not_ends_with?: String
  instagram?: String
  instagram_not?: String
  instagram_in?: String[] | String
  instagram_not_in?: String[] | String
  instagram_lt?: String
  instagram_lte?: String
  instagram_gt?: String
  instagram_gte?: String
  instagram_contains?: String
  instagram_not_contains?: String
  instagram_starts_with?: String
  instagram_not_starts_with?: String
  instagram_ends_with?: String
  instagram_not_ends_with?: String
  _MagicalBackRelation_ConferenceToSocial_every?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToSocial_some?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToSocial_none?: ConferenceWhereInput
}

export interface PriceUpdateInput {
  amount?: String
  expirationDate?: DateTime
  currency?: CurrencyUpdateOneInput
}

export interface SocialCreateInput {
  facebook?: String
  twitter?: String
  instagram?: String
}

export interface ImageWhereUniqueInput {
  id?: ID_Input
}

export interface ConferencePriceCreateOneInput {
  create?: ConferencePriceCreateInput
  connect?: ConferencePriceWhereUniqueInput
}

export interface CoordinatesUpdateInput {
  latitude?: Float
  longitude?: Float
}

export interface CurrencyCreateOneInput {
  create?: CurrencyCreateInput
  connect?: CurrencyWhereUniqueInput
}

export interface PriceCreateInput {
  amount?: String
  expirationDate?: DateTime
  currency?: CurrencyCreateOneInput
}

export interface PriceCreateOneInput {
  create?: PriceCreateInput
  connect?: PriceWhereUniqueInput
}

export interface ConferencePriceCreateInput {
  regular?: PriceCreateOneInput
  earlyBird?: PriceCreateOneInput
  lateBird?: PriceCreateOneInput
}

export interface ConferencePriceWhereInput {
  AND?: ConferencePriceWhereInput[] | ConferencePriceWhereInput
  OR?: ConferencePriceWhereInput[] | ConferencePriceWhereInput
  NOT?: ConferencePriceWhereInput[] | ConferencePriceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  regular?: PriceWhereInput
  earlyBird?: PriceWhereInput
  lateBird?: PriceWhereInput
  _MagicalBackRelation_ConferenceToConferencePrice_every?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToConferencePrice_some?: ConferenceWhereInput
  _MagicalBackRelation_ConferenceToConferencePrice_none?: ConferenceWhereInput
}

export interface LocationUpdateInput {
  venueName?: String
  continent?: String
  country?: String
  city?: String
  address?: String
  coordinates?: CoordinatesUpdateOneInput
}

export interface ConferencePriceWhereUniqueInput {
  id?: ID_Input
}

export interface ConferenceWhereInput {
  AND?: ConferenceWhereInput[] | ConferenceWhereInput
  OR?: ConferenceWhereInput[] | ConferenceWhereInput
  NOT?: ConferenceWhereInput[] | ConferenceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  startDate?: DateTime
  startDate_not?: DateTime
  startDate_in?: DateTime[] | DateTime
  startDate_not_in?: DateTime[] | DateTime
  startDate_lt?: DateTime
  startDate_lte?: DateTime
  startDate_gt?: DateTime
  startDate_gte?: DateTime
  endDate?: DateTime
  endDate_not?: DateTime
  endDate_in?: DateTime[] | DateTime
  endDate_not_in?: DateTime[] | DateTime
  endDate_lt?: DateTime
  endDate_lte?: DateTime
  endDate_gt?: DateTime
  endDate_gte?: DateTime
  publishStatus?: PUBLISH_STATUS
  publishStatus_not?: PUBLISH_STATUS
  publishStatus_in?: PUBLISH_STATUS[] | PUBLISH_STATUS
  publishStatus_not_in?: PUBLISH_STATUS[] | PUBLISH_STATUS
  tags_every?: TagWhereInput
  tags_some?: TagWhereInput
  tags_none?: TagWhereInput
  image?: ImageWhereInput
  location?: LocationWhereInput
  social?: SocialWhereInput
  price?: ConferencePriceWhereInput
}

export interface LocationSubscriptionWhereInput {
  AND?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  OR?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  NOT?: LocationSubscriptionWhereInput[] | LocationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocationWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface CurrencyPreviousValues {
  id: ID_Output
  name: String
  value: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Tag extends Node {
  id: ID_Output
  name: String
  slug: String
}

export interface Conference extends Node {
  id: ID_Output
  name: String
  description?: String
  tags?: Tag[]
  url: String
  image?: Image
  startDate: DateTime
  endDate: DateTime
  location: Location
  social?: Social
  publishStatus?: PUBLISH_STATUS
  price?: ConferencePrice
}

/*
 * A connection to a list of items.

 */
export interface CurrencyConnection {
  pageInfo: PageInfo
  edges: CurrencyEdge[]
  aggregate: AggregateCurrency
}

export interface AggregateCurrency {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PriceEdge {
  node: Price
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateImage {
  count: Int
}

export interface PricePreviousValues {
  id: ID_Output
  amount?: String
  expirationDate?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ImageConnection {
  pageInfo: PageInfo
  edges: ImageEdge[]
  aggregate: AggregateImage
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
 * An edge in a connection.

 */
export interface LocationEdge {
  node: Location
  cursor: String
}

export interface PriceSubscriptionPayload {
  mutation: MutationType
  node?: Price
  updatedFields?: String[]
  previousValues?: PricePreviousValues
}

export interface AggregateTag {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface TagConnection {
  pageInfo: PageInfo
  edges: TagEdge[]
  aggregate: AggregateTag
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  name: String
  createdAt: DateTime
  password: String
  role: USER_ROLE
}

/*
 * An edge in a connection.

 */
export interface SocialEdge {
  node: Social
  cursor: String
}

export interface Currency extends Node {
  id: ID_Output
  name: String
  value: String
}

export interface AggregateConferencePrice {
  count: Int
}

export interface ConferenceSubscriptionPayload {
  mutation: MutationType
  node?: Conference
  updatedFields?: String[]
  previousValues?: ConferencePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ConferencePriceConnection {
  pageInfo: PageInfo
  edges: ConferencePriceEdge[]
  aggregate: AggregateConferencePrice
}

export interface ConferencePreviousValues {
  id: ID_Output
  name: String
  description?: String
  url: String
  startDate: DateTime
  endDate: DateTime
  publishStatus?: PUBLISH_STATUS
}

/*
 * An edge in a connection.

 */
export interface CoordinatesEdge {
  node: Coordinates
  cursor: String
}

export interface Price extends Node {
  id: ID_Output
  amount?: String
  currency?: Currency
  expirationDate?: DateTime
}

export interface AggregateConference {
  count: Int
}

export interface CoordinatesSubscriptionPayload {
  mutation: MutationType
  node?: Coordinates
  updatedFields?: String[]
  previousValues?: CoordinatesPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ConferenceConnection {
  pageInfo: PageInfo
  edges: ConferenceEdge[]
  aggregate: AggregateConference
}

export interface CoordinatesPreviousValues {
  id: ID_Output
  latitude: Float
  longitude: Float
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface ConferencePrice extends Node {
  id: ID_Output
  regular?: Price
  earlyBird?: Price
  lateBird?: Price
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface ConferencePriceSubscriptionPayload {
  mutation: MutationType
  node?: ConferencePrice
  updatedFields?: String[]
  previousValues?: ConferencePricePreviousValues
}

export interface AggregatePrice {
  count: Int
}

export interface ConferencePricePreviousValues {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface ImageEdge {
  node: Image
  cursor: String
}

export interface Social extends Node {
  id: ID_Output
  facebook?: String
  twitter?: String
  instagram?: String
}

/*
 * A connection to a list of items.

 */
export interface LocationConnection {
  pageInfo: PageInfo
  edges: LocationEdge[]
  aggregate: AggregateLocation
}

export interface SocialSubscriptionPayload {
  mutation: MutationType
  node?: Social
  updatedFields?: String[]
  previousValues?: SocialPreviousValues
}

export interface AggregateSocial {
  count: Int
}

export interface SocialPreviousValues {
  id: ID_Output
  facebook?: String
  twitter?: String
  instagram?: String
}

/*
 * An edge in a connection.

 */
export interface ConferencePriceEdge {
  node: ConferencePrice
  cursor: String
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
  edges: CoordinatesEdge[]
  aggregate: AggregateCoordinates
}

export interface TagSubscriptionPayload {
  mutation: MutationType
  node?: Tag
  updatedFields?: String[]
  previousValues?: TagPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface TagPreviousValues {
  id: ID_Output
  name: String
  slug: String
}

/*
 * An edge in a connection.

 */
export interface CurrencyEdge {
  node: Currency
  cursor: String
}

export interface Location extends Node {
  id: ID_Output
  venueName?: String
  continent: String
  country: String
  city: String
  address: String
  coordinates: Coordinates
}

export interface AggregateLocation {
  count: Int
}

export interface LocationSubscriptionPayload {
  mutation: MutationType
  node?: Location
  updatedFields?: String[]
  previousValues?: LocationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface SocialConnection {
  pageInfo: PageInfo
  edges: SocialEdge[]
  aggregate: AggregateSocial
}

export interface ImagePreviousValues {
  id: ID_Output
  src: String
  alt?: String
}

export interface ImageSubscriptionPayload {
  mutation: MutationType
  node?: Image
  updatedFields?: String[]
  previousValues?: ImagePreviousValues
}

export interface Image extends Node {
  id: ID_Output
  src: String
  alt?: String
}

export interface LocationPreviousValues {
  id: ID_Output
  venueName?: String
  continent: String
  country: String
  city: String
  address: String
}

export interface AggregateCoordinates {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface TagEdge {
  node: Tag
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PriceConnection {
  pageInfo: PageInfo
  edges: PriceEdge[]
  aggregate: AggregatePrice
}

export interface CurrencySubscriptionPayload {
  mutation: MutationType
  node?: Currency
  updatedFields?: String[]
  previousValues?: CurrencyPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ConferenceEdge {
  node: Conference
  cursor: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

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
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string