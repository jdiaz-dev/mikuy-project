import { ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IDeleteMenuRequest {
    deleteTheMenu(setIdsToAccessTheMenu: ISetIdsToAccessTheMenu): any;
}
