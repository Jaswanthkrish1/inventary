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

export type CreateManyOffersInput = {
  /** Array of records to create */
  offers: Array<CreateOfferInput>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<CreateUserInput>;
};

export type CreateOfferInput = {
  createdby?: InputMaybe<UserInput>;
  items: Array<OfferItemInput>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Boolean']>;
};

export type CreateOneFoodCategoryInput = {
  /** The record to create */
  foodCategory: CreateFoodCategoryInputInput;
};

export type CreateOneItemEntityInput = {
  /** The record to create */
  itemEntity: CreateItemInput;
};

export type CreateOneOfferInput = {
  /** The record to create */
  offer: CreateOfferInput;
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

export type DeleteManyItemEntitiesInput = {
  /** Filter to find records to delete */
  filter: ItemEntityDeleteFilter;
};

export type DeleteManyOffersInput = {
  /** Filter to find records to delete */
  filter: OfferDeleteFilter;
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

export type DeleteOneOfferInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type FoodCategory = {
  __typename?: 'FoodCategory';
  id: Scalars['Float'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
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
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FoodCategoryFilter>>;
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
  image_data?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  offer: Scalars['String'];
  price: Scalars['Float'];
  status: Scalars['Boolean'];
  type: Scalars['Boolean'];
  updatedby?: Maybe<User>;
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

export type ItemEntityDeleteFilter = {
  and?: InputMaybe<Array<ItemEntityDeleteFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  offer?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityDeleteFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
  type?: InputMaybe<BooleanFieldComparison>;
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

export type ItemEntityFilter = {
  and?: InputMaybe<Array<ItemEntityFilter>>;
  category?: InputMaybe<ItemEntityFilterFoodCategoryFilter>;
  createdby?: InputMaybe<ItemEntityFilterUserFilter>;
  id?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  offer?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
  type?: InputMaybe<BooleanFieldComparison>;
  updatedby?: InputMaybe<ItemEntityFilterUserFilter>;
};

export type ItemEntityFilterFoodCategoryFilter = {
  and?: InputMaybe<Array<ItemEntityFilterFoodCategoryFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityFilterFoodCategoryFilter>>;
};

export type ItemEntityFilterUserFilter = {
  and?: InputMaybe<Array<ItemEntityFilterUserFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<ItemEntityFilterUserFilter>>;
  role?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
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
  createManyItemEntities: Array<ItemEntity>;
  createManyOffers: Array<Offer>;
  createManyUsers: Array<User>;
  createOneFoodCategory: FoodCategory;
  createOneItemEntity: ItemEntity;
  createOneOffer: Offer;
  createOneUser: User;
  deleteManyItemEntities: DeleteManyResponse;
  deleteManyOffers: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneItemEntity: ItemEntityDeleteResponse;
  deleteOneOffer: OfferDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  updateManyItemEntities: UpdateManyResponse;
  updateManyOffers: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneFoodCategory: FoodCategory;
  updateOneItemEntity: ItemEntity;
  updateOneOffer: Offer;
  updateOneUser: User;
};


export type MutationCreateManyItemEntitiesArgs = {
  input: CreateManyItemEntitiesInput;
};


export type MutationCreateManyOffersArgs = {
  input: CreateManyOffersInput;
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


export type MutationCreateOneOfferArgs = {
  input: CreateOneOfferInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManyItemEntitiesArgs = {
  input: DeleteManyItemEntitiesInput;
};


export type MutationDeleteManyOffersArgs = {
  input: DeleteManyOffersInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneItemEntityArgs = {
  input: DeleteOneItemEntityInput;
};


export type MutationDeleteOneOfferArgs = {
  input: DeleteOneOfferInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationUpdateManyItemEntitiesArgs = {
  input: UpdateManyItemEntitiesInput;
};


export type MutationUpdateManyOffersArgs = {
  input: UpdateManyOffersInput;
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


export type MutationUpdateOneOfferArgs = {
  input: UpdateOneOfferInput;
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

export type Offer = {
  __typename?: 'Offer';
  createdby?: Maybe<User>;
  id: Scalars['Float'];
  items?: Maybe<Array<OfferItem>>;
  name: Scalars['String'];
  status: Scalars['Boolean'];
  updatedby?: Maybe<User>;
};

export type OfferAggregateGroupBy = {
  __typename?: 'OfferAggregateGroupBy';
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
};

export type OfferCountAggregate = {
  __typename?: 'OfferCountAggregate';
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
};

export type OfferDeleteFilter = {
  and?: InputMaybe<Array<OfferDeleteFilter>>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OfferDeleteFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
};

export type OfferDeleteResponse = {
  __typename?: 'OfferDeleteResponse';
  createdby?: Maybe<User>;
  id?: Maybe<Scalars['Float']>;
  items?: Maybe<Array<OfferItem>>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  updatedby?: Maybe<User>;
};

export type OfferFilter = {
  and?: InputMaybe<Array<OfferFilter>>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OfferFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
};

export type OfferItem = {
  __typename?: 'OfferItem';
  id: Scalars['ID'];
  image_data?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type OfferItemInput = {
  id?: InputMaybe<Scalars['Float']>;
  image_data?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type OfferMaxAggregate = {
  __typename?: 'OfferMaxAggregate';
  name?: Maybe<Scalars['String']>;
};

export type OfferMinAggregate = {
  __typename?: 'OfferMinAggregate';
  name?: Maybe<Scalars['String']>;
};

export type OfferSort = {
  direction: SortDirection;
  field: OfferSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OfferSortFields {
  Name = 'name',
  Status = 'status'
}

export type OfferUpdateFilter = {
  and?: InputMaybe<Array<OfferUpdateFilter>>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OfferUpdateFilter>>;
  status?: InputMaybe<BooleanFieldComparison>;
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
  itemEntities: Array<ItemEntity>;
  itemEntity?: Maybe<ItemEntity>;
  offer?: Maybe<Offer>;
  offers: Array<Offer>;
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


export type QueryItemEntitiesArgs = {
  filter?: ItemEntityFilter;
  sorting?: Array<ItemEntitySort>;
};


export type QueryItemEntityArgs = {
  id: Scalars['ID'];
};


export type QueryOfferArgs = {
  id: Scalars['ID'];
};


export type QueryOffersArgs = {
  filter?: OfferFilter;
  sorting?: Array<OfferSort>;
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
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateItemInput = {
  category?: InputMaybe<FoodCategoryInput>;
  image_data?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  offer?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['Boolean']>;
  updatedby?: InputMaybe<UserInput>;
};

export type UpdateManyItemEntitiesInput = {
  /** Filter used to find fields to update */
  filter: ItemEntityUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateItemInput;
};

export type UpdateManyOffersInput = {
  /** Filter used to find fields to update */
  filter: OfferUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateOfferInput;
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

export type UpdateOfferInput = {
  status?: InputMaybe<Scalars['Boolean']>;
  updatedby?: InputMaybe<UserInput>;
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

export type UpdateOneOfferInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateOfferInput;
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

export type GetItemEntitiesQueryVariables = Exact<{
  filter?: ItemEntityFilter;
  sorting?: InputMaybe<Array<ItemEntitySort> | ItemEntitySort>;
}>;


export type GetItemEntitiesQuery = { __typename?: 'Query', itemEntities: Array<{ __typename?: 'ItemEntity', id: number, name: string, status: boolean, category?: { __typename?: 'FoodCategory', id: number, name: string } | null }> };

export type CreateOfferMutationVariables = Exact<{
  input: CreateManyOffersInput;
}>;


export type CreateOfferMutation = { __typename?: 'Mutation', createManyOffers: Array<{ __typename?: 'Offer', name: string, id: number }> };

export type CreateManyItemEntitiesMutationVariables = Exact<{
  input: CreateManyItemEntitiesInput;
}>;


export type CreateManyItemEntitiesMutation = { __typename?: 'Mutation', createManyItemEntities: Array<{ __typename?: 'ItemEntity', id: number }> };

export type UpdateItemEntityMutationVariables = Exact<{
  input: UpdateOneItemEntityInput;
}>;


export type UpdateItemEntityMutation = { __typename?: 'Mutation', updateOneItemEntity: { __typename?: 'ItemEntity', id: number, name: string, image_data?: string | null, offer: string, price: number, status: boolean, type: boolean, category?: { __typename?: 'FoodCategory', id: number, name: string } | null, updatedby?: { __typename?: 'User', id: number } | null } };

export type DeleteOneItemEntityMutationVariables = Exact<{
  input: DeleteOneItemEntityInput;
}>;


export type DeleteOneItemEntityMutation = { __typename?: 'Mutation', deleteOneItemEntity: { __typename?: 'ItemEntityDeleteResponse', id?: number | null } };

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

export const GetItemEntitiesDocument = gql`
    query GetItemEntities($filter: ItemEntityFilter! = {}, $sorting: [ItemEntitySort!]) {
  itemEntities(filter: $filter, sorting: $sorting) {
    id
    name
    status
    category {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetItemEntitiesGQL extends Apollo.Query<GetItemEntitiesQuery, GetItemEntitiesQueryVariables> {
    override document = GetItemEntitiesDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOfferDocument = gql`
    mutation CreateOffer($input: CreateManyOffersInput!) {
  createManyOffers(input: $input) {
    name
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOfferGQL extends Apollo.Mutation<CreateOfferMutation, CreateOfferMutationVariables> {
    override document = CreateOfferDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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
export const UpdateItemEntityDocument = gql`
    mutation UpdateItemEntity($input: UpdateOneItemEntityInput!) {
  updateOneItemEntity(input: $input) {
    id
    name
    image_data
    offer
    price
    category {
      id
      name
    }
    status
    type
    updatedby {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateItemEntityGQL extends Apollo.Mutation<UpdateItemEntityMutation, UpdateItemEntityMutationVariables> {
    override document = UpdateItemEntityDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteOneItemEntityDocument = gql`
    mutation DeleteOneItemEntity($input: DeleteOneItemEntityInput!) {
  deleteOneItemEntity(input: $input) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOneItemEntityGQL extends Apollo.Mutation<DeleteOneItemEntityMutation, DeleteOneItemEntityMutationVariables> {
    override document = DeleteOneItemEntityDocument;

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
