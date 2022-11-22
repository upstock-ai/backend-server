import { Injectable } from '@nestjs/common'
import { OneRepoQuery, RepoQuery } from '../declare/declare.module'
import { RacerRepository } from './racer.repository'
import { Racer, CreateRacerInput, UpdateRacerInput } from '../entities'

@Injectable()
export class RacerService {
constructor(private readonly racerRepository: RacerRepository) {}

getMany(qs: RepoQuery<Racer>) {
  return this.racerRepository.getMany(qs || {});
}

getOne(qs: OneRepoQuery<Racer>) {
  return this.racerRepository.getOne(qs || {});
}

create(input: CreateRacerInput):Promise<Racer> {
  return this.racerRepository.save(input);
}

createMany(input: CreateRacerInput[]):Promise<Racer[]> {
  return this.racerRepository.save(input);
}

async update(id:number, input: UpdateRacerInput):Promise<Racer> {
  const racer = await this.racerRepository.findOne({ where: { id } })
  return this.racerRepository.save({ ...racer, ...input })
}

async delete(id: number) {
  const racer = this.racerRepository.findOne({ where: { id } })
  await this.racerRepository.delete({ id })
  return racer
}
}
