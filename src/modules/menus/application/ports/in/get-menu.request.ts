import { ISetIdsToAccessTheMenu } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IGetMenuRequest {
    getTheMenu(ISetIdsToAccessTheMenu: ISetIdsToAccessTheMenu): any;
}
