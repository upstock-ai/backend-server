import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../modules/decorators/typeorm.module'
import { RacerService } from './racer.service';
import { RacerRepository } from './racer.repository';
import { RacerResolver } from './racer.resolver';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([RacerRepository])],
  providers: [RacerService, RacerResolver],
  exports: [RacerService]
})
export class RacerModule { }
