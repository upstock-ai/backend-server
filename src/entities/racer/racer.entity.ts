import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
@Entity()
export class Racer {
  @Field(() => ID)
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => String)
  @Column()
  name: string

}

@ObjectType()
export class GetRacerType {
  @Field(() => [Racer], { nullable: true })
  data?: Racer[];

  @Field(() => Number, { nullable: true })
  count?: number;
}
