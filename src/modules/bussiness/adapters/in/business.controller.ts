import { Controller, Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ICreateBussinesRequest } from '../../application/ports/in/create-bussines.request';
import { IDeleteBusinessRequest } from '../../application/ports/in/delete-business.request';
import { IGetBussinesRequest } from '../../application/ports/in/get-bussines.request';
import { IUpdateBussinesRequest } from '../../application/ports/in/update-bussines';
import { IUpdateLogoRequest } from '../../application/ports/in/update-logo.request';
import { BusinessPersistenceService } from '../out/business-persistence.service';
import { CreateBusinessDto } from './dtos/create-business.dto';
import { UpdateBusinessDto } from './dtos/update-business.dto';
import { UpdateLogoDto } from './dtos/update-logo.dto';

@Controller('accounts/:accountId/businesses')
export class BusinessController {
    private createBussinesRequest: ICreateBussinesRequest;
    private getBussinesRequest: IGetBussinesRequest;
    private updateBussinesRequest: IUpdateBussinesRequest;
    private updateLogoRequest: IUpdateLogoRequest;
    private deleteBusinessRequest: IDeleteBusinessRequest;

    constructor(businessPersistenceService: BusinessPersistenceService) {
        this.createBussinesRequest = businessPersistenceService;
        this.getBussinesRequest = businessPersistenceService;
        this.updateBussinesRequest = businessPersistenceService;
        this.updateLogoRequest = businessPersistenceService;
        this.deleteBusinessRequest = businessPersistenceService;
    }
    @Post()
    creaBussines(@Param('accountId') accountId: string, @Body() createBusinessDto: CreateBusinessDto) {
        return this.createBussinesRequest.createTheBussines(accountId, createBusinessDto);
    }
    @Get(':businessId')
    getBussines(@Param('accountId') accountId: string, @Param('businessId') businessId: string) {
        return this.getBussinesRequest.getTheBussines({ accountId, businessId });
    }
    @Put(':businessId')
    updateBussiness(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Body() updateBusinessDto: UpdateBusinessDto,
    ) {
        return this.updateBussinesRequest.updateTheBussines({ accountId, businessId }, updateBusinessDto);
    }
    @Put(':businessId/logo')
    updateLogo(
        @Param('accountId') accountId: string,
        @Param('businessId') businessId: string,
        @Body() updateLogoDto: UpdateLogoDto,
    ) {
        return this.updateLogoRequest.updateTheLogo({ accountId, businessId }, updateLogoDto);
    }
    @Delete(':businessId')
    deleteBussines(@Param('accountId') accountId: string, @Param('businessId') businessId: string) {
        return this.deleteBusinessRequest.deleteTheBusiness({ accountId, businessId });
    }
}
