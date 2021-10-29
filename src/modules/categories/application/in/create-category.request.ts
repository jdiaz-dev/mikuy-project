import { ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { CreateCategoryDto } from '../../adapters/in/dtos/create-category.dto';

export interface ICreateCategoryRequest {
    createTheCategory(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, createCategoryDto: CreateCategoryDto): any;
}
