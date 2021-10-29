import { ISetIdsToAccessTheCategory } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { UpdateCategoryDto } from '../../adapters/in/dtos/update-category.dto';

export interface IUpdateCategoryRequest {
    udpateTheCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory, updateCategoryDto: UpdateCategoryDto): any;
}
