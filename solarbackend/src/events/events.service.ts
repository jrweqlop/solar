import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BasicData, Prisma } from '@prisma/client';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { WebSocket } from 'ws';

@Injectable()
export class EventsService {

  constructor(private readonly prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache) { }
  async create(data: Prisma.BasicDataCreateInput): Promise<BasicData> {
    const result = await this.prisma.basicData.create({ data })
    return result
  }

  async SetWebsocketCache(data: InternetData, sender: WebSocket) {
    await this.cacheManager.set('lastWebsocketData', data)
    await this.cacheManager.set('client_send', sender)
  }

  async GetWebSocketCache() {
    const result = await this.cacheManager.get('lastWebsocketData') as InternetData
    const sender = await this.cacheManager.get('client_send') as WebSocket
    return [JSON.stringify(result), sender]
  }

  async createData(data1: InternetData['DATA_ALL_HV_Inverter'], data2: InternetData['DATA_ALL_MPPT_SOLAR_CHARGER']) {
    const createDataAllHvInverter = await this.prisma.dATA_ALL_HV_Inverter.create({ data: data1 })
    if (!createDataAllHvInverter) throw new BadRequestException()
    const createDataMpptSolarCharger = await this.prisma.dATA_ALL_MPPT_SOLAR_CHARGER.create({ data: data2 })
    if (!createDataMpptSolarCharger) throw new BadRequestException()
    return true
  }

  async getData() {
    const dataHvInverter = await this.prisma.dATA_ALL_HV_Inverter.findMany({
      where: {
        createAted: {
          lte: new Date(),
          gte: new Date()
        }
      }
    })
    const dataMpptSolarCHarger = await this.prisma.dATA_ALL_MPPT_SOLAR_CHARGER.findMany({
      where: {
        createAted: {
          lte: new Date(),
          gte: new Date()
        }
      }
    })
    const result = {
      DATA_ALL_HV_Inverter: dataHvInverter,
      DATA_ALL_MPPT_SOLAR_CHARGER: dataMpptSolarCHarger
    }
    return result
  }
}
