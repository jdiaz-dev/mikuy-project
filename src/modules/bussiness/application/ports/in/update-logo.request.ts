import { UpdateLogoDto } from 'src/modules/bussiness/adapters/in/dtos/update-logo.dto';
import { ISetIdsToAccessTheBusiness } from 'src/shared/interfaces/set-ids/set-ids-to-access';

export interface IUpdateLogoRequest {
    updateTheLogo(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, updateLogoDto: UpdateLogoDto): any;
}
