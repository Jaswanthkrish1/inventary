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
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export type CreateFoodCategoryInput = {
  category_image?: InputMaybe<Scalars['String']>;
  clientView?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateFoodSizeInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateFoodTypeInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateItemInput = {
  category?: InputMaybe<FoodCategoryInput>;
  createdby?: InputMaybe<UserInput>;
  foodsize?: InputMaybe<FoodSizeInput>;
  foodtype?: InputMaybe<FoodTypeInput>;
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

export type CreateOfferInput = {
  createdby?: InputMaybe<UserInput>;
  discount?: InputMaybe<Scalars['Float']>;
  items: Array<OfferItemInput>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Boolean']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
};

export type CreateOneFoodCategoryInput = {
  /** The record to create */
  foodCategory: CreateFoodCategoryInput;
};

export type CreateOneFoodSizeInput = {
  /** The record to create */
  foodSize: CreateFoodSizeInput;
};

export type CreateOneFoodTypeInput = {
  /** The record to create */
  foodType: CreateFoodTypeInput;
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
  name?: InputMaybe<Scalars['String']>;
  profile_img?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updatedBy?: InputMaybe<Scalars['String']>;
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

export type DeleteOneFoodCategoryInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneFoodTypeInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneItemEntityInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOneOfferInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type FoodCategory = {
  __typename?: 'FoodCategory';
  category_image?: Maybe<Scalars['String']>;
  clientView: Scalars['Boolean'];
  id: Scalars['Float'];
  isActive: Scalars['Boolean'];
  items?: Maybe<ItemEntity>;
  name: Scalars['String'];
};

export type FoodCategoryAggregateGroupBy = {
  __typename?: 'FoodCategoryAggregateGroupBy';
  clientView?: Maybe<Scalars['Boolean']>;
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
  clientView?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type FoodCategoryDeleteResponse = {
  __typename?: 'FoodCategoryDeleteResponse';
  category_image?: Maybe<Scalars['String']>;
  clientView?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
  items?: Maybe<ItemEntity>;
  name?: Maybe<Scalars['String']>;
};

export type FoodCategoryFilter = {
  and?: InputMaybe<Array<FoodCategoryFilter>>;
  clientView?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  items?: InputMaybe<FoodCategoryFilterItemEntityFilter>;
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
  category_image?: InputMaybe<Scalars['String']>;
  clientView?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
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
  ClientView = 'clientView',
  Id = 'id',
  IsActive = 'isActive',
  Name = 'name'
}

export type FoodCategorySumAggregate = {
  __typename?: 'FoodCategorySumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type FoodSize = {
  __typename?: 'FoodSize';
  id: Scalars['Float'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type FoodSizeAggregateGroupBy = {
  __typename?: 'FoodSizeAggregateGroupBy';
  id?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodSizeAvgAggregate = {
  __typename?: 'FoodSizeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type FoodSizeCountAggregate = {
  __typename?: 'FoodSizeCountAggregate';
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type FoodSizeFilter = {
  and?: InputMaybe<Array<FoodSizeFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FoodSizeFilter>>;
};

export type FoodSizeInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FoodSizeMaxAggregate = {
  __typename?: 'FoodSizeMaxAggregate';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodSizeMinAggregate = {
  __typename?: 'FoodSizeMinAggregate';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodSizeSort = {
  direction: SortDirection;
  field: FoodSizeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FoodSizeSortFields {
  Id = 'id',
  IsActive = 'isActive',
  Name = 'name'
}

export type FoodSizeSumAggregate = {
  __typename?: 'FoodSizeSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type FoodType = {
  __typename?: 'FoodType';
  id: Scalars['Float'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type FoodTypeAggregateGroupBy = {
  __typename?: 'FoodTypeAggregateGroupBy';
  id?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodTypeAvgAggregate = {
  __typename?: 'FoodTypeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type FoodTypeCountAggregate = {
  __typename?: 'FoodTypeCountAggregate';
  id?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
};

export type FoodTypeDeleteResponse = {
  __typename?: 'FoodTypeDeleteResponse';
  id?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodTypeFilter = {
  and?: InputMaybe<Array<FoodTypeFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<FoodTypeFilter>>;
};

export type FoodTypeInput = {
  id?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FoodTypeMaxAggregate = {
  __typename?: 'FoodTypeMaxAggregate';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodTypeMinAggregate = {
  __typename?: 'FoodTypeMinAggregate';
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type FoodTypeSort = {
  direction: SortDirection;
  field: FoodTypeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FoodTypeSortFields {
  Id = 'id',
  IsActive = 'isActive',
  Name = 'name'
}

export type FoodTypeSumAggregate = {
  __typename?: 'FoodTypeSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ItemEntity = {
  __typename?: 'ItemEntity';
  category?: Maybe<FoodCategory>;
  createdby?: Maybe<User>;
  foodsize?: Maybe<FoodSize>;
  foodtype?: Maybe<FoodType>;
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
  foodsize?: Maybe<FoodSize>;
  foodtype?: Maybe<FoodType>;
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
  foodsize?: InputMaybe<ItemEntityFilterFoodSizeFilter>;
  foodtype?: InputMaybe<ItemEntityFilterFoodTypeFilter>;
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
  clientView?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityFilterFoodCategoryFilter>>;
};

export type ItemEntityFilterFoodSizeFilter = {
  and?: InputMaybe<Array<ItemEntityFilterFoodSizeFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityFilterFoodSizeFilter>>;
};

export type ItemEntityFilterFoodTypeFilter = {
  and?: InputMaybe<Array<ItemEntityFilterFoodTypeFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  isActive?: InputMaybe<BooleanFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ItemEntityFilterFoodTypeFilter>>;
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
  createOneFoodCategory: FoodCategory;
  createOneFoodSize: FoodSize;
  createOneFoodType: FoodType;
  createOneItemEntity: ItemEntity;
  createOneOffer: Offer;
  createOneUser: User;
  deleteManyItemEntities: DeleteManyResponse;
  deleteManyOffers: DeleteManyResponse;
  deleteOneFoodCategory: FoodCategoryDeleteResponse;
  deleteOneFoodType: FoodTypeDeleteResponse;
  deleteOneItemEntity: ItemEntityDeleteResponse;
  deleteOneOffer: OfferDeleteResponse;
  updateManyItemEntities: UpdateManyResponse;
  updateManyOffers: UpdateManyResponse;
  updateOneFoodCategory: FoodCategory;
  updateOneFoodSize: FoodSize;
  updateOneFoodType: FoodType;
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


export type MutationCreateOneFoodCategoryArgs = {
  input: CreateOneFoodCategoryInput;
};


export type MutationCreateOneFoodSizeArgs = {
  input: CreateOneFoodSizeInput;
};


export type MutationCreateOneFoodTypeArgs = {
  input: CreateOneFoodTypeInput;
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


export type MutationDeleteOneFoodCategoryArgs = {
  input: DeleteOneFoodCategoryInput;
};


export type MutationDeleteOneFoodTypeArgs = {
  input: DeleteOneFoodTypeInput;
};


export type MutationDeleteOneItemEntityArgs = {
  input: DeleteOneItemEntityInput;
};


export type MutationDeleteOneOfferArgs = {
  input: DeleteOneOfferInput;
};


export type MutationUpdateManyItemEntitiesArgs = {
  input: UpdateManyItemEntitiesInput;
};


export type MutationUpdateManyOffersArgs = {
  input: UpdateManyOffersInput;
};


export type MutationUpdateOneFoodCategoryArgs = {
  input: UpdateOneFoodCategoryInput;
};


export type MutationUpdateOneFoodSizeArgs = {
  input: UpdateOneFoodSizeInput;
};


export type MutationUpdateOneFoodTypeArgs = {
  input: UpdateOneFoodTypeInput;
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
  discount: Scalars['Float'];
  id: Scalars['ID'];
  items?: Maybe<Array<OfferItem>>;
  name: Scalars['String'];
  price: Scalars['Float'];
  status: Scalars['Boolean'];
  totalPrice: Scalars['Float'];
  updatedby?: Maybe<User>;
};

export type OfferAggregateGroupBy = {
  __typename?: 'OfferAggregateGroupBy';
  discount?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Boolean']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OfferAvgAggregate = {
  __typename?: 'OfferAvgAggregate';
  discount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OfferCountAggregate = {
  __typename?: 'OfferCountAggregate';
  discount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Int']>;
};

export type OfferDeleteFilter = {
  and?: InputMaybe<Array<OfferDeleteFilter>>;
  discount?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OfferDeleteFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
  totalPrice?: InputMaybe<NumberFieldComparison>;
};

export type OfferDeleteResponse = {
  __typename?: 'OfferDeleteResponse';
  createdby?: Maybe<User>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  items?: Maybe<Array<OfferItem>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Boolean']>;
  totalPrice?: Maybe<Scalars['Float']>;
  updatedby?: Maybe<User>;
};

export type OfferFilter = {
  and?: InputMaybe<Array<OfferFilter>>;
  createdby?: InputMaybe<OfferFilterUserFilter>;
  discount?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OfferFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
  totalPrice?: InputMaybe<NumberFieldComparison>;
  updatedby?: InputMaybe<OfferFilterUserFilter>;
};

export type OfferFilterUserFilter = {
  and?: InputMaybe<Array<OfferFilterUserFilter>>;
  id?: InputMaybe<NumberFieldComparison>;
  or?: InputMaybe<Array<OfferFilterUserFilter>>;
  role?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
};

export type OfferItem = {
  __typename?: 'OfferItem';
  category?: Maybe<FoodCategory>;
  id: Scalars['ID'];
  image_data?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  quantity?: Maybe<Scalars['Float']>;
  selected?: Maybe<Scalars['Boolean']>;
  status: Scalars['Boolean'];
};

export type OfferItemInput = {
  category?: InputMaybe<FoodCategoryInput>;
  id?: InputMaybe<Scalars['Float']>;
  image_data?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Float']>;
  selected?: InputMaybe<Scalars['Boolean']>;
};

export type OfferMaxAggregate = {
  __typename?: 'OfferMaxAggregate';
  discount?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OfferMinAggregate = {
  __typename?: 'OfferMinAggregate';
  discount?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OfferSort = {
  direction: SortDirection;
  field: OfferSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OfferSortFields {
  Discount = 'discount',
  Name = 'name',
  Price = 'price',
  Status = 'status',
  TotalPrice = 'totalPrice'
}

export type OfferSumAggregate = {
  __typename?: 'OfferSumAggregate';
  discount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
};

export type OfferUpdateFilter = {
  and?: InputMaybe<Array<OfferUpdateFilter>>;
  discount?: InputMaybe<NumberFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OfferUpdateFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<BooleanFieldComparison>;
  totalPrice?: InputMaybe<NumberFieldComparison>;
};

export type Query = {
  __typename?: 'Query';
  foodCategories: Array<FoodCategory>;
  foodCategory?: Maybe<FoodCategory>;
  foodSize?: Maybe<FoodSize>;
  foodSizes: Array<FoodSize>;
  foodType?: Maybe<FoodType>;
  foodTypes: Array<FoodType>;
  getItems: Array<ItemEntity>;
  itemEntities: Array<ItemEntity>;
  itemEntity?: Maybe<ItemEntity>;
  offer?: Maybe<Offer>;
  offers: Array<Offer>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryFoodCategoriesArgs = {
  filter?: FoodCategoryFilter;
  sorting?: Array<FoodCategorySort>;
};


export type QueryFoodCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryFoodSizeArgs = {
  id: Scalars['ID'];
};


export type QueryFoodSizesArgs = {
  filter?: FoodSizeFilter;
  sorting?: Array<FoodSizeSort>;
};


export type QueryFoodTypeArgs = {
  id: Scalars['ID'];
};


export type QueryFoodTypesArgs = {
  filter?: FoodTypeFilter;
  sorting?: Array<FoodTypeSort>;
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

export type UpdateFoodCategoryInput = {
  category_image?: InputMaybe<Scalars['String']>;
  clientView?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFoodSizeInput = {
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFoodTypeInput = {
  id?: InputMaybe<Scalars['Float']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateItemInput = {
  category?: InputMaybe<FoodCategoryInput>;
  foodsize?: InputMaybe<FoodSizeInput>;
  foodtype?: InputMaybe<FoodTypeInput>;
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

export type UpdateOfferInput = {
  discount?: InputMaybe<Scalars['Float']>;
  items?: InputMaybe<Array<OfferItemInput>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['Boolean']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  updatedby?: InputMaybe<UserInput>;
};

export type UpdateOneFoodCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFoodCategoryInput;
};

export type UpdateOneFoodSizeInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFoodSizeInput;
};

export type UpdateOneFoodTypeInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateFoodTypeInput;
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
  name?: InputMaybe<Scalars['String']>;
  profile_img?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  status?: Scalars['Boolean'];
  updatedBy?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  profile_img?: Maybe<Scalars['String']>;
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

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
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
  name?: InputMaybe<Scalars['String']>;
  profile_img?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
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

export type UpdateOneFoodCategoryClientMutationVariables = Exact<{
  input: UpdateOneFoodCategoryInput;
}>;


export type UpdateOneFoodCategoryClientMutation = { __typename?: 'Mutation', updateOneFoodCategory: { __typename?: 'FoodCategory', id: number, category_image?: string | null, isActive: boolean, name: string, clientView: boolean } };

export type GetFoodCategoriesClientQueryVariables = Exact<{
  filter?: InputMaybe<FoodCategoryFilter>;
  sorting?: InputMaybe<Array<FoodCategorySort> | FoodCategorySort>;
}>;


export type GetFoodCategoriesClientQuery = { __typename?: 'Query', foodCategories: Array<{ __typename?: 'FoodCategory', id: number, name: string, category_image?: string | null, isActive: boolean, clientView: boolean, items?: { __typename?: 'ItemEntity', id: number, name: string, offer: string, price: number, type: boolean, status: boolean, image_data?: string | null } | null }> };

export type GetItemEntitiesClientQueryVariables = Exact<{
  filter: ItemEntityFilter;
  sorting?: InputMaybe<Array<ItemEntitySort> | ItemEntitySort>;
}>;


export type GetItemEntitiesClientQuery = { __typename?: 'Query', itemEntities: Array<{ __typename?: 'ItemEntity', name: string, offer: string, price: number, type: boolean, status: boolean, image_data?: string | null, category?: { __typename?: 'FoodCategory', id: number, isActive: boolean, name: string, category_image?: string | null, clientView: boolean } | null, foodtype?: { __typename?: 'FoodType', name: string } | null, foodsize?: { __typename?: 'FoodSize', name: string } | null }> };

export type GetItemEntitiesClientViewQueryVariables = Exact<{
  filter: ItemEntityFilter;
  sorting?: InputMaybe<Array<ItemEntitySort> | ItemEntitySort>;
}>;


export type GetItemEntitiesClientViewQuery = { __typename?: 'Query', itemEntities: Array<{ __typename?: 'ItemEntity', name: string, offer: string, price: number, type: boolean, status: boolean, image_data?: string | null, category?: { __typename?: 'FoodCategory', name: string, isActive: boolean } | null, foodtype?: { __typename?: 'FoodType', name: string } | null, foodsize?: { __typename?: 'FoodSize', name: string } | null }> };

export type GetAlloffersQueryVariables = Exact<{
  filter?: OfferFilter;
  sorting?: Array<OfferSort> | OfferSort;
}>;


export type GetAlloffersQuery = { __typename?: 'Query', offers: Array<{ __typename?: 'Offer', id: string, name: string, discount: number, status: boolean, totalPrice: number, price: number, items?: Array<{ __typename?: 'OfferItem', quantity?: number | null, name: string, id: string, selected?: boolean | null, status: boolean, category?: { __typename?: 'FoodCategory', id: number, name: string } | null }> | null, createdby?: { __typename?: 'User', id: number } | null, updatedby?: { __typename?: 'User', id: number } | null }> };

export const UpdateOneFoodCategoryClientDocument = gql`
    mutation updateOneFoodCategoryClient($input: UpdateOneFoodCategoryInput!) {
  updateOneFoodCategory(input: $input) {
    id
    category_image
    isActive
    name
    clientView
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOneFoodCategoryClientGQL extends Apollo.Mutation<UpdateOneFoodCategoryClientMutation, UpdateOneFoodCategoryClientMutationVariables> {
    document = UpdateOneFoodCategoryClientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetFoodCategoriesClientDocument = gql`
    query GetFoodCategoriesClient($filter: FoodCategoryFilter, $sorting: [FoodCategorySort!]) {
  foodCategories(filter: $filter, sorting: $sorting) {
    id
    name
    category_image
    isActive
    clientView
    items {
      id
      name
      offer
      price
      type
      status
      image_data
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetFoodCategoriesClientGQL extends Apollo.Query<GetFoodCategoriesClientQuery, GetFoodCategoriesClientQueryVariables> {
    document = GetFoodCategoriesClientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetItemEntitiesClientDocument = gql`
    query GetItemEntitiesClient($filter: ItemEntityFilter!, $sorting: [ItemEntitySort!]) {
  itemEntities(filter: $filter, sorting: $sorting) {
    name
    offer
    price
    type
    status
    image_data
    category {
      id
      isActive
      name
      category_image
      clientView
    }
    foodtype {
      name
    }
    foodsize {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetItemEntitiesClientGQL extends Apollo.Query<GetItemEntitiesClientQuery, GetItemEntitiesClientQueryVariables> {
    document = GetItemEntitiesClientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetItemEntitiesClientViewDocument = gql`
    query GetItemEntitiesClientView($filter: ItemEntityFilter!, $sorting: [ItemEntitySort!]) {
  itemEntities(filter: $filter, sorting: $sorting) {
    name
    offer
    price
    type
    status
    image_data
    category {
      name
      isActive
    }
    foodtype {
      name
    }
    foodsize {
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetItemEntitiesClientViewGQL extends Apollo.Query<GetItemEntitiesClientViewQuery, GetItemEntitiesClientViewQueryVariables> {
    document = GetItemEntitiesClientViewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAlloffersDocument = gql`
    query GetAlloffers($filter: OfferFilter! = {}, $sorting: [OfferSort!]! = []) {
  offers(filter: $filter, sorting: $sorting) {
    id
    name
    discount
    status
    totalPrice
    price
    items {
      quantity
      name
      id
      selected
      status
      category {
        id
        name
      }
    }
    createdby {
      id
    }
    updatedby {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAlloffersGQL extends Apollo.Query<GetAlloffersQuery, GetAlloffersQueryVariables> {
    document = GetAlloffersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }