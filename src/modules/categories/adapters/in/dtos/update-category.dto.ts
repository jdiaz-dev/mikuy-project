import { IsString } from 'class-validator';

export class UpdateCategoryDto {
    @IsString()
    private name: string;

    @IsString()
    private description: string;
}
