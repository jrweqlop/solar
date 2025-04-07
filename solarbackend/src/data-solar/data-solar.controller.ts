import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { DataSolarService } from './data-solar.service';
import { Throttle } from '@nestjs/throttler';

@Controller('data-solar')
export class DataSolarController {
  constructor(private readonly dataSolarService: DataSolarService) { }

  @Throttle({ default: { limit: 15, ttl: 10000 } })
  @Get('data/Mppt')
  async findAll(): Promise<DataAllMpptSolarCharger[]> {
    const result = await this.dataSolarService.findAllMppt()
    if (!result) throw new InternalServerErrorException()
    return result
  }

  @Throttle({ default: { limit: 10, ttl: 10000 } })
  @Get('data/Invertor')
  async findAllInVertor(): Promise<DataAllHvInverter[]> {
    const result = await this.dataSolarService.findAllIntertor()
    if (!result) throw new InternalServerErrorException()
    return result
  }

}