import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ItemEntity } from '../item/item.entity';

@Entity()
@ObjectType()
@FilterableRelation('items', () => ItemEntity, {
  nullable: true,
  disableRemove: true,
  disableUpdate: true,
  allowFiltering: true
})
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
  @JoinColumn({ name: 'items' })
  @Field(() => ItemEntity, { nullable: true })
  items!: ItemEntity[];

  @Column({ default: false })
  @Field()
  @FilterableField()
  clientView?: boolean;

  @Column({ default: true })
  @Field()
  @FilterableField()
  isActive?: boolean;
}
