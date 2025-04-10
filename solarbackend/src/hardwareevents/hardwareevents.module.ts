import { Module } from '@nestjs/common';
import { HardwareeventsService } from './hardwareevents.service';
import { HardwareeventsGateway } from './hardwareevents.gateway';
import { CacheModule } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [CacheModule.register(), ScheduleModule.forRoot(), EventsModule],
  providers: [HardwareeventsGateway, HardwareeventsService],
})
export class HardwareeventsModule { }
