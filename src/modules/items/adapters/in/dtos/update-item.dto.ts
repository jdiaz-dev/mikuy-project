import { IsNumber, IsString } from 'class-validator';

export class UpdateItemDto {
    @IsString()
    private name: string;

    @IsString()
    private description: string;

    @IsNumber()
    private price: number;

    @IsString()
    private photo: string;

    @IsString()
    private money: string;
}
