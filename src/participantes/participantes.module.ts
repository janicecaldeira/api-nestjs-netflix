import { Module } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';

@Module({
  providers: [ParticipantesService],
})
export class ParticipantesModule {}
