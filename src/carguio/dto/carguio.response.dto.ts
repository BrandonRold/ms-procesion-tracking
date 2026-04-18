import { Expose } from "class-transformer";

export class CarguioResponseDto {
  @Expose()
  id!: number;
  @Expose()
  hora_inicio!: Date;
  @Expose()
  hora_final!: Date;

  @Expose()
  jornada_id!: number;

  @Expose()
  tiempo_asignado!: number;

  @Expose()
  estado!: boolean;

  @Expose()
  create_at!: Date;

  @Expose()
  updated_at!: Date;

    constructor(partial: Partial<CarguioResponseDto>) { 
        Object.assign(this, partial);
    }
}

export class CarguioListResponseDto {
    data?: CarguioResponseDto[];
    total?: number;
    page?: number;
    limit?: number;
}