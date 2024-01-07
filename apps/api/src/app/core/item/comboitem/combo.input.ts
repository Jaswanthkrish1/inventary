// create-offer.input.ts
import { InputType, Field,  } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ItemInput } from '../item.input';
import { IsOptional, ValidateNested } from 'class-validator';

@InputType({ isAbstract: true })
export abstract class OfferInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => [ItemInput], { nullable: true })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ItemInput)
  items?: ItemInput[];
}

@InputType()
export class CreateOfferInput extends OfferInput {
}
