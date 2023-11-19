import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class FoodCategoryInput {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field()
  @IsNumber()
  id?: number;
}
@InputType()
export class CreateFoodCategoryInputInput extends FoodCategoryInput {}

@InputType()
export class UpdateFoodCategoryInputInput extends FoodCategoryInput {}
