import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Cursor for paging through collections */
  ConnectionCursor: { input: any; output: any; }
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUserInput>;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateUserInput = {
  createdBy?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: Scalars['Boolean']['input'];
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyUsers: Array<User>;
  createOneUser: User;
  deleteManyUsers: DeleteManyResponse;
  updateManyUsers: UpdateManyResponse;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type Query = {
  __typename?: 'Query';
  users: UserConnection;
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: CursorPaging;
  sorting?: Array<UserSort>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output'];
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserInput;
};

export type UpdateUserInput = {
  createdBy?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: Scalars['Boolean']['input'];
  updatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  role: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  role?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  role?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  or?: InputMaybe<Array<UserFilter>>;
  role?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  role?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  role?: Maybe<Scalars['String']['output']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  Role = 'role',
  Status = 'status'
}

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  role?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
};
