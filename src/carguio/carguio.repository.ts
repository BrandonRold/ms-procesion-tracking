import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CarguioRepository {
 
  constructor(private readonly prismaService: PrismaService) {}

    async findAll(page:number = 1, limit: number = 10) : Promise<[any[], number]> {
    return  this.prismaService.$transaction([
        this.prismaService.carguios.findMany({
            skip: (page - 1) * limit,
            take: limit,
            orderBy: { id: 'desc' }
        }),
        this.count(),
     ]);
      
    }
    count() {
        return this.prismaService.carguios.count();
    }

  findOne(id: number) {
    return this.prismaService.carguios.findUnique({
      where: { id },
    });
  }
  create(data: Prisma.carguiosCreateInput) {
    return this.prismaService.carguios.create({data});
  }

  updated(id: number, data: Prisma.carguiosUpdateInput) {
    return this.prismaService.carguios.update({
      where: { id },
      data 
    });
  }
}