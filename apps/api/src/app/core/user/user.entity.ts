import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('core_user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true})
  @FilterableField()
  role: string;

  @Column({ default: true })
  @FilterableField()
  status: boolean;

  @Column( { nullable: true})
  createdBy: string;

  @Column({ nullable: true})
  updatedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
