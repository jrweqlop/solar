import { Injectable } from '@nestjs/common';
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
}
