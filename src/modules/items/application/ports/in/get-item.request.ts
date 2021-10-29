import { ISetIdsToAccessTheItem } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IGetItemRequest {
    getTheItem(setIdsToAccessTheItem: ISetIdsToAccessTheItem): any;
}
