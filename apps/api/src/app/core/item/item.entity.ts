import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { FoodCategory } from '../foodcategory/foodcategory.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableUnPagedRelation,
} from '@nestjs-query/query-graphql';

@Entity('item_entity')
@FilterableUnPagedRelation('items', () => FoodCategory)
@ObjectType()
export class ItemEntity {
  @PrimaryGeneratedColumn()
  @FilterableField()
  id?: number;

  @Column({ nullable: true })
  @FilterableField()
  @Field()
  name?: string;

  @Column('longblob', { nullable: true }) // Add the image_data column
  @Field()
  image_data?: string;

  @Column({ nullable: true }) // Add the image_data column
  image_?: string;

  // @Column({name: "category_id",})
  // @Field({nullable: true })
  // categoryid: number;

  @ManyToOne(() => FoodCategory, (category) => category.items)
  @JoinColumn({ name: 'category' })
  @Field({ nullable: true })
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

  @Column({ nullable: true })
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
