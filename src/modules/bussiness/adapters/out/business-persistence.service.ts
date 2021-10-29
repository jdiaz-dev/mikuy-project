import { Injectable } from '@nestjs/common';
import { ICreateBussinesRequest } from '../../application/ports/in/create-bussines.request';
import { IDeleteBusinessRequest } from '../../application/ports/in/delete-business.request';
import { IGetBussinesRequest } from '../../application/ports/in/get-bussines.request';
import { IUpdateBussinesRequest } from '../../application/ports/in/update-bussines';
import { IUpdateLogoRequest } from '../../application/ports/in/update-logo.request';
import { CreateBusinessDto } from '../in/dtos/create-business.dto';
import { UpdateBusinessDto } from '../in/dtos/update-business.dto';
import { UpdateLogoDto } from '../in/dtos/update-logo.dto';
import { ISetIdsToAccessTheBusiness } from '../../../../shared/interfaces/set-ids/set-ids-to-access';
import { BusinessCypherService } from './business-cypher.service';
import { IBussinesRepository } from './bussines.repository';

@Injectable()
export class BusinessPersistenceService
    implements
        ICreateBussinesRequest,
        IGetBussinesRequest,
        IUpdateBussinesRequest,
        IUpdateLogoRequest,
        IDeleteBusinessRequest
{
    private bussinesRepository: IBussinesRepository;

    constructor(businessCypherService: BusinessCypherService) {
        this.bussinesRepository = businessCypherService;
    }

    createTheBussines(accountId: string, createBusinessDto: CreateBusinessDto): any {
        return this.bussinesRepository.createBussines(accountId, createBusinessDto);
    }
    getTheBussines(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness): any {
        return this.bussinesRepository.getBussines(setIdsToAccessTheBusiness);
    }
    updateTheBussines(
        setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness,
        updateBusinessDto: UpdateBusinessDto,
    ): any {
        return this.bussinesRepository.updateBussiness(setIdsToAccessTheBusiness, updateBusinessDto);
    }
    updateTheLogo(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness, updateLogoDto: UpdateLogoDto): any {
        return this.bussinesRepository.updateLogo(setIdsToAccessTheBusiness, updateLogoDto);
    }
    deleteTheBusiness(setIdsToAccessTheBusiness: ISetIdsToAccessTheBusiness): any {
        return this.bussinesRepository.deleteBussines(setIdsToAccessTheBusiness);
    }
}
