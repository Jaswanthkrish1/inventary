import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Authenticate } from '../authentication/authenticate.entity';
import { ItemEntity } from '../item/item.entity';

@Entity('core_user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @FilterableField()
  id: number;

  @Column({ nullable: true })
  @FilterableField()
  role: string;

  @Column({ default: true })
  @FilterableField()
  status: boolean;

  @OneToOne(() => Authenticate, { cascade: true, eager: true })
  @JoinColumn()
  auth: Authenticate;

  @OneToMany(() => ItemEntity, (item) => item.createdby)
  items: ItemEntity[];

  @Column({ nullable: true })
  createdBy: string;

  @Column({ nullable: true })
  updatedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
