import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class FoodCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({nullable: true})
  count?:number;
}