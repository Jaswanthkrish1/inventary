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
} from 'typeorm';
import { Authenticate } from '../authentication/authenticate.entity';

@Entity('core_user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @FilterableField()
  id: number;

  @Column({ nullable: false })
  @FilterableField()
  role: string;

  @Column({ default: true })
  @FilterableField()
  status: boolean;

  @OneToOne(() => Authenticate, { cascade: true, eager: true })
  @JoinColumn()
  auth: Authenticate;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ nullable: true })
  updatedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
