import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  // async create(data: {
  //   nome:;
  //   imagem:;
  //   data_lancamento:;
  //   tempo_duracao:;
  //   genero: {
  //     connect: {

  //     };
  //   participante: {
  //     connect: {
  //     };
  //   };
  // }): Promise<Filme> {
  //   return this.prisma.filme.create({ data });
  // }

  async findAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async findOne(filmeId: number): Promise<Filme> {
    return this.prisma.filme.findUnique({
      where: {
        id: filmeId,
      },
    });
  }

  async update(filmeId: number, data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.update({
      data,
      where: {
        id: filmeId,
      },
    });
  }

  async deleteOne(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }

  async deleteAll() {
    return this.prisma.filme.deleteMany();
  }
}
