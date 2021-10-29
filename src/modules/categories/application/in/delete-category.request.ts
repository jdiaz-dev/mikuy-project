import { ISetIdsToAccessTheCategory } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IDeleteCategoryRequest {
    deleteTheCategory(setIdsToAccessTheCategory: ISetIdsToAccessTheCategory): any;
}
