import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ICreateCategoryRequest } from '../../application/in/create-category.request';
import { IDeleteCategoryRequest } from '../../application/in/delete-category.request';
import { IGetCategoriesRequest } from '../../application/in/get-categories.request';
import { IGetCategoryRequest } from '../../application/in/get-category.request';
import { IUpdateCategoryRequest } from '../../application/in/update-category.request';
import { CategoriesPersistenceService } from '../out/categories-persistence.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';
import { LimitPipe } from './../../../../shared/pipes/limit.pipe';

@Controller('accounts/:accountId/businesses/:businessId/menus/:menuId/categories')
export class CategoriesController {
    createCategoryRequest: ICreateCategoryRequest;
    getCategoryRequest: IGetCategoryRequest;
    getCategoriesRequest: IGetCategoriesRequest;
    updateCategoryRequest: IUpdateCategoryRequest;
    deleteCategoryRequest: IDeleteCategoryRequest;

    constructor(categoriesPersistenceService: CategoriesPersistenceService) {
        this.createCategoryRequest = categoriesPersistenceService;
        this.getCategoryRequest = categoriesPersistenceService;
        this.getCategoriesRequest = categoriesPersistenceService;
        this.updateCategoryRequest = categoriesPersistenceService;
        this.deleteCategoryRequest = categoriesPersistenceService;
    }
    @Post()
    createCategory(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
        @Body() createCategoryDto: CreateCategoryDto,
    ) {
        return this.createCategoryRequest.createTheCategory({ accountId, businessId, menuId }, createCategoryDto);
    }
    @Get(':categoryId')
    getCategory(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
        @Param('categoryId') categoryId: string,
    ) {
        return this.getCategoryRequest.getTheCategory({ accountId, businessId, menuId, categoryId });
    }
    @Get()
    getCategories(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,

        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
        @Query('size', new DefaultValuePipe(30), ParseIntPipe, LimitPipe) size: number,
        @Query('orderBy', new DefaultValuePipe('_id')) orderBy: string,
        @Query('search', new DefaultValuePipe('')) search: string,
    ) {
        return this.getCategoriesRequest.getTheCategories({ accountId, businessId, menuId }, { offset, size, orderBy });
    }

    @Put(':categoryId')
    updateCatgory(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
        @Param('categoryId') categoryId: string,
        @Body() updateCategoryDto: UpdateCategoryDto,
    ) {
        return this.updateCategoryRequest.udpateTheCategory(
            { accountId, businessId, menuId, categoryId },
            updateCategoryDto,
        );
    }
    @Delete(':categoryId')
    deleteCategory(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
        @Param('categoryId') categoryId: string,
    ) {
        return this.deleteCategoryRequest.deleteTheCategory({ accountId, businessId, menuId, categoryId });
    }
}
