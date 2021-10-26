import { Controller, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { CreateBussinesDto } from './dtos/create-bussines.dto';
import { UpdateBussinesDto } from './dtos/update-bussines.dto';
import { UpdateLogoDto } from './dtos/update-logo.dto';

@Controller('business')
export class BusinessController {
    @Post()
    creaBussines(@Body() createBussinesDto: CreateBussinesDto) {}
    @Get()
    getBussines() {}
    @Put()
    updateBussiness(@Body() updateBussinesDto: UpdateBussinesDto) {}
    @Put()
    updateLogo(@Body() updateLogoDto: UpdateLogoDto) {}
    @Delete()
    deleteBussines() {}
}
