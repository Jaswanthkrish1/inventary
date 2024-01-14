import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { User } from '../../user/user.entity';
import { FoodCategoryInput } from '../../foodcategory/foodcategory.input';
import { FoodCategory } from '../../foodcategory/foodcategory.entity';

@ObjectType()
export class OfferItem {
  @Field(() => ID)
  id?: number;

  @Field()
  name?: string;

  @Field({ nullable: true })
  image_data?: string;

  @Field({nullable: true})
  quantity?: number;

  @Field({nullable: true})
  selected?: boolean;

  @Field({nullable: true})
  category?: FoodCategory;

  @Field({defaultValue: true})
  status?: boolean;
}

@Entity('combo_offer')
@ObjectType()
@FilterableRelation('createdby', () => User, {
  nullable: true,
  disableRemove: true,
  disableUpdate: true,
})
@FilterableRelation('updatedby', () => User, {
  nullable: true,
  disableRemove: true,
  disableUpdate: true,
})
export class Offer {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @FilterableField()
  name: string;

  @Column({ type: 'json', nullable: true })
  @Field(() => [OfferItem], { nullable: true })
  items: OfferItem[];

  @CreateDateColumn()
  createddate: Date;

  @UpdateDateColumn()
  updateddate: Date;

  @Column({ default: true })
  @FilterableField()
  @Field()
  status?: boolean;

  @Column()
  @FilterableField()
  @Field()
  price?: number;

  @Column()
  @FilterableField()
  @Field()
  totalPrice?: number;

  @Column()
  @FilterableField()
  @Field()
  discount?: number;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'createdby' })
  @Field(() => User, { nullable: true })
  createdby?: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updatedby' })
  @Field(() => User, { nullable: true })
  updatedby?: User;

}
