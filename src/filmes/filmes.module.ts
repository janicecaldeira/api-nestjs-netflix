import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';

@Module({
  providers: [FilmesService],
})
export class FilmesModule {}
