import { Controller, Get, Query } from "@nestjs/common";
import { CarguioService } from "./carguio.service";
import { PaginationDto } from "src/common/dto/pagination.dto";

@Controller('carguio')
export class CarguioController {

    constructor(private readonly carguioService: CarguioService) {}

    @Get()
    async findAll(@Query() query : PaginationDto) {
        return await this.carguioService.findAll(query.page, query.limit);
    }

    @Get("/test")
      findOne() {
        return "test";
    }
}