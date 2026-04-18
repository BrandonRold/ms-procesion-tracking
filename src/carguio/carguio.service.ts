import { Injectable } from "@nestjs/common";
import { CarguioRepository } from "./carguio.repository";
import { CarguioListResponseDto, CarguioResponseDto } from "./dto/carguio.response.dto";
import { plainToInstance } from "class-transformer";

@Injectable()
export class CarguioService {
    constructor(private readonly carguioRepository: CarguioRepository) {}

    async findAll(page: number = 1, limit: number = 10) : Promise<CarguioListResponseDto> {
        const [rows, total] = await this.carguioRepository.findAll(page, limit);
        return {
            data: plainToInstance(CarguioResponseDto, rows, { excludeExtraneousValues: true }),
            total,
            page,
            limit
        };
    }
}