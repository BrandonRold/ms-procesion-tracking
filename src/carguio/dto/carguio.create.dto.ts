import { IsBoolean, IsDateString, IsInt, IsPositive     } from "class-validator";

    export class CarguioCreateDto {

        @IsDateString()
        hora_inicio!: string;

        @IsDateString()
        hora_fin!: string;
        
        @IsInt()
        @IsPositive()
        jornada_id!: number;
        
        @IsInt()
        @IsPositive()
        tiempo_asignado!: number;

        @IsBoolean()
        estado!: boolean;

    }