import { Module } from '@nestjs/common';
import { TipoJornadaService } from './tipo-jornada.service';
import { TipoJornadaController } from './tipo-jornada.controller';
import { TipoJornadaRepository } from './tipo-jornada.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TipoJornadaService , TipoJornadaRepository, PrismaService],
  controllers: [TipoJornadaController]
})
export class TipoJornadaModule {}
