import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { DataSolarModule } from './data-solar/data-solar.module';

@Module({
  imports: [EventsModule, DataSolarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
