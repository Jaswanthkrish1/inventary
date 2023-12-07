// @Entity('item_entity')
// export class ItemEntity {
//     @PrimaryGeneratedColumn()
//     id: number;

// }

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
  OneToOne,
  ViewColumn,
  ViewEntity,
} from 'typeorm';
import { User } from '../user/user.entity';
import { FoodCategory } from '../foodcategory/foodcategory.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { FilterableField, FilterableUnPagedRelation, Relation } from '@nestjs-query/query-graphql';
import { UserInput } from '../user/user.input';
import { View } from 'typeorm/schema-builder/view/View';

@Entity('item_entity')
@FilterableUnPagedRelation('items',() => FoodCategory)
@ObjectType()
@ViewEntity({
  name: 'item_view_table',
  expression: `
  SELECT
      item.id as "id",
      item.name as "name",
      item.image_data as "image_data",
      item.image_ as "image_",
      item.category_id as "categoryid",
      item.status as "status",
      item.type as "type",
      item.price as "price",
      item.offer as "offer",
      item.createdBy as "createdBy",
      item.updatedBy as "updatedBy",
      item.createdDate as "createdDate",
      item.updatedDate as "updatedDate"
    FROM
      inventary.item_entity item
    LEFT JOIN
      inventary.food_category food_category ON item.category_id = food_category.id`
})
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

  @Column({name: "category_id",})
  @Field({nullable: true })
  categoryid: number;
  
  @ManyToOne(() => FoodCategory, (category)=> category.items  )
  @JoinColumn({ name: 'category_id' })
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
  @JoinColumn({ name: 'createdBy' })
  @Field(() => User, { nullable: true })
  createdby?: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updatedBy' })
  @Field(() => User, { nullable: true })
  updatedby?: User;

  @CreateDateColumn()
  createddate: Date;

  @UpdateDateColumn()
  updateddate: Date;
}
