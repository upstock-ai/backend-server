import { Racer } from '../entities'
import { CustomRepository } from '../modules/decorators/typeorm.decorator'
import { Repository } from 'typeorm/repository/Repository'

@CustomRepository(Racer)
export class RacerRepository extends Repository<Racer> {
}
