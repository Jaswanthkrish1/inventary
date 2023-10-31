import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('core_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true})
  role: string;

  @Column({ default: true })
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
