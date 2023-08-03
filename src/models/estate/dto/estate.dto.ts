/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt } from "class-validator";

export class estateDTO {
    @ApiProperty()
    @IsString()
    readonly urlImage: string;
    @ApiProperty()
    @IsString()
    readonly ciudad: string;
    @ApiProperty()
    @IsString()
    readonly direccion: string;
    @ApiProperty()
    @IsString()
    readonly informacion: string;
    @ApiProperty()
    @IsInt()
    readonly m3Totales: number;
    @ApiProperty()
    @IsInt()
    readonly m3Contruidos: number;
    @ApiProperty()
    @IsInt()
    readonly numhabitaciones: number;
    @ApiProperty()
    @IsString()
    readonly nombre: string;
    @ApiProperty()
    @IsString()
    readonly tipoinmueble: string;
}
