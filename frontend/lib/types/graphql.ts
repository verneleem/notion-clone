export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
};














export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export enum UserOrderable {
  Email = 'email',
  Name = 'name',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type UserRef = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<Maybe<PageRef>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export type AddUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  pages?: Maybe<Array<Maybe<PageRef>>>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type UserFilter = {
  email?: Maybe<StringHashFilter>;
  has?: Maybe<UserHasFilter>;
  and?: Maybe<Array<Maybe<UserFilter>>>;
  or?: Maybe<Array<Maybe<UserFilter>>>;
  not?: Maybe<UserFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPage?: Maybe<AddPagePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  deletePage?: Maybe<DeletePagePayload>;
  addUser?: Maybe<AddUserPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
};


export type MutationAddPageArgs = {
  input: Array<AddPageInput>;
};


export type MutationUpdatePageArgs = {
  input: UpdatePageInput;
};


export type MutationDeletePageArgs = {
  filter: PageFilter;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export type AddPageInput = {
  blocks?: Maybe<Scalars['String']>;
  creator?: Maybe<UserRef>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UpdatePageInput = {
  filter: PageFilter;
  set?: Maybe<PagePatch>;
  remove?: Maybe<PagePatch>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  set?: Maybe<UserPatch>;
  remove?: Maybe<UserPatch>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export type PagePatch = {
  blocks?: Maybe<Scalars['String']>;
  creator?: Maybe<UserRef>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  name: Scalars['String'];
  pages?: Maybe<Array<Maybe<Page>>>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  pagesAggregate?: Maybe<PageAggregateResult>;
};


export type UserPagesArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type UserPagesAggregateArgs = {
  filter?: Maybe<PageFilter>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum PageOrderable {
  Blocks = 'blocks',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type PageOrder = {
  asc?: Maybe<PageOrderable>;
  desc?: Maybe<PageOrderable>;
  then?: Maybe<PageOrder>;
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type Query = {
  __typename?: 'Query';
  getPage?: Maybe<Page>;
  queryPage?: Maybe<Array<Maybe<Page>>>;
  aggregatePage?: Maybe<PageAggregateResult>;
  getUser?: Maybe<User>;
  queryUser?: Maybe<Array<Maybe<User>>>;
  aggregateUser?: Maybe<UserAggregateResult>;
};


export type QueryGetPageArgs = {
  id: Scalars['ID'];
};


export type QueryQueryPageArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregatePageArgs = {
  filter?: Maybe<PageFilter>;
};


export type QueryGetUserArgs = {
  email: Scalars['String'];
};


export type QueryQueryUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateUserArgs = {
  filter?: Maybe<UserFilter>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']>;
  emailMin?: Maybe<Scalars['String']>;
  emailMax?: Maybe<Scalars['String']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  createdAtMin?: Maybe<Scalars['DateTime']>;
  createdAtMax?: Maybe<Scalars['DateTime']>;
  updatedAtMin?: Maybe<Scalars['DateTime']>;
  updatedAtMax?: Maybe<Scalars['DateTime']>;
};

export type UserPatch = {
  name?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<Maybe<PageRef>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  page?: Maybe<Array<Maybe<Page>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeletePagePayloadPageArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export enum PageHasFilter {
  Blocks = 'blocks',
  Creator = 'creator',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  user?: Maybe<Array<Maybe<User>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: Maybe<UserFilter>;
  order?: Maybe<UserOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  page?: Maybe<Array<Maybe<Page>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdatePagePayloadPageArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PageAggregateResult = {
  __typename?: 'PageAggregateResult';
  count?: Maybe<Scalars['Int']>;
  blocksMin?: Maybe<Scalars['String']>;
  blocksMax?: Maybe<Scalars['String']>;
  createdAtMin?: Maybe<Scalars['DateTime']>;
  createdAtMax?: Maybe<Scalars['DateTime']>;
  updatedAtMin?: Maybe<Scalars['DateTime']>;
  updatedAtMax?: Maybe<Scalars['DateTime']>;
};

export type PageFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<PageHasFilter>;
  and?: Maybe<Array<Maybe<PageFilter>>>;
  or?: Maybe<Array<Maybe<PageFilter>>>;
  not?: Maybe<PageFilter>;
};


export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type AddPagePayload = {
  __typename?: 'AddPagePayload';
  page?: Maybe<Array<Maybe<Page>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddPagePayloadPageArgs = {
  filter?: Maybe<PageFilter>;
  order?: Maybe<PageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UserOrder = {
  asc?: Maybe<UserOrderable>;
  desc?: Maybe<UserOrderable>;
  then?: Maybe<UserOrder>;
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export enum UserHasFilter {
  Email = 'email',
  Name = 'name',
  Pages = 'pages',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

export type PageRef = {
  id?: Maybe<Scalars['ID']>;
  blocks?: Maybe<Scalars['String']>;
  creator?: Maybe<UserRef>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  blocks?: Maybe<Scalars['String']>;
  creator?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageCreatorArgs = {
  filter?: Maybe<UserFilter>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};
