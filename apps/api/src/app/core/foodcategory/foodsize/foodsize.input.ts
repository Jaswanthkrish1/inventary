import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@InputType()
export class FoodSizeInput {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsNumber()
  id?: number;
}
@InputType()
export class CreateFoodSizeInput extends FoodSizeInput {}

@InputType()
export class UpdateFoodSizeInput extends FoodSizeInput {
  @Field({ nullable: true })
  @IsBoolean()
  isActive?: boolean;
}
