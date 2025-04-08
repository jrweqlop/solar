import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { DataSolarService } from './data-solar.service';
import { seconds, Throttle } from '@nestjs/throttler';

@Controller('data-solar')
export class DataSolarController {
  constructor(private readonly dataSolarService: DataSolarService) { }

  @Throttle({ default: { limit: 3, ttl: seconds(10) } })
  @Get('data/Mppt')
  async findAll(): Promise<DataAllMpptSolarCharger[]> {
    const result = await this.dataSolarService.findAllMppt()
    if (!result) throw new InternalServerErrorException()
    return result
  }

  @Throttle({ default: { limit: 3, ttl: seconds(10) } })
  @Get('data/Invertor')
  async findAllInVertor(): Promise<DataAllHvInverter[]> {
    const result = await this.dataSolarService.findAllIntertor()
    if (!result) throw new InternalServerErrorException()
    return result
  }

}