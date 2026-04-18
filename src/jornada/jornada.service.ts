import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
 

@Injectable()
export class JornadaService {

constructor(private prisma : PrismaService){
}

  

  async getAllJornadas() : Promise<any[]>  {
    const data = await this.prisma.jornadas.findMany({
      include: {grupos: true}
    });
    return data;
    } 

  addJornada = () => {
    return "algo";
  }
}
