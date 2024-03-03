import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { FoodCategoryInput } from '../foodcategory/foodcategory.input';
import { UserInput } from '../user/user.input';
import { FoodTypeInput } from '../foodcategory/foodType/foodtype.input';
import { FoodSizeInput } from '../foodcategory/foodsize/foodsize.input';

@InputType({ isAbstract: true })
export abstract class ItemInput {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  image_data?: string;

  @Field(() => FoodCategoryInput, { nullable: true })
  @IsOptional()
  @IsNumber()
  category?: FoodCategoryInput; // Assuming categoryId is the ID of the selected FoodCategory

  @Field({ nullable: true })
  @IsNumber()
  price?: number;

  @Field({ nullable: true })
  @IsString()
  offer?: string;

  @Field({ nullable: true })
  @IsBoolean()
  type?: boolean;

  @Field(() => FoodTypeInput, { nullable: true })
  @IsOptional()
  @IsNumber()
  foodtype?: FoodTypeInput;
  
  @Field(() => FoodSizeInput, { nullable: true })
  @IsOptional()
  @IsNumber()
  foodsize?: FoodSizeInput;

}

@InputType()
export class CreateItemInput extends ItemInput {
  @Field(() => UserInput, { nullable: true })
  @IsNumber()
  createdby: UserInput;
}

@InputType()
export class UpdateItemInput extends ItemInput {
  @Field(() => UserInput, { nullable: true })
  @IsNumber()
  updatedby: UserInput;

  @Field({ nullable: true })
  @IsBoolean()
  status?: boolean;
}

