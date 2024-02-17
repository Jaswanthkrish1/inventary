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

  @Field({ nullable: true })
  category_image?: string;

  @Field({ nullable: true })
  @IsBoolean()
  isActive?: boolean;
}
@InputType()
export class CreateFoodCategoryInput extends FoodCategoryInput {}

@InputType()
export class UpdateFoodCategoryInput extends FoodCategoryInput {

}
