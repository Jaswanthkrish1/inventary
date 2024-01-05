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
} from '@nestjs-query/query-graphql';

@Entity('item_entity')
@ObjectType()
export class ItemEntity {
  @PrimaryGeneratedColumn()
  @FilterableField()
  id?: number;

  @Column({ nullable: true })
  @FilterableField()
  @Field()
  name?: string;

  @Column({ type: 'text', nullable: true}) // Add the image_data column
  @Field({ nullable: true })
  image_data?: string;

  @Column({ nullable: true }) // Add the image_data column
  image_?: string;

  // @Column({name: "category_id",})
  // @Field({nullable: true })
  // categoryid: number;

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
