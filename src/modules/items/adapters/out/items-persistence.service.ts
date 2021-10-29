import { Injectable } from '@nestjs/common';
import { ISetIdsToAccessTheCategory, ISetIdsToAccessTheItem } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetQueries } from 'src/shared/interfaces/set-queries';
import { ICreateItemRequest } from '../../application/ports/in/create-item.request';
import { IDeleteItemRequest } from '../../application/ports/in/delete-item.request';
import { IGetItemRequest } from '../../application/ports/in/get-item.request';
import { IGetItemsRequest } from '../../application/ports/in/get-items.request';
import { IUpdateItemRequest } from '../../application/ports/in/update-item.request';
import { CreateItemDto } from '../in/dtos/create-item.dto';
import { UpdateItemDto } from '../in/dtos/update-item.dto';
import { ICategoriesRepository } from './categories.repository';
import { ItemsCypherService } from './items-cypher.service';

@Injectable()
export class ItemsPersistenceService
    implements ICreateItemRequest, IGetItemRequest, IGetItemsRequest, IUpdateItemRequest, IDeleteItemRequest
{
    private categoriesRepository: ICategoriesRepository;

    constructor(itemsCypherService: ItemsCypherService) {
        this.categoriesRepository = itemsCypherService;
    }

    createTheItem(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory, createItemDto: CreateItemDto): any {
        return this.categoriesRepository.createItem(setIdsToAccessTheCategory, createItemDto);
    }
    getTheItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem): any {
        return this.categoriesRepository.getItem(setIdsToAccessTheItem);
    }
    getTheItems(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory, setQueries: ISetQueries): any {
        return this.categoriesRepository.getItems(setIdsToAccessTheCategory, setQueries);
    }
    updateTheItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem, updateItemDto: UpdateItemDto): any {
        return this.categoriesRepository.updateItem(setIdsToAccessTheItem, updateItemDto);
    }
    deleteItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem): any {
        return this.categoriesRepository.deleteItem(setIdsToAccessTheItem);
    }
}
