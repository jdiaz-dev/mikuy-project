import { IsString } from 'class-validator';

export class UpdateMenuDto {
    @IsString()
    private name: string;

    @IsString()
    private description: string;
}
