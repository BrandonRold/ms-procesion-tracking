import { Body, Controller, Get, HttpCode, HttpStatus, NotFoundException,    Patch, Post } from '@nestjs/common';
import { TipoJornadaService } from './tipo-jornada.service';
 

@Controller('tipo-jornada')
export class TipoJornadaController {

    constructor(private readonly tipoJornadaService: TipoJornadaService) {}
    
    @Get("")
    async findAll() {
        return  this.tipoJornadaService.findAll();
        
    }
    
    @Get(':id')
    async findOne(id:number) {
        const data = await this.tipoJornadaService.findOne(id);
        if(!data) {
            throw new NotFoundException(`Tipo Jornada with id ${id} not found`) ;
        }
        return data;
    }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(   data: { nombre: string }) {
        const createdData = await this.tipoJornadaService.create(data);
        return createdData;
    }

    @Patch(':id')
    @HttpCode(HttpStatus.OK)
    async update(id: number, data: { nombre: string }) {
        const updatedData = await this.tipoJornadaService.update(id, data);     
        if (!updatedData) {
            throw new NotFoundException(`Tipo Jornada with id ${id} not found`);
        }
        return updatedData;
    }

}
