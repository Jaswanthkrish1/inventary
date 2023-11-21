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
} from 'typeorm';
import { User } from '../user/user.entity';
import { FoodCategory } from '../foodcategory/foodcategory.entity';
import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@Entity('item_entity')
@ObjectType()
export class ItemEntity {
  @PrimaryGeneratedColumn()
  @FilterableField()
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column('longblob', { nullable: true }) // Add the image_data column
  image_data?: string;

  @Column({ nullable: true }) // Add the image_data column
  image_?: string;

  @ManyToOne(() => FoodCategory, { cascade: true, eager: true })
  @JoinColumn()
  // @FilterableField()
  category?: FoodCategory;

  @Column({ default: true })
  @FilterableField()
  status?: boolean;

  @Column({ default: true })
  @FilterableField()
  type?: boolean;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price?: number;

  @Column({ nullable: true })
  offer?: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'createdBy' })
  createdby?: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updatedBy' })
  updatedby?: User;

  @CreateDateColumn()
  createddate: Date;

  @UpdateDateColumn()
  updateddate: Date;
}
