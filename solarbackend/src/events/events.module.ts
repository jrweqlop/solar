import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsGateway } from './events.gateway';
import { PrismaService } from 'src/prisma/prisma.service';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [CacheModule.register(), ScheduleModule.forRoot()],
  providers: [EventsGateway, EventsService, PrismaService],
  exports: [EventsService]
})
export class EventsModule { }
