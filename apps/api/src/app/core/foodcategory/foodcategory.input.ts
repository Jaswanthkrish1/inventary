import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class FoodCategoryInput {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsNumber()
  id?: number;
}
@InputType()
export class CreateFoodCategoryInputInput extends FoodCategoryInput {}

@InputType()
export class UpdateFoodCategoryInputInput extends FoodCategoryInput {
  @Field()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
