import { ISetIdsToAccessTheCategory } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IGetCategoryRequest {
    getTheCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): any;
}
