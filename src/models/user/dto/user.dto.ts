/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, IsEmail,IsDate } from "class-validator";

export class userDTO {
    @ApiProperty()
    @IsString()
    @MinLength(3)
    readonly name: string;
    
    @ApiProperty()
    @IsString()
    @IsEmail()
    readonly email: string;
    
    
    @ApiProperty()
    @IsString()
    readonly password: string;

    @ApiProperty()
    @IsString() 
    readonly city: string;

    @ApiProperty()
    @IsString()
    readonly country: string;
}
