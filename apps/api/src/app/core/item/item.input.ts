import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';
import { FoodCategoryInput } from '../foodcategory/foodcategory.input';
import { UserInput } from '../user/user.input';

@InputType({ isAbstract: true })
export abstract class ItemInput {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  image_data?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  categoryId?: number; // Assuming categoryId is the ID of the selected FoodCategory

  @Field({ nullable: true })
  @IsNumber()
  price?: number;

  @Field({ nullable: true })
  @IsString()
  offer?: string;
}

@InputType()
export class CreateItemInput {
  @Field(() => UserInput, { nullable: true })
  @IsNumber()
  createdby: UserInput;

  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  image_data?: string;

  @Field(() => FoodCategoryInput)
  @IsOptional()
  @IsNumber()
  category?: FoodCategoryInput; // Assuming categoryId is the ID of the selected FoodCategory

  @Field({ nullable: true })
  @IsNumber()
  price?: number;

  @Field({ nullable: true })
  @IsString()
  offer?: string;
}

@InputType()
export class UpdateItemInput {
  @Field(() => UserInput, { nullable: true })
  @IsNumber()
  updatedby: UserInput;

  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  image_data?: string;

  @Field(() => FoodCategoryInput, { nullable: true })
  @IsOptional()
  @IsNumber()
  categoryId?: FoodCategoryInput; // Assuming categoryId is the ID of the selected FoodCategory

  @Field({ nullable: true })
  @IsNumber()
  price?: number;

  @Field({ nullable: true })
  @IsString()
  offer?: string;
}
