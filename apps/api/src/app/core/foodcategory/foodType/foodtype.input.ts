import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class FoodTypeInput {
  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsNumber()
  id?: number;

}
@InputType()
export class CreateFoodTypeInput extends FoodTypeInput {}

@InputType()
export class UpdateFoodTypeInput extends FoodTypeInput {
  @Field({ nullable: true })
  @IsBoolean()
  isActive?: boolean;
}
