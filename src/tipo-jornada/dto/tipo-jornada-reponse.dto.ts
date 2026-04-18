 
import { Exclude, Expose } from "class-transformer";
 

 
export class TipoJornadaResponseDto {
  @Expose()
  id!: number;

  @Expose()
  nombre!: string;

  @Exclude()
  createdAt!: Date;

  @Exclude()
  updatedAt!: Date;

  constructor(partial: Partial<TipoJornadaResponseDto>) {
    Object.assign(this, partial);
  }
}