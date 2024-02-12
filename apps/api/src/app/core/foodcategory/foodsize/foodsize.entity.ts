import { FilterableField, FilterableUnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
} from 'typeorm';
import { ItemEntity } from '../../item/item.entity';

@Entity()
@ObjectType()
export class FoodSize {
  @PrimaryGeneratedColumn()
  @FilterableField()
  @Field()
  id: number;

  @Column()
  @FilterableField()
  @Index({ unique: true })
  @Field()
  name: string;

  @OneToMany(() => ItemEntity, (items) => items.foodsize)
  items!: ItemEntity[];

  @Column({ default: true })
  @Field()
  @FilterableField()
  isActive?: boolean;

}
