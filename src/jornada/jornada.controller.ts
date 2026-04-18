import { Body, Controller, Get, Post } from "@nestjs/common";
import { JornadaService } from "./jornada.service";

@Controller("jornada")
export class JornadaController {
  constructor(private jornadaService: JornadaService) {}
  
  

  @Get("/prueba")
   async getAllJornadas(): Promise<{status: string, data: any}> {
    const jornada = await this.jornadaService.getAllJornadas();
    return  {
      status: "success",
      data: jornada
    }
  }

  @Get("/")
  getAll() {
    return this.jornadaService.getAllJornadas();
  }

 
  @Post("/create")
  createJornada(@Body() jornada: IJornada) {
     return jornada ; 
  }
}

interface IJornada {
  id: number;
  name: string;
}

 