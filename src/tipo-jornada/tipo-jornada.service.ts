import { Injectable } from '@nestjs/common';
import { TipoJornadaRepository } from './tipo-jornada.repository';
import { plainToInstance } from 'class-transformer';
import { TipoJornadaResponseDto } from './dto/tipo-jornada-reponse.dto';
 
@Injectable()
export class TipoJornadaService {
  constructor(private readonly repo: TipoJornadaRepository) {}
   
    async findAll() {
        const data = await  this.repo.findAll();

        return plainToInstance(TipoJornadaResponseDto, data, { excludeExtraneousValues: true });
    }

    async findOne(id: number) { 
        const  data = await this.repo.findOne(id);
        return plainToInstance(TipoJornadaResponseDto, data, { excludeExtraneousValues: true });
    }

    async create(data: { nombre: string }) {
        const createdData = await this.repo.create(data);
        return plainToInstance(TipoJornadaResponseDto, createdData, { excludeExtraneousValues: true });
    }
    async update(id: number, data: { nombre: string }) {
        const response = await this.repo.update(id, data);
        return plainToInstance(TipoJornadaResponseDto, response, { excludeExtraneousValues: true });
    }   

}
