import { Module } from '@nestjs/common';
import { JornadaController } from './jornada.controller';
import { JornadaService } from './jornada.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [JornadaService,PrismaService],
  controllers: [JornadaController],
})
export class JornadaModule {}
