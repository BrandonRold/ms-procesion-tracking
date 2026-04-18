import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
 
@Injectable()
export class TipoJornadaRepository {
    constructor(private readonly prisma: PrismaService) {}

    findAll() {
        return this.prisma.tipo_jornadas.findMany();
    }

    findOne(id: number) {
        return this.prisma.tipo_jornadas.findUnique({
            where: { id },
        });
    }

    create( data: { nombre: string }) {
        return this.prisma.tipo_jornadas.create({
           data: {
               nombre: data.nombre,
           },
        });
    }
    update(id: number, data: { nombre: string }) {
        return this.prisma.tipo_jornadas.update({
            where: { id },
            data: {
                nombre: data.nombre,
            },
        });
    }
 
}