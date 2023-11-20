import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsBoolean, IsNumber } from 'class-validator';

@InputType({ isAbstract: true })
export abstract class UserInput {
  @Field({ nullable: true })
  @IsNumber()
  id?: number;

  @Field({ nullable: true })
  @IsString()
  role?: string;

  @Field({ defaultValue: true })
  @IsBoolean()
  status: boolean;

  @Field({ nullable: true })
  @IsString()
  createdBy?: string;

  @Field({ nullable: true })
  @IsString()
  updatedBy?: string;
}

@InputType()
export class CreateUserInput extends UserInput {}

@InputType()
export class UpdateUserInput extends UserInput {}
