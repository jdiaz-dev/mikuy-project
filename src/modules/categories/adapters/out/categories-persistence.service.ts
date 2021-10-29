import { Injectable } from '@nestjs/common';
import { ISetIdsToAccessTheCategory, ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';
import { ICreateCategoryRequest } from '../../application/in/create-category.request';
import { IDeleteCategoryRequest } from '../../application/in/delete-category.request';
import { IGetCategoriesRequest } from '../../application/in/get-categories.request';
import { IGetCategoryRequest } from '../../application/in/get-category.request';
import { IUpdateCategoryRequest } from '../../application/in/update-category.request';
import { CreateCategoryDto } from '../in/dtos/create-category.dto';
import { UpdateCategoryDto } from '../in/dtos/update-category.dto';
import { CategoriesCypherService } from './categories-cypher.service';
import { ICategoriesRepository } from './categories-repository';

@Injectable()
export class CategoriesPersistenceService
    implements
        ICreateCategoryRequest,
        IGetCategoryRequest,
        IGetCategoriesRequest,
        IUpdateCategoryRequest,
        IDeleteCategoryRequest
{
    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesCypherService: CategoriesCypherService) {
        this.categoriesRepository = categoriesCypherService;
    }
    createTheCategory(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, createCategoryDto: CreateCategoryDto): any {
        return this.categoriesRepository.createCategory(setIdsToAccessTheMenu, createCategoryDto);
    }
    getTheCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): any {
        return this.categoriesRepository.getCategory(setIdsToAccessTheCategory);
    }
    getTheCategories(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu, setQueries: ISetQueries): any {
        return this.categoriesRepository.getCategories(setIdsToAccessTheMenu, setQueries);
    }
    udpateTheCategory(
        setIdsToAccessTheCategory: ISetIdsToAccessTheCategory,
        updateCategoryDto: UpdateCategoryDto,
    ): any {
        return this.categoriesRepository.udpateCategory(setIdsToAccessTheCategory, updateCategoryDto);
    }
    deleteTheCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): any {
        return this.categoriesRepository.deleteCategory(setIdsToAccessTheCategory);
    }
}
