import { Module } from '@nestjs/common';
import { DataSolarService } from './data-solar.service';
import { DataSolarController } from './data-solar.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { EventsModule } from 'src/events/events.module';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [EventsModule, CacheModule.register()],
  controllers: [DataSolarController],
  providers: [DataSolarService, PrismaService],
})
export class DataSolarModule { }
