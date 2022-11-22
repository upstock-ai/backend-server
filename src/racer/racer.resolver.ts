import { GraphqlPassportAuthGuard } from '../modules/guards/graphql-passport-auth.guard'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { RacerService } from './racer.service'
import {
  GetManyInput,
  GetRacerType,
  Racer,
  UpdateRacerInput,
  CreateRacerInput,
  GetOneInput,
} from '../entities'

@Resolver()
export class RacerResolver {
constructor(private readonly racerService: RacerService) {}

@Query(() => GetRacerType)
@UseGuards(new GraphqlPassportAuthGuard('admin'))
getManyRacers(@Args({ name: 'input', nullable: true }) qs: GetManyInput<Racer>) {
  return this.racerService.getMany(qs);
}

@Query(() => Racer)
@UseGuards(new GraphqlPassportAuthGuard('admin'))
getOneRacer(@Args({ name: 'input', nullable: true }) qs: GetOneInput<Racer>) {
  return this.racerService.getOne(qs);
}

@Mutation(() => Racer)
@UseGuards(new GraphqlPassportAuthGuard('admin'))
createRacer(@Args('input') input: CreateRacerInput) {
  return this.racerService.create(input);
}

@Mutation(()=> [Racer])
@UseGuards(new GraphqlPassportAuthGuard('admin'))
createManyRacer(
  @Args({ name: 'input', type: () => [CreateRacerInput] })
  input: CreateRacerInput[],
) {
  return this.racerService.createMany(input);
}

@Mutation(() => Racer)
@UseGuards(new GraphqlPassportAuthGuard('admin'))
updateRacer(@Args('id') id: number, @Args('input') input: UpdateRacerInput) {
  return this.racerService.update(id, input);
}

@Mutation(() => Racer)
@UseGuards(new GraphqlPassportAuthGuard('admin'))
deleteRacer(@Args('id') id: number) {
  return this.racerService.delete(id);
}
}
