import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** Cursor for paging through collections */
  ConnectionCursor: any;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type CreateFoodCategoryInputInput = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

export type CreateItemInput = {
  category: FoodCategoryInput;
  createdby?: InputMaybe<UserInput>;
  image_data?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offer?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type CreateManyItemEntitiesInput = {
  /** Array of records to create */
  itemEntities: Array<CreateItemInput>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUserInput>;
};

export type CreateOneFoodCategoryInput = {
  /** The record to create */
  foodCategory: CreateFoodCategoryInputInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateUserInput = {
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  role?: InputMaybe<Scalars['String']>;
  status?: Scalars['Boolean'];
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']>;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type FoodCategory = {
  __typename?: 'FoodCategory';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type FoodCategoryAggregateGroupBy = {
  __typename?: 'FoodCategoryAggregateGroupBy';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodCategoryAvgAggregate = {
  __typename?: 'FoodCategoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type FoodCategoryConnection = {
  __typename?: 'FoodCategoryConnection';
  /** Array of edges. */
  edges: Array<FoodCategoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type FoodCategoryCountAggregate = {
  __typename?: 'FoodCategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type FoodCategoryEdge = {
  __typename?: 'FoodCategoryEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the FoodCategory */
  node: FoodCategory;
};

export type FoodCategoryFilter = {
  and?: InputMaybe<Array<FoodCategoryFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FoodCategoryFilter>>;
};

export type FoodCategoryInput = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

export type FoodCategoryMaxAggregate = {
  __typename?: 'FoodCategoryMaxAggregate';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodCategoryMinAggregate = {
  __typename?: 'FoodCategoryMinAggregate';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodCategorySort = {
  direction: SortDirection;
  field: FoodCategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FoodCategorySortFields {
  Id = 'id',
  Name = 'name'
}

export type FoodCategorySumAggregate = {
  __typename?: 'FoodCategorySumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ItemEntity = {
  __typename?: 'ItemEntity';
  category: FoodCategory;
  id: Scalars['Float'];
  status: Scalars['Boolean'];
};

export type ItemEntityAggregateGroupBy = {
  __typename?: 'ItemEntityAggregateGroupBy';
  category?: Maybe<FoodCategory>;
  id?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type ItemEntityAvgAggregate = {
  __typename?: 'ItemEntityAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ItemEntityCountAggregate = {
  __typename?: 'ItemEntityCountAggregate';
  category?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type ItemEntityEdge = {
  __typename?: 'ItemEntityEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ItemEntity */
  node: ItemEntity;
};

export type ItemEntityMaxAggregate = {
  __typename?: 'ItemEntityMaxAggregate';
  category?: Maybe<FoodCategory>;
  id?: Maybe<Scalars['Float']>;
};

export type ItemEntityMinAggregate = {
  __typename?: 'ItemEntityMinAggregate';
  category?: Maybe<FoodCategory>;
  id?: Maybe<Scalars['Float']>;
};

export type ItemEntitySumAggregate = {
  __typename?: 'ItemEntitySumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyItemEntities: Array<ItemEntity>;
  createManyUsers: Array<User>;
  createOneFoodCategory: FoodCategory;
  createOneUser: User;
  deleteManyUsers: DeleteManyResponse;
  deleteOneUser: UserDeleteResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneFoodCategory: FoodCategory;
  updateOneUser: User;
};


export type MutationCreateManyItemEntitiesArgs = {
  input: CreateManyItemEntitiesInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneFoodCategoryArgs = {
  input: CreateOneFoodCategoryInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneFoodCategoryArgs = {
  input: UpdateOneFoodCategoryInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type Query = {
  __typename?: 'Query';
  foodCategories: FoodCategoryConnection;
  foodCategory?: Maybe<FoodCategory>;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryFoodCategoriesArgs = {
  filter?: FoodCategoryFilter;
  paging?: CursorPaging;
  sorting?: Array<FoodCategorySort>;
};


export type QueryFoodCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
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
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type UpdateFoodCategoryInputInput = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateUserInput;
};

export type UpdateOneFoodCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFoodCategoryInputInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateUserInput = {
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  role?: InputMaybe<Scalars['String']>;
  status?: Scalars['Boolean'];
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  role: Scalars['String'];
  status: Scalars['Boolean'];
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  role?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  role?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
};

export type UserInput = {
  createdBy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  role?: InputMaybe<Scalars['String']>;
  status?: Scalars['Boolean'];
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['Float']>;
  role?: Maybe<Scalars['String']>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  Id = 'id',
  Role = 'role',
  Status = 'status'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  role?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
};

export type CreateManyItemEntitiesMutationVariables = Exact<{
  input: CreateManyItemEntitiesInput;
}>;


export type CreateManyItemEntitiesMutation = { __typename?: 'Mutation', createManyItemEntities: Array<{ __typename?: 'ItemEntity', id: number }> };

export type GetFoodCategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetFoodCategoryQuery = { __typename?: 'Query', foodCategory?: { __typename?: 'FoodCategory', id: number, name: string } | null };

export type CreateOneFoodCategoryMutationVariables = Exact<{
  input: CreateOneFoodCategoryInput;
}>;


export type CreateOneFoodCategoryMutation = { __typename?: 'Mutation', createOneFoodCategory: { __typename?: 'FoodCategory', id: number, name: string } };

export type GetFoodCategoriesQueryVariables = Exact<{
  filter?: InputMaybe<FoodCategoryFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<FoodCategorySort> | FoodCategorySort>;
}>;


export type GetFoodCategoriesQuery = { __typename?: 'Query', foodCategories: { __typename?: 'FoodCategoryConnection', edges: Array<{ __typename?: 'FoodCategoryEdge', node: { __typename?: 'FoodCategory', id: number, name: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: any | null } } };

export const CreateManyItemEntitiesDocument = gql`
    mutation CreateManyItemEntities($input: CreateManyItemEntitiesInput!) {
  createManyItemEntities(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateManyItemEntitiesGQL extends Apollo.Mutation<CreateManyItemEntitiesMutation, CreateManyItemEntitiesMutationVariables> {
    override document = CreateManyItemEntitiesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFoodCategoryDocument = gql`
    query GetFoodCategory($id: ID!) {
  foodCategory(id: $id) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFoodCategoryGQL extends Apollo.Query<GetFoodCategoryQuery, GetFoodCategoryQueryVariables> {
    override document = GetFoodCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOneFoodCategoryDocument = gql`
    mutation CreateOneFoodCategory($input: CreateOneFoodCategoryInput!) {
  createOneFoodCategory(input: $input) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOneFoodCategoryGQL extends Apollo.Mutation<CreateOneFoodCategoryMutation, CreateOneFoodCategoryMutationVariables> {
    override document = CreateOneFoodCategoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFoodCategoriesDocument = gql`
    query GetFoodCategories($filter: FoodCategoryFilter, $paging: CursorPaging, $sorting: [FoodCategorySort!]) {
  foodCategories(filter: $filter, paging: $paging, sorting: $sorting) {
    edges {
      node {
        id
        name
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFoodCategoriesGQL extends Apollo.Query<GetFoodCategoriesQuery, GetFoodCategoriesQueryVariables> {
    override document = GetFoodCategoriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }