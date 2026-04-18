import { Module } from "@nestjs/common";
import { CarguioController } from "./carguio.controller";
import { CarguioRepository } from "./carguio.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { CarguioService } from "./carguio.service";

@Module({
  providers: [CarguioService , CarguioRepository, PrismaService],
  controllers: [CarguioController]
})
export class CarguioModule {}