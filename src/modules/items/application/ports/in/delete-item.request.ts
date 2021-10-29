import { ISetIdsToAccessTheItem } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IDeleteItemRequest {
    deleteItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem): any;
}
