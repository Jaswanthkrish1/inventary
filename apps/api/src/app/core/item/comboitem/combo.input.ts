// create-offer.input.ts
import { InputType, Field, } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString} from 'class-validator';
import { UserInput } from '../../user/user.input';

@InputType({ isAbstract: true })
export class CreateOfferInput  {
  @Field({ nullable: true })
  name?: string;

  @Field(() => [OfferItemInput])
  items?: OfferItemInput[];

  @Field(() => UserInput, { nullable: true })
  @IsNumber()
  createdby?: UserInput;

  @Field({ nullable: true })
  @IsBoolean()
  status?: boolean;
}

@InputType()
export class UpdateOfferInput  {
  @Field(() => UserInput, { nullable: true })
  @IsNumber()
  updatedby: UserInput;

  @Field({ nullable: true })
  @IsBoolean()
  status?: boolean;
}

@InputType()
export class OfferItemInput {
  
  @Field({ nullable: true })
  @IsNumber()
  id?: number;

  @Field({ nullable: true })
  @IsString()
  name?: string;

  @Field({ nullable: true })
  image_data?: string;
}
