import { Module } from '@nestjs/common';
import { DataSolarService } from './data-solar.service';
import { DataSolarController } from './data-solar.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DataSolarController],
  providers: [DataSolarService, PrismaService],
})
export class DataSolarModule { }
