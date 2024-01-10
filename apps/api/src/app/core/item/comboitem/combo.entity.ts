import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';
import { User } from '../../user/user.entity';

@ObjectType()
export class OfferItem {
  @Field(() => ID)
  id?: number;

  @Field()
  name?: string;

  @Field({ nullable: true })
  image_data?: string;
}

@Entity('Combo_offer')
@ObjectType()
export class Offer {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @FilterableField()
  name: string;

  @Column({ type: 'json', nullable: true })
  @Field(() => [OfferItem], { nullable: true })
  items: OfferItem[];

  @CreateDateColumn()
  createddate: Date;

  @UpdateDateColumn()
  updateddate: Date;

  @Column({ default: true })
  @FilterableField()
  @Field()
  status?: boolean;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'createdby' })
  @Field(() => User, { nullable: true })
  createdby?: User;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'updatedby' })
  @Field(() => User, { nullable: true })
  updatedby?: User;

}