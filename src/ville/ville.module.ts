import { HttpModule } from "@nestjs/common";
import { Module } from '@nestjs/common';
import { VilleController } from "./ville.controller";
import { VilleService } from "./ville.service";

@Module({
    imports: [HttpModule.register({
        timeout: 5000,
        maxRedirects: 5,
      })],
    controllers: [VilleController],
    providers: [VilleService]
})
export class VilleModule{}