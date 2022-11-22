import { IsNotEmpty, IsOptional } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateRacerInput {
  @Field(()=>String)
  @IsNotEmpty()
  name: string
}

@InputType()
export class UpdateRacerInput {
  @Field(()=>String)
  @IsOptional()
  name: string
}
