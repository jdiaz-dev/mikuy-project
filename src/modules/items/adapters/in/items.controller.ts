import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { UpdateMenuDto } from 'src/modules/menus/adapters/in/dtos/update-menu.dto';
import { ICreateItemRequest } from '../../application/ports/in/create-item.request';
import { IDeleteItemRequest } from '../../application/ports/in/delete-item.request';
import { IGetItemRequest } from '../../application/ports/in/get-item.request';
import { IGetItemsRequest } from '../../application/ports/in/get-items.request';
import { IUpdateItemRequest } from '../../application/ports/in/update-item.request';
import { ItemsPersistenceService } from '../out/items-persistence.service';
import { CreateItemDto } from './dtos/create-item.dto';
import { UpdateItemDto } from './dtos/update-item.dto';
import { LimitPipe } from './../../../../shared/pipes/limit.pipe';

@Controller('accounts/:accountId/businesses/:businessId/menus/:menuId/categories/:categoryId/items')
export class ItemsController {
    createItemRequest: ICreateItemRequest;
    getItemRequest: IGetItemRequest;
    getItemsRequest: IGetItemsRequest;
    updateItemRequest: IUpdateItemRequest;
    deleteItemRequest: IDeleteItemRequest;

    constructor(itemsPersistenceService: ItemsPersistenceService) {
        this.createItemRequest = itemsPersistenceService;
        this.getItemRequest = itemsPersistenceService;
        this.getItemsRequest = itemsPersistenceService;
        this.updateItemRequest = itemsPersistenceService;
        this.deleteItemRequest = itemsPersistenceService;
    }
    @Post()
    createItem(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('categoryId') categoryId: string,
        @Param('menuId') menuId: string,

        @Body() createItemDto: CreateItemDto,
    ) {
        return this.createItemRequest.createTheItem({ accountId, businessId, categoryId, menuId }, createItemDto);
    }

    @Get(':itemId')
    getItem(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
        @Param('categoryId') categoryId: string,
        @Param('itemId') itemId: string,
    ) {
        return this.getItemRequest.getTheItem({ accountId, businessId, categoryId, menuId, itemId });
    }

    @Get()
    getItems(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('categoryId') categoryId: string,
        @Param('menuId') menuId: string,

        @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
        @Query('size', new DefaultValuePipe(30), ParseIntPipe, LimitPipe) size: number,
        @Query('orderBy', new DefaultValuePipe('_id')) orderBy: string,
        @Query('search', new DefaultValuePipe('')) search: string,
    ) {
        return this.getItemsRequest.getTheItems(
            { accountId, businessId, categoryId, menuId },
            { offset, size, orderBy },
        );
    }

    @Put(':itemId')
    updateItem(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
        @Param('categoryId') categoryId: string,
        @Param('itemId') itemId: string,
        @Body() updateItemDto: UpdateItemDto,
    ) {
        return this.updateItemRequest.updateTheItem(
            { accountId, businessId, categoryId, menuId, itemId },
            updateItemDto,
        );
    }

    @Delete(':itemId')
    deleteItem(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Param('menuId') menuId: string,
        @Param('categoryId') categoryId: string,
        @Param('itemId') itemId: string,
    ) {
        return this.deleteItemRequest.deleteItem({ accountId, businessId, categoryId, menuId, itemId });
    }
}
