import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VilleModule } from './ville/ville.module';

@Module({
  imports: [VilleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
