import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
@ObjectType()
export class FoodCategory {
  @PrimaryGeneratedColumn()
  @FilterableField()
  id: number;

  @Column()
  @FilterableField()
  @Index({ unique: true })
  name: string;

  @Column({ default: true })
  @FilterableField()
  isActive?: boolean;
}
