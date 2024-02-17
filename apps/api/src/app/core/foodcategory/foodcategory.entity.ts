import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
} from 'typeorm';
import { ItemEntity } from '../item/item.entity';

@Entity()
@ObjectType()
export class FoodCategory {
  @PrimaryGeneratedColumn()
  @FilterableField()
  @Field()
  id: number;

  @Column()
  @FilterableField()
  @Index({ unique: true })
  @Field()
  name: string;

  @Column({ type: 'mediumtext', nullable: true })
  @Field({ nullable: true })
  category_image?: string | null;

  @OneToMany(() => ItemEntity, (items) => items.category)
  items!: ItemEntity[];

  @Column({ default: true })
  @Field()
  @FilterableField()
  isActive?: boolean;
}
