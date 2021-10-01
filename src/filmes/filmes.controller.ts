import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.createFilme(createFilme);
  }

  // @Get('/findAll')
  // @UsePipes(ValidationPipe)

  // @Get('/findOne/:id')
  // @UsePipes(ValidationPipe)

  // @Put('/update/:id')
  // @UsePipes(ValidationPipe)

  // @Delete('/deleteOne/:id')
  // @UsePipes(ValidationPipe)

  // @Delete('/deleteAll')
  // @UsePipes(ValidationPipe)
}
