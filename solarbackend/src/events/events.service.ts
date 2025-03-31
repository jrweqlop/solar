import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BasicData, Prisma } from '@prisma/client';

@Injectable()
export class EventsService {

  constructor(private readonly prisma: PrismaService) { }
  async create(data: Prisma.BasicDataCreateInput): Promise<BasicData> {
    const result = await this.prisma.basicData.create({ data })
    return result
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
