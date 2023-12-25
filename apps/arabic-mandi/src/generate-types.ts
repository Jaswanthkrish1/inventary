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

export type AddCategory_IdsToFoodCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddItemsToItemEntityInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type CreateFoodCategoryInputInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateItemInput = {
  category?: InputMaybe<FoodCategoryInput>;
  createdby?: InputMaybe<UserInput>;
  image_data?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offer?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['Boolean']>;
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

export type CreateOneItemEntityInput = {
  /** The record to create */
  itemEntity: CreateItemInput;
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

export type DeleteOneItemEntityInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type FoodCategory = {
  __typename?: 'FoodCategory';
  category_ids: Array<ItemEntity>;
  id: Scalars['Float'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};


export type FoodCategoryCategory_IdsArgs = {
  filter?: ItemEntityFilter;
  sorting?: Array<ItemEntitySort>;
};

export type FoodCategoryAggregateGroupBy = {
  __typename?: 'FoodCategoryAggregateGroupBy';
  id?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodCategoryAvgAggregate = {
  __typename?: 'FoodCategoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type FoodCategoryCountAggregate = {
  __typename?: 'FoodCategoryCountAggregate';
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type FoodCategoryFilter = {
  and?: InputMaybe<Array<FoodCategoryFilter>>;
  category_id?: InputMaybe<FoodCategoryFilterItemEntityFilter>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FoodCategoryFilter>>;
};

export type FoodCategoryFilterItemEntityFilter = {
  and?: InputMaybe<Array<FoodCategoryFilterItemEntityFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  offer?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FoodCategoryFilterItemEntityFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
  type?: InputMaybe<BooleanFieldComparison>;
};

export type FoodCategoryInput = {
  id?: InputMaybe<Scalars['Float']>;
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
  IsActive = 'isActive',
  Name = 'name'
}

export type FoodCategorySumAggregate = {
  __typename?: 'FoodCategorySumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ItemEntity = {
  __typename?: 'ItemEntity';
  category?: Maybe<FoodCategory>;
  createdby?: Maybe<User>;
  id: Scalars['Float'];
  image_data: Scalars['String'];
  items: Array<FoodCategory>;
  name: Scalars['String'];
  offer: Scalars['String'];
  price: Scalars['Float'];
  status: Scalars['Boolean'];
  type: Scalars['Boolean'];
  updatedby?: Maybe<User>;
};


export type ItemEntityItemsArgs = {
  filter?: FoodCategoryFilter;
  sorting?: Array<FoodCategorySort>;
};

export type ItemEntityAggregateGroupBy = {
  __typename?: 'ItemEntityAggregateGroupBy';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['Boolean']>;
};

export type ItemEntityAvgAggregate = {
  __typename?: 'ItemEntityAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ItemEntityCountAggregate = {
  __typename?: 'ItemEntityCountAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  offer?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

export type ItemEntityDeleteResponse = {
  __typename?: 'ItemEntityDeleteResponse';
  category?: Maybe<FoodCategory>;
  createdby?: Maybe<User>;
  id?: Maybe<Scalars['Float']>;
  image_data?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['Boolean']>;
  updatedby?: Maybe<User>;
};

export type ItemEntityEdge = {
  __typename?: 'ItemEntityEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ItemEntity */
  node: ItemEntity;
};

export type ItemEntityFilter = {
  and?: InputMaybe<Array<ItemEntityFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  items?: InputMaybe<ItemEntityFilterFoodCategoryFilter>;
  name?: InputMaybe<StringFieldComparison>;
  offer?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
  type?: InputMaybe<BooleanFieldComparison>;
};

export type ItemEntityFilterFoodCategoryFilter = {
  and?: InputMaybe<Array<ItemEntityFilterFoodCategoryFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityFilterFoodCategoryFilter>>;
};

export type ItemEntityMaxAggregate = {
  __typename?: 'ItemEntityMaxAggregate';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['String']>;
};

export type ItemEntityMinAggregate = {
  __typename?: 'ItemEntityMinAggregate';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['String']>;
};

export type ItemEntitySort = {
  direction: SortDirection;
  field: ItemEntitySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ItemEntitySortFields {
  Id = 'id',
  Name = 'name',
  Offer = 'offer',
  Status = 'status',
  Type = 'type'
}

export type ItemEntitySumAggregate = {
  __typename?: 'ItemEntitySumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ItemEntityUpdateFilter = {
  and?: InputMaybe<Array<ItemEntityUpdateFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  offer?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityUpdateFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
  type?: InputMaybe<BooleanFieldComparison>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory_idsToFoodCategory: FoodCategory;
  addItemsToItemEntity: ItemEntity;
  createManyItemEntities: Array<ItemEntity>;
  createManyUsers: Array<User>;
  createOneFoodCategory: FoodCategory;
  createOneItemEntity: ItemEntity;
  createOneUser: User;
  deleteManyUsers: DeleteManyResponse;
  deleteOneItemEntity: ItemEntityDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  removeCategory_idsFromFoodCategory: FoodCategory;
  removeItemsFromItemEntity: ItemEntity;
  setCategory_idsOnFoodCategory: FoodCategory;
  setItemsOnItemEntity: ItemEntity;
  updateManyItemEntities: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneFoodCategory: FoodCategory;
  updateOneItemEntity: ItemEntity;
  updateOneUser: User;
};


export type MutationAddCategory_IdsToFoodCategoryArgs = {
  input: AddCategory_IdsToFoodCategoryInput;
};


export type MutationAddItemsToItemEntityArgs = {
  input: AddItemsToItemEntityInput;
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


export type MutationCreateOneItemEntityArgs = {
  input: CreateOneItemEntityInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneItemEntityArgs = {
  input: DeleteOneItemEntityInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationRemoveCategory_IdsFromFoodCategoryArgs = {
  input: RemoveCategory_IdsFromFoodCategoryInput;
};


export type MutationRemoveItemsFromItemEntityArgs = {
  input: RemoveItemsFromItemEntityInput;
};


export type MutationSetCategory_IdsOnFoodCategoryArgs = {
  input: SetCategory_IdsOnFoodCategoryInput;
};


export type MutationSetItemsOnItemEntityArgs = {
  input: SetItemsOnItemEntityInput;
};


export type MutationUpdateManyItemEntitiesArgs = {
  input: UpdateManyItemEntitiesInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneFoodCategoryArgs = {
  input: UpdateOneFoodCategoryInput;
};


export type MutationUpdateOneItemEntityArgs = {
  input: UpdateOneItemEntityInput;
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
  foodCategories: Array<FoodCategory>;
  foodCategory?: Maybe<FoodCategory>;
  getItems: Array<ItemEntity>;
  user?: Maybe<User>;
  users: UserConnection;
};


export type QueryFoodCategoriesArgs = {
  filter?: FoodCategoryFilter;
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

export type RemoveCategory_IdsFromFoodCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type RemoveItemsFromItemEntityInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetCategory_IdsOnFoodCategoryInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetItemsOnItemEntityInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
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
  id?: InputMaybe<Scalars['Float']>;
  isActive: Scalars['Boolean'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateItemInput = {
  category?: InputMaybe<FoodCategoryInput>;
  image_data?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offer?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['Boolean']>;
  updatedby?: InputMaybe<UserInput>;
};

export type UpdateManyItemEntitiesInput = {
  /** Filter used to find fields to update */
  filter: ItemEntityUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateItemInput;
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

export type UpdateOneItemEntityInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateItemInput;
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
  sorting?: InputMaybe<Array<FoodCategorySort> | FoodCategorySort>;
}>;


export type GetFoodCategoriesQuery = { __typename?: 'Query', foodCategories: Array<{ __typename?: 'FoodCategory', id: number, name: string }> };

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
    query GetFoodCategories($filter: FoodCategoryFilter, $sorting: [FoodCategorySort!]) {
  foodCategories(filter: $filter, sorting: $sorting) {
    id
    name
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