import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { ItemEntity } from '../item.entity';
import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@Entity()
@ObjectType()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @FilterableField()
  name: string;

  @ManyToMany(() => ItemEntity)
  @JoinTable()
  items: ItemEntity[];
}