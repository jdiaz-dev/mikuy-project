import { ISetIdsToAccessTheCategory, ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';
import { CreateCategoryDto } from '../in/dtos/create-category.dto';
import { UpdateCategoryDto } from '../in/dtos/update-category.dto';

export interface ICategoriesRepository {
    createCategory(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, createCategoryDto: CreateCategoryDto): Promise<any>;
    getCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): Promise<any>;
    getCategories(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, setQueries: ISetQueries): Promise<any>;
    udpateCategory(
        setIdsToAccessTheCategory: ISetIdsToAccessTheCategory,
        updateCategoryDto: UpdateCategoryDto,
    ): Promise<any>;
    deleteCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): Promise<any>;
}
