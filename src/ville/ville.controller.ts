import { Controller, Get } from '@nestjs/common';
import { VilleService } from './ville.service';


@Controller('villes')
export class VilleController {
    constructor(private readonly villeService: VilleService){}

    @Get()
    getAll() {
        return this.villeService.getAll();
    }
}