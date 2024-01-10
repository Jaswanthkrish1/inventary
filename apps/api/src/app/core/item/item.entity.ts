import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  Index,
  ManyToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { FoodCategory } from '../foodcategory/foodcategory.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  FilterableField, FilterableRelation,
} from '@nestjs-query/query-graphql';
import { Offer } from './comboitem/combo.entity';
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
@FilterableRelation('category', () => FoodCategory, {
  nullable: true,
  disableRemove: true,
  disableUpdate: true,
})
@Entity('item_entity')
@ObjectType()
export class ItemEntity {
  @PrimaryGeneratedColumn()
  @FilterableField()
  @Field()
  id?: number;

  @Column({ nullable: true })
  @FilterableField()
  @Field()
  name?: string;

  @Column({ type: 'text', nullable: true})
  @Field({ nullable: true })
  image_data?: string;

  @Column({ nullable: true })
  image_?: string;

  @ManyToOne(() => FoodCategory, { nullable: true })
  @JoinColumn({ name: 'category' })
  @Field(() => FoodCategory, { nullable: true })
  category?: FoodCategory;

  @Column({ default: true })
  @FilterableField()
  @Field()
  status?: boolean;

  @Column({ default: true })
  @FilterableField()
  @Field()
  type?: boolean;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @Field()
  price?: number;

  @Column({ nullable: true, default: 0 })
  @FilterableField()
  @Field()
  offer?: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'createdby' })
  @Field(() => User, { nullable: true })
  createdby?: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updatedby' })
  @Field(() => User, { nullable: true })
  updatedby?: User;

  @CreateDateColumn()
  createddate: Date;

  @UpdateDateColumn()
  updateddate: Date;
}
