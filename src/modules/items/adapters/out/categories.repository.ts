import { CreateItemDto } from '../in/dtos/create-item.dto';
import { ISetIdsToAccessTheCategory } from 'src/shared/interfaces/set-ids/set-ids-to-access';
import { ISetIdsToAccessTheItem } from './../../../../shared/interfaces/set-ids/set-ids-to-access';
import { UpdateItemDto } from '../in/dtos/update-item.dto';
import { ISetQueries } from 'src/shared/interfaces/set-queries';

export interface ICategoriesRepository {
    createItem(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory, createItemDto: CreateItemDto): Promise<any>;
    getItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem): Promise<any>;
    getItems(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory, setQueries: ISetQueries): Promise<any>;
    updateItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem, updateItemDto: UpdateItemDto): Promise<any>;
    deleteItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem): Promise<any>;
}
