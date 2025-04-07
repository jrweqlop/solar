import { InternalServerErrorException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DataSolarService {

  constructor(private readonly prisma: PrismaService) { }

  async findAllMppt(): Promise<DataAllMpptSolarCharger[]> {
    const result = await this.prisma.dATA_ALL_MPPT_SOLAR_CHARGER.findMany({
      orderBy: { createAted: 'desc' }, take: 10
    })
    if (!result) throw new InternalServerErrorException()
    return result
  }

  async findAllIntertor(): Promise<DataAllHvInverter[]> {
    const result = await this.prisma.dATA_ALL_HV_Inverter.findMany({
      orderBy: {
        createAted: 'desc'
      }, take: 10
    })
    if (!result) throw new InternalServerErrorException()
    return result
  }

}
