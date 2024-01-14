// create-offer.input.ts
import { InputType, Field, } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString} from 'class-validator';
import { UserInput } from '../../user/user.input';
import { FoodCategory } from '../../foodcategory/foodcategory.entity';
import { FoodCategoryInput } from '../../foodcategory/foodcategory.input';

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

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  discount?: number;

  @Field({ nullable: true })
  totalPrice?: number;
}

@InputType()
export class UpdateOfferInput  {
  @Field(() => UserInput, { nullable: true })
  @IsNumber()
  updatedby: UserInput;


  @Field({ nullable: true })
  name?: string;

  @Field(() => [OfferItemInput], { nullable: true })
  items?: OfferItemInput[];

  @Field({ nullable: true })
  @IsBoolean()
  status?: boolean;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  discount?: number;

  @Field({ nullable: true })
  totalPrice?: number;
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

  @Field({nullable: true})
  quantity?: number;

  @Field({nullable: true})
  selected?: boolean;

  @Field({nullable: true})
  category?: FoodCategoryInput ;
}
