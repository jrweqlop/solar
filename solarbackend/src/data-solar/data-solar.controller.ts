import { Controller, Get, InternalServerErrorException, UseInterceptors } from '@nestjs/common';
import { DataSolarService } from './data-solar.service';
import { seconds, SkipThrottle, Throttle } from '@nestjs/throttler';
import { EventsService } from 'src/events/events.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('data-solar')
export class DataSolarController {
  constructor(private readonly dataSolarService: DataSolarService,
    private readonly eventServices: EventsService
  ) { }

  @SkipThrottle()
  @Get()
  async getCache() {
    const result = await this.eventServices.GetWebSocketCache() as { client: any, data: InternetData }
    // console.log(value, sender)
    if (typeof result.data === 'object') {
      console.log('true')
    } else {
      console.log('false')
      throw new InternalServerErrorException()
    }
    return result.data
  }

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